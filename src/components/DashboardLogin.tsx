
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock } from 'lucide-react';

// Form schema
const formSchema = z.object({
  username: z.string().min(1, { message: "Usuário é obrigatório" }),
  password: z.string().min(1, { message: "Senha é obrigatória" })
});

type LoginProps = {
  onLogin: (credentials: { username: string; password: string }) => void;
};

const DashboardLogin: React.FC<LoginProps> = ({ onLogin }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: ""
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    onLogin(values);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-rosa-50">
      <Card className="w-full max-w-md shadow-md">
        <CardHeader>
          <div className="flex justify-center mb-2">
            <div className="w-12 h-12 bg-rosa-100 flex items-center justify-center rounded-full">
              <Lock className="text-rosa-600 h-6 w-6" />
            </div>
          </div>
          <CardTitle className="text-center text-2xl font-serif text-rosa-800">
            Área Administrativa
          </CardTitle>
          <CardDescription className="text-center">
            Entre com suas credenciais para acessar o painel
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Usuário</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite seu usuário" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Digite sua senha" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-rosa-500 hover:bg-rosa-600">
                Entrar
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="text-center text-sm text-gray-500">
          <p className="w-full">Este é um ambiente restrito apenas para administradores.</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DashboardLogin;
