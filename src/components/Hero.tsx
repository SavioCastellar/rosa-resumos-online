
import { GraduationCap, BookOpen, Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-rosa-50">
      {/* Abstract background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmEyYzciIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTAtMTZjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNCAxLjggNCAzIDQtMS44IDQtNCA0LTQtMS44LTQtNHptMTYgMTZjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNCAxLjggNCAzIDQtMS44IDQtNCA0LTQtMS44LTQtNHptLTE2IDE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNHptLTE2LTE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNHptMTYtMTZjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNCAxLjggNCAzIDQtMS44IDQtNCA0LTQtMS44LTQtNHptLTE2IDE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNHptMC0xNmMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-pink-gradient rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-pink-gradient rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <div className="inline-block px-3 py-1 bg-rosa-100 text-rosa-600 rounded-full text-sm font-medium mb-6">
              Conteúdo médico simplificado
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-rosa-800 mb-6 leading-tight">
              Resumos de medicina que <span className="relative">
                <span className="relative z-10 text-rosa-500">simplificam</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-rosa-100 rounded-full -z-10"></span>
              </span> seu aprendizado
            </h1>
            
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              Material didático preparado especialmente por Rafaela Maroca para ajudar você a dominar os conceitos da medicina com mais facilidade.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-rosa-500 hover:bg-rosa-600 shadow-lg shadow-rosa-500/30 transition-all duration-300 hover:translate-y-[-2px]">
                <Link to="/resumos" className="flex items-center">
                  Ver todos os resumos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-rosa-500 text-rosa-500 hover:bg-rosa-50 transition-all duration-300 hover:translate-y-[-2px]">
                <Link to="/sobre">Conheça a Rafaela</Link>
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]">
                <div className="w-12 h-12 rounded-full bg-rosa-100 flex items-center justify-center mb-3">
                  <BookOpen className="w-6 h-6 text-rosa-500" />
                </div>
                <p className="text-sm font-medium text-gray-700">Resumos didáticos</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]">
                <div className="w-12 h-12 rounded-full bg-rosa-100 flex items-center justify-center mb-3">
                  <GraduationCap className="w-6 h-6 text-rosa-500" />
                </div>
                <p className="text-sm font-medium text-gray-700">Material atualizado</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]">
                <div className="w-12 h-12 rounded-full bg-rosa-100 flex items-center justify-center mb-3">
                  <Heart className="w-6 h-6 text-rosa-500" />
                </div>
                <p className="text-sm font-medium text-gray-700">Feito com carinho</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              {/* Image background glow effect */}
              <div className="absolute -inset-4 bg-pink-gradient rounded-full blur-3xl opacity-30 animate-pulse"></div>
              
              {/* Image card with floating animation */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-float bg-white">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-rosa-100 rounded-full -translate-y-1/2 translate-x-1/2 z-10 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-rosa-200 rounded-full translate-y-1/3 -translate-x-1/3 z-10 opacity-50"></div>
                
                <div className="relative p-2 z-20">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Estudante de medicina" 
                    className="w-full h-auto rounded-xl"
                  />
                </div>
                
                {/* Floating heart icon */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-full p-3 shadow-lg">
                  <Heart className="w-10 h-10 text-rosa-500" fill="#ff6da8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
