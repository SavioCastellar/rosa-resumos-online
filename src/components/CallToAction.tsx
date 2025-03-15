
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-rosa-500 to-rosa-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Potencialize seus estudos de medicina hoje mesmo
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Acesse resumos claros, objetivos e didáticos para elevar seu desempenho 
            acadêmico e construir uma base sólida de conhecimento médico.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-rosa-600 hover:bg-rosa-50">
              <Link to="/resumos">Ver todos os resumos</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-rosa-600/50">
              <Link to="/contato">Entre em contato</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
