
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Heart, BookOpen, FileText, User } from "lucide-react";
import { Link } from "react-router-dom";

const Sobre = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-rosa-50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-rosa-800 mb-6">
                  Prazer, sou Rafaela Maroca
                </h1>
                <p className="text-gray-700 mb-6">
                  Médica, educadora e entusiasta do ensino médico. Minha jornada na medicina me 
                  fez perceber a importância de materiais didáticos bem estruturados para 
                  facilitar o aprendizado nesta área tão desafiadora.
                </p>
                <p className="text-gray-700 mb-6">
                  Com experiência em docência e paixão pelo compartilhamento de conhecimento, 
                  desenvolvo resumos que condensam informações essenciais da medicina de forma 
                  clara, objetiva e acessível.
                </p>
                <div className="flex space-x-4 mb-6">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-rosa-600 hover:text-rosa-800 transition-colors">
                    Instagram
                  </a>
                  <a href="mailto:contato@rafaelamaroca.com" className="text-rosa-600 hover:text-rosa-800 transition-colors">
                    Email
                  </a>
                </div>
                <Button asChild className="bg-rosa-500 hover:bg-rosa-600">
                  <Link to="/resumos">Ver meus resumos</Link>
                </Button>
              </div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-rosa-200 rounded-lg opacity-20 transform rotate-3"></div>
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-rosa-300 rounded-lg opacity-20 transform -rotate-3"></div>
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Rafaela Maroca" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-rosa-800 mb-8 text-center">
                Minha Trajetória
              </h2>
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-rosa-100 flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-rosa-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-1">Formação Acadêmica</h3>
                    <p className="text-gray-700 mb-2">
                      Graduada em Medicina pela Universidade Federal, com especialização em educação médica. 
                      Participei de diversos projetos de pesquisa e extensão focados no ensino da medicina.
                    </p>
                    <p className="text-gray-600 text-sm">2013 - 2019</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-rosa-100 flex items-center justify-center">
                      <User className="h-6 w-6 text-rosa-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-1">Experiência Clínica</h3>
                    <p className="text-gray-700 mb-2">
                      Atuei em diferentes áreas da medicina, adquirindo experiência prática que agora compartilho 
                      em meus materiais didáticos, sempre conectando a teoria com a aplicação clínica.
                    </p>
                    <p className="text-gray-600 text-sm">2019 - 2021</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-rosa-100 flex items-center justify-center">
                      <Award className="h-6 w-6 text-rosa-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-1">Docência e Mentoria</h3>
                    <p className="text-gray-700 mb-2">
                      Desenvolvi uma paixão pelo ensino médico, atuando como docente e mentora para estudantes 
                      de medicina. Esta experiência me permitiu entender as dificuldades comuns e desenvolver 
                      métodos eficazes de ensino.
                    </p>
                    <p className="text-gray-600 text-sm">2021 - Presente</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-rosa-100 flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-rosa-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-1">Criação de Conteúdo</h3>
                    <p className="text-gray-700 mb-2">
                      Comecei a desenvolver materiais didáticos para auxiliar meus alunos, e o feedback positivo me 
                      inspirou a expandir este projeto, criando resumos detalhados e objetivos para diversas áreas 
                      da medicina.
                    </p>
                    <p className="text-gray-600 text-sm">2022 - Presente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-rosa-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-rosa-800 mb-6">
                Minha Missão
              </h2>
              <p className="text-gray-700 mb-8">
                Acredito que o conhecimento médico deve ser acessível, compreensível e aplicável. 
                Minha missão é criar materiais que simplifiquem o complexo, destaquem o essencial 
                e inspirem estudantes a se apaixonarem pela medicina, assim como eu me apaixonei.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-12 h-12 rounded-full bg-rosa-100 flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-6 w-6 text-rosa-500" />
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">Clareza</h3>
                  <p className="text-sm text-gray-600">
                    Materiais organizados e de fácil compreensão
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-12 h-12 rounded-full bg-rosa-100 flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="h-6 w-6 text-rosa-500" />
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">Didática</h3>
                  <p className="text-sm text-gray-600">
                    Abordagem pedagógica para facilitar o aprendizado
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-12 h-12 rounded-full bg-rosa-100 flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-6 w-6 text-rosa-500" />
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">Dedicação</h3>
                  <p className="text-sm text-gray-600">
                    Conteúdo feito com cuidado e atenção aos detalhes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-rosa-500 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                Vamos aprender juntos!
              </h2>
              <p className="text-white/90 mb-8">
                Explore os resumos médicos que desenvolvi e eleve seus estudos a um novo patamar.
              </p>
              <Button asChild size="lg" className="bg-white text-rosa-600 hover:bg-rosa-50">
                <Link to="/resumos">Ver todos os resumos</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Sobre;
