import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  ArrowLeft, 
  Upload, 
  Save, 
  FileText, 
  ListOrdered,
  Trash2
} from "lucide-react";

const formSchema = z.object({
  title: z.string().min(3, { message: "O título deve ter pelo menos 3 caracteres" }),
  description: z.string().min(10, { message: "A descrição deve ter pelo menos 10 caracteres" }),
  detailedDescription: z.string().min(20, { message: "A descrição detalhada deve ter pelo menos 20 caracteres" }),
  category: z.string().min(1, { message: "A categoria é obrigatória" }),
  price: z.string().refine(val => !isNaN(Number(val)) && Number(val) > 0, {
    message: "O preço deve ser um número positivo"
  }),
  pages: z.string().refine(val => !isNaN(Number(val)) && Number(val) > 0, {
    message: "O número de páginas deve ser um número positivo"
  }),
  popular: z.boolean().default(false),
});

type SummaryFormProps = {
  summary: any;
  onSave: (data: any) => void;
  onCancel: () => void;
  isNew: boolean;
};

const SummaryForm: React.FC<SummaryFormProps> = ({ summary, onSave, onCancel, isNew }) => {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [tableOfContents, setTableOfContents] = useState<string[]>(
    summary?.tableOfContents || ["1. Introdução", "2. Desenvolvimento", "3. Conclusão"]
  );
  const [newTocItem, setNewTocItem] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: summary?.title || "",
      description: summary?.description || "",
      detailedDescription: summary?.detailedDescription || "",
      category: summary?.category || "",
      price: summary?.price?.toString() || "",
      pages: summary?.pages?.toString() || "",
      popular: summary?.popular || false,
    }
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    const summaryData = {
      ...values,
      price: parseFloat(values.price).toFixed(2),
      pages: parseInt(values.pages),
      tableOfContents,
      pdfFile
    };
    
    onSave(summaryData);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type === 'application/pdf') {
        setPdfFile(file);
      } else {
        alert('Por favor, selecione um arquivo PDF');
      }
    }
  };

  const addTocItem = () => {
    if (newTocItem.trim()) {
      setTableOfContents([...tableOfContents, newTocItem.trim()]);
      setNewTocItem("");
    }
  };

  const removeTocItem = (index: number) => {
    setTableOfContents(tableOfContents.filter((_, i) => i !== index));
  };

  return (
    <Card className="border border-rosa-100 shadow-sm">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={onCancel} className="text-rosa-600">
            <ArrowLeft className="h-4 w-4 mr-1" /> Voltar
          </Button>
          <CardTitle className="font-serif text-2xl text-rosa-800">
            {isNew ? "Novo Resumo" : `Editar: ${summary.title}`}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Título</FormLabel>
                      <FormControl>
                        <Input placeholder="Título do resumo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Descrição Breve</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Breve descrição para cartão do resumo" 
                          className="resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="detailedDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Descrição Detalhada</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Descrição completa do conteúdo do resumo" 
                          className="resize-none min-h-[150px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Categoria</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: Anatomia" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preço (R$)</FormLabel>
                        <FormControl>
                          <Input type="number" step="0.01" min="0" placeholder="29.90" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="pages"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Número de Páginas</FormLabel>
                        <FormControl>
                          <Input type="number" min="1" placeholder="42" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="popular"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-end space-x-3 space-y-0 pt-6">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Marcar como Popular</FormLabel>
                          <FormDescription>
                            Exibe um badge de Popular no resumo
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>

                <div>
                  <FormLabel>Arquivo PDF</FormLabel>
                  <div className="mt-2">
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-rosa-200 rounded-md cursor-pointer bg-rosa-50 hover:bg-rosa-100">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 mb-3 text-rosa-500" />
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">Clique para selecionar</span> ou arraste e solte
                        </p>
                        <p className="text-xs text-gray-500">PDF (Máx. 10MB)</p>
                      </div>
                      <input 
                        type="file" 
                        className="hidden" 
                        accept="application/pdf" 
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>
                  {pdfFile && (
                    <p className="mt-2 text-sm text-green-600 flex items-center">
                      <FileText className="h-4 w-4 mr-1" />
                      {pdfFile.name}
                    </p>
                  )}
                  {!pdfFile && summary?.hasPdf && (
                    <p className="mt-2 text-sm text-gray-600 flex items-center">
                      <FileText className="h-4 w-4 mr-1" />
                      PDF atual será mantido
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <FormLabel className="flex items-center gap-2">
                    <ListOrdered className="h-4 w-4" />
                    Sumário
                  </FormLabel>
                  <div className="mt-2 p-4 border border-rosa-100 rounded-md bg-rosa-50 min-h-[350px]">
                    <div className="flex gap-2 mb-4">
                      <Input 
                        value={newTocItem} 
                        onChange={(e) => setNewTocItem(e.target.value)}
                        placeholder="Novo item do sumário" 
                        className="flex-grow"
                      />
                      <Button 
                        type="button" 
                        onClick={addTocItem} 
                        className="bg-rosa-500 hover:bg-rosa-600"
                      >
                        Adicionar
                      </Button>
                    </div>
                    
                    <ul className="space-y-2">
                      {tableOfContents.map((item, index) => (
                        <li key={index} className="flex justify-between items-center p-2 bg-white rounded border border-rosa-100">
                          <span>{item}</span>
                          <Button 
                            type="button" 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => removeTocItem(index)} 
                            className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <CardFooter className="flex justify-end gap-4 px-0">
              <Button type="button" variant="outline" onClick={onCancel} className="border-rosa-200">
                Cancelar
              </Button>
              <Button type="submit" className="bg-rosa-500 hover:bg-rosa-600">
                <Save className="h-4 w-4 mr-2" />
                {isNew ? "Criar Resumo" : "Salvar Alterações"}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SummaryForm;
