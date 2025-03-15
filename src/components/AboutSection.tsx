
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, Award, UserCheck } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 bg-rosa-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute top-4 -left-4 w-24 h-24 bg-rosa-200 rounded-lg opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-rosa-200 rounded-lg opacity-50"></div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Rafaela Maroca" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-rosa-800 mb-6">
              Conheça Rafaela Maroca
            </h2>
            <p className="text-gray-700 mb-6">
              Olá! Sou Rafaela, médica apaixonada pelo ensino da medicina. Com experiência em educação médica,
              desenvolvo resumos didáticos para auxiliar estudantes a compreenderem melhor os complexos temas da área.
            </p>
            <p className="text-gray-700 mb-6">
              Acredito que o aprendizado pode ser mais eficiente quando o conteúdo é apresentado de forma clara e 
              organizada. Cada resumo é preparado com atenção aos detalhes, focando nos pontos essenciais 
              que todo estudante precisa dominar.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <GraduationCap className="h-6 w-6 text-rosa-500 mb-2" />
                <h3 className="font-medium text-gray-900">Formação Médica</h3>
                <p className="text-sm text-gray-600">Graduada com distinção em medicina</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <Award className="h-6 w-6 text-rosa-500 mb-2" />
                <h3 className="font-medium text-gray-900">Especialização</h3>
                <p className="text-sm text-gray-600">Mestrado em educação médica</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <UserCheck className="h-6 w-6 text-rosa-500 mb-2" />
                <h3 className="font-medium text-gray-900">Experiência</h3>
                <p className="text-sm text-gray-600">+5 anos como educadora</p>
              </div>
            </div>
            
            <Button asChild className="bg-rosa-500 hover:bg-rosa-600">
              <Link to="/sobre">Saiba mais sobre mim</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
