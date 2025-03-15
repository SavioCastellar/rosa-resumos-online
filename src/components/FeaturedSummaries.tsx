
import { useEffect, useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, BookOpen, Eye } from "lucide-react";
import { getAllSummaries } from '@/services/summaryService';
import { useQuery } from '@tanstack/react-query';

const FeaturedSummaries = () => {
  const { data: summaries, isLoading, error } = useQuery({
    queryKey: ['featuredSummaries'],
    queryFn: getAllSummaries,
  });

  const featuredSummaries = summaries?.slice(0, 4) || [];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-rosa-800 mb-4">
            Resumos em Destaque
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Materiais cuidadosamente elaborados para simplificar seu aprendizado 
            e otimizar seus estudos na área médica.
          </p>
        </div>

        {isLoading ? (
          <div className="text-center py-8">
            <p className="text-gray-500">Carregando resumos...</p>
          </div>
        ) : error ? (
          <div className="text-center py-8">
            <p className="text-red-500">Erro ao carregar resumos. Por favor, tente novamente mais tarde.</p>
          </div>
        ) : featuredSummaries.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">Nenhum resumo disponível no momento.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredSummaries.map((summary) => (
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
        )}

        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="border-rosa-500 text-rosa-500 hover:bg-rosa-50">
            <Link to="/resumos">Ver todos os resumos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSummaries;
