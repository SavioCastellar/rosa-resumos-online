
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { 
  PlusCircle, 
  FileEdit, 
  Trash2, 
  Upload, 
  Save, 
  Eye, 
  FileText, 
  DollarSign 
} from "lucide-react";
import DashboardLogin from "../components/DashboardLogin";
import SummaryForm from "../components/SummaryForm";

// Mock data for summaries - in a real app, this would come from a database
const summariesData = [
  {
    id: 1,
    title: "Sistema Cardiovascular",
    description: "Um guia completo sobre anatomia e fisiologia cardíaca, incluindo patologias mais comuns.",
    category: "Anatomia",
    price: "29.90",
    pages: 42,
    popular: true,
    hasPdf: true
  },
  {
    id: 2,
    title: "Farmacologia Básica",
    description: "Princípios essenciais de farmacologia para estudantes de medicina e profissionais da saúde.",
    category: "Farmacologia",
    price: "34.90",
    pages: 56,
    popular: false,
    hasPdf: true
  },
  // More summaries would be here
];

const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [summaries, setSummaries] = useState(summariesData);
  const [editingSummary, setEditingSummary] = useState(null);
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Handle login
  const handleLogin = (credentials) => {
    // In a real app, validate credentials against a backend
    if (credentials.username === "admin" && credentials.password === "password") {
      setIsAuthenticated(true);
      toast({
        title: "Login realizado com sucesso",
        description: "Bem-vinda ao painel administrativo, Rafaela!",
      });
    } else {
      toast({
        title: "Falha no login",
        description: "Usuário ou senha incorretos.",
        variant: "destructive"
      });
    }
  };

  // Handle edit
  const handleEdit = (summary) => {
    setEditingSummary(summary);
    setIsCreatingNew(false);
  };

  // Handle create new
  const handleCreateNew = () => {
    setEditingSummary(null);
    setIsCreatingNew(true);
  };

  // Handle save
  const handleSave = (summaryData) => {
    if (isCreatingNew) {
      // Add new summary
      const newSummary = {
        ...summaryData,
        id: summaries.length + 1,
        hasPdf: summaryData.pdfFile !== null
      };
      setSummaries([...summaries, newSummary]);
      toast({
        title: "Resumo criado",
        description: `"${summaryData.title}" foi adicionado com sucesso.`,
      });
    } else {
      // Update existing summary
      const updatedSummaries = summaries.map(summary => 
        summary.id === editingSummary.id 
          ? { ...summary, ...summaryData, hasPdf: summaryData.pdfFile !== null || summary.hasPdf } 
          : summary
      );
      setSummaries(updatedSummaries);
      toast({
        title: "Resumo atualizado",
        description: `"${summaryData.title}" foi atualizado com sucesso.`,
      });
    }
    
    setEditingSummary(null);
    setIsCreatingNew(false);
  };

  // Handle delete
  const handleDelete = (id) => {
    // In a real app, confirm before deletion and handle backend operation
    const updatedSummaries = summaries.filter(summary => summary.id !== id);
    setSummaries(updatedSummaries);
    toast({
      title: "Resumo excluído",
      description: "O resumo foi removido com sucesso.",
    });
  };

  // Handle cancel edit/create
  const handleCancel = () => {
    setEditingSummary(null);
    setIsCreatingNew(false);
  };

  // If not authenticated, show login screen
  if (!isAuthenticated) {
    return <DashboardLogin onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-serif font-bold text-rosa-800">
              Painel Administrativo
            </h1>
            <Button onClick={() => navigate("/")} variant="outline" className="border-rosa-300 text-rosa-600">
              Visualizar Site
            </Button>
          </div>

          {(editingSummary || isCreatingNew) ? (
            <SummaryForm 
              summary={editingSummary} 
              onSave={handleSave}
              onCancel={handleCancel}
              isNew={isCreatingNew}
            />
          ) : (
            <Tabs defaultValue="todos" className="w-full">
              <div className="flex justify-between items-center mb-6">
                <TabsList className="bg-rosa-50">
                  <TabsTrigger value="todos" className="data-[state=active]:bg-rosa-500 data-[state=active]:text-white">
                    Todos os Resumos
                  </TabsTrigger>
                  <TabsTrigger value="populares" className="data-[state=active]:bg-rosa-500 data-[state=active]:text-white">
                    Populares
                  </TabsTrigger>
                </TabsList>
                <Button onClick={handleCreateNew} className="bg-rosa-500 hover:bg-rosa-600">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Novo Resumo
                </Button>
              </div>

              <TabsContent value="todos">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {summaries.map((summary) => (
                    <SummaryCard 
                      key={summary.id} 
                      summary={summary} 
                      onEdit={() => handleEdit(summary)} 
                      onDelete={() => handleDelete(summary.id)} 
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="populares">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {summaries.filter(s => s.popular).map((summary) => (
                    <SummaryCard 
                      key={summary.id} 
                      summary={summary} 
                      onEdit={() => handleEdit(summary)} 
                      onDelete={() => handleDelete(summary.id)} 
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Summary Card Component
const SummaryCard = ({ summary, onEdit, onDelete }) => {
  return (
    <Card className="border border-rosa-100 hover:shadow-md transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <Badge variant="outline" className="bg-rosa-50 text-rosa-600 border-rosa-200">
            {summary.category}
          </Badge>
          {summary.popular && (
            <Badge className="bg-rosa-500">Popular</Badge>
          )}
        </div>
        <CardTitle className="font-serif text-xl text-rosa-800 mt-3">
          {summary.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{summary.description}</p>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <DollarSign className="h-4 w-4 text-rosa-400" />
            <span>R$ {summary.price}</span>
          </div>
          <div className="flex items-center gap-1">
            {summary.hasPdf ? (
              <FileText className="h-4 w-4 text-green-500" />
            ) : (
              <FileText className="h-4 w-4 text-red-500" />
            )}
            <span>{summary.hasPdf ? "PDF Anexado" : "Sem PDF"}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-3 border-t border-rosa-50">
        <Button size="sm" variant="ghost" className="text-rosa-600 hover:bg-rosa-50 hover:text-rosa-700" onClick={onEdit}>
          <FileEdit className="h-4 w-4 mr-1" />
          Editar
        </Button>
        <Button size="sm" variant="ghost" className="text-red-600 hover:bg-red-50 hover:text-red-700" onClick={onDelete}>
          <Trash2 className="h-4 w-4 mr-1" />
          Excluir
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Dashboard;
