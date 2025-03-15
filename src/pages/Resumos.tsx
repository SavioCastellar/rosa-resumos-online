
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Heart, BookOpen, Eye, Search, Filter } from "lucide-react";
import { useQuery } from '@tanstack/react-query';
import { getAllSummaries } from '@/services/summaryService';

const Resumos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todos');

  const { data: summaries, isLoading, error } = useQuery({
    queryKey: ['allSummaries'],
    queryFn: getAllSummaries,
  });

  // Extract unique categories from summaries
  const categories = summaries ? 
    ['Todos', ...new Set(summaries.map(summary => summary.category))] : 
    ['Todos'];

  const filteredSummaries = summaries ? summaries.filter(summary => {
    const matchSearch = summary.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        summary.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = activeCategory === 'Todos' || summary.category === activeCategory;
    return matchSearch && matchCategory;
  }) : [];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-rosa-50 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-rosa-800 mb-4">
                Resumos de Medicina
              </h1>
              <p className="text-gray-600 mb-8">
                Materiais didáticos elaborados para facilitar seu estudo e aprimorar seus conhecimentos na área médica.
              </p>
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Buscar resumos..."
                  className="pl-10 border-rosa-200 focus:border-rosa-500 focus:ring-rosa-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            {isLoading ? (
              <div className="text-center py-8">
                <p className="text-gray-500">Carregando resumos...</p>
              </div>
            ) : error ? (
              <div className="text-center py-8">
                <p className="text-red-500">Erro ao carregar resumos. Por favor, tente novamente mais tarde.</p>
              </div>
            ) : (
              <Tabs defaultValue="Todos" className="w-full">
                <div className="flex justify-between items-center mb-6">
                  <TabsList className="bg-rosa-50 overflow-x-auto flex-wrap">
                    {categories.map((category) => (
                      <TabsTrigger 
                        key={category} 
                        value={category}
                        onClick={() => setActiveCategory(category)}
                        className="data-[state=active]:bg-rosa-500 data-[state=active]:text-white"
                      >
                        {category}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  <Button variant="outline" size="sm" className="border-rosa-200 text-rosa-600 hover:bg-rosa-50">
                    <Filter className="h-4 w-4 mr-2" />
                    Filtros
                  </Button>
                </div>

                <TabsContent value={activeCategory}>
                  {filteredSummaries.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {filteredSummaries.map((summary) => (
                        <Card key={summary.id} className="group overflow-hidden border border-rosa-100 hover:shadow-md transition-all duration-300">
                          <CardHeader className="pb-3">
                            <div className="flex justify-between items-start">
                              <Badge variant="outline" className="bg-rosa-50 text-rosa-600 border-rosa-200">
                                {summary.category}
                              </Badge>
                              {summary.popular && (
                                <Badge className="bg-rosa-500">Popular</Badge>
                              )}
                            </div>
                            <CardTitle className="font-serif text-xl text-rosa-800 mt-3 group-hover:text-rosa-600 transition-colors">
                              {summary.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-600 text-sm mb-3">{summary.description}</p>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <BookOpen className="h-4 w-4 text-rosa-400" />
                                <span>{summary.pages} páginas</span>
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter className="flex justify-between items-center pt-3 border-t border-rosa-50">
                            <div className="font-semibold text-rosa-800">R$ {Number(summary.price).toFixed(2).replace('.', ',')}</div>
                            <div className="flex gap-2">
                              <Button size="sm" variant="ghost" className="rounded-full h-8 w-8 p-0">
                                <Heart className="h-4 w-4 text-rosa-500" />
                                <span className="sr-only">Favoritar</span>
                              </Button>
                              <Button asChild size="sm" variant="default" className="rounded-full h-8 w-8 p-0 bg-rosa-500 hover:bg-rosa-600">
                                <Link to={`/resumos/${summary.id}`}>
                                  <Eye className="h-4 w-4" />
                                  <span className="sr-only">Ver detalhes</span>
                                </Link>
                              </Button>
                            </div>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-gray-500">Nenhum resumo encontrado com os critérios de busca.</p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resumos;
