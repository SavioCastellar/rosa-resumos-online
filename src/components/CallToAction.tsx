
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-rosa-400 to-rosa-600 opacity-90"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-white rounded-full opacity-10"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-white rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute -bottom-24 left-1/4 w-48 h-48 bg-white rounded-full opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6 leading-tight">
            Potencialize seus estudos de medicina hoje mesmo
          </h2>
          <p className="text-lg text-white/90 mb-10 leading-relaxed">
            Acesse resumos claros, objetivos e didáticos para elevar seu desempenho 
            acadêmico e construir uma base sólida de conhecimento médico.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button asChild size="lg" className="bg-white text-rosa-600 hover:bg-rosa-50 shadow-lg shadow-rosa-700/30 transition-all duration-300 hover:translate-y-[-2px]">
              <Link to="/resumos" className="flex items-center">
                Ver todos os resumos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-rosa-600/50 transition-all duration-300 hover:translate-y-[-2px]">
              <Link to="/contato">Entre em contato</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
