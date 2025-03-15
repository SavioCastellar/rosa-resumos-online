
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Heart, BookOpen, Mail, ArrowLeft, Eye, FileText, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// This data would typically come from an API
const summariesData = [
  {
    id: 1,
    title: "Sistema Cardiovascular",
    description: "Um guia completo sobre anatomia e fisiologia cardíaca, incluindo patologias mais comuns.",
    detailedDescription: "Este resumo abrange todo o sistema cardiovascular, desde a anatomia básica do coração até os mecanismos fisiopatológicos das principais cardiopatias. Você encontrará conteúdo sobre:\n\n• Anatomia detalhada das câmaras cardíacas\n• Circulação coronariana\n• Ciclo cardíaco e seus eventos\n• Eletrofisiologia cardíaca e interpretação de ECG\n• Regulação neural e humoral da pressão arterial\n• Patologias: insuficiência cardíaca, cardiopatia isquêmica, valvopatias\n• Abordagem clínica das principais síndromes cardiovasculares",
    category: "Anatomia",
    price: "R$ 29,90",
    pages: 42,
    popular: true,
    previewImage: "/placeholder.svg",
    tableOfContents: [
      "1. Introdução ao Sistema Cardiovascular",
      "2. Anatomia do Coração",
      "3. Vasos Sanguíneos",
      "4. Ciclo Cardíaco",
      "5. Regulação da Função Cardíaca",
      "6. Patologias Cardíacas Comuns",
      "7. Abordagem Clínica"
    ]
  },
  {
    id: 2,
    title: "Farmacologia Básica",
    description: "Princípios essenciais de farmacologia para estudantes de medicina e profissionais da saúde.",
    detailedDescription: "Um guia prático sobre os fundamentos da farmacologia, com foco nos principais grupos farmacológicos e suas aplicações clínicas. Este resumo contém:\n\n• Princípios de farmacocinética e farmacodinâmica\n• Receptores e mecanismos de ação dos fármacos\n• Anti-inflamatórios, analgésicos e antipiréticos\n• Antibióticos: classificação e mecanismos de ação\n• Psicofármacos e sua aplicação clínica\n• Fármacos cardiovasculares\n• Intoxicações e antídotos mais comuns",
    category: "Farmacologia",
    price: "R$ 34,90",
    pages: 56,
    popular: false,
    previewImage: "/placeholder.svg",
    tableOfContents: [
      "1. Princípios Gerais de Farmacologia",
      "2. Farmacocinética",
      "3. Farmacodinâmica",
      "4. Anti-inflamatórios e Analgésicos",
      "5. Antimicrobianos",
      "6. Fármacos Cardiovasculares",
      "7. Psicofármacos"
    ]
  },
  {
    id: 3,
    title: "Neuroanatomia Clínica",
    description: "Estruturas cerebrais, medula espinhal e nervos periféricos explicados de forma simplificada.",
    detailedDescription: "Um resumo didático sobre neuroanatomia com correlações clínicas. O material contém:\n\n• Desenvolvimento do sistema nervoso\n• Anatomia detalhada do encéfalo e medula espinhal\n• Nervos cranianos: origem, trajeto e funções\n• Sistema nervoso autônomo\n• Vias ascendentes e descendentes\n• Sistemas funcionais: motor, sensorial, límbico\n• Correlações clínicas: síndromes neurológicas comuns",
    category: "Anatomia",
    price: "R$ 39,90",
    pages: 68,
    popular: true,
    previewImage: "/placeholder.svg",
    tableOfContents: [
      "1. Introdução à Neuroanatomia",
      "2. Desenvolvimento do Sistema Nervoso",
      "3. Medula Espinhal",
      "4. Tronco Encefálico",
      "5. Cerebelo",
      "6. Diencéfalo",
      "7. Córtex Cerebral",
      "8. Vias Neurais"
    ]
  },
  {
    id: 4,
    title: "Imunologia Essencial",
    description: "Entenda os princípios fundamentais do sistema imunológico e suas aplicações clínicas.",
    detailedDescription: "Um resumo completo sobre o funcionamento do sistema imunológico, desde os mecanismos básicos até as principais imunopatologias. O conteúdo inclui:\n\n• Células e órgãos do sistema imune\n• Imunidade inata e adaptativa\n• Processamento e apresentação de antígenos\n• Resposta humoral e celular\n• Hipersensibilidades e auto-imunidade\n• Imunodeficiências primárias e adquiridas\n• Imunologia dos transplantes e câncer",
    category: "Imunologia",
    price: "R$ 32,90",
    pages: 48,
    popular: false,
    previewImage: "/placeholder.svg",
    tableOfContents: [
      "1. Componentes do Sistema Imune",
      "2. Imunidade Inata",
      "3. Imunidade Adaptativa",
      "4. Hipersensibilidades",
      "5. Imunodeficiências",
      "6. Auto-imunidade",
      "7. Imunologia dos Transplantes"
    ]
  },
  {
    id: 5,
    title: "Bioquímica Médica",
    description: "Conceitos essenciais de bioquímica aplicados à prática clínica e diagnóstico médico.",
    detailedDescription: "Um resumo prático sobre os principais tópicos de bioquímica relevantes para a prática médica. O material aborda:\n\n• Estrutura e função de proteínas, carboidratos e lipídeos\n• Enzimas e cinética enzimática\n• Metabolismo energético: glicólise, ciclo de Krebs, cadeia respiratória\n• Metabolismo de aminoácidos e nucleotídeos\n• Integração metabólica e regulação hormonal\n• Bioquímica do jejum e alimentação\n• Marcadores bioquímicos e sua interpretação clínica",
    category: "Bioquímica",
    price: "R$ 36,90",
    pages: 64,
    popular: true,
    previewImage: "/placeholder.svg",
    tableOfContents: [
      "1. Biomoléculas",
      "2. Enzimas",
      "3. Bioenergética",
      "4. Metabolismo de Carboidratos",
      "5. Metabolismo de Lipídeos",
      "6. Metabolismo de Proteínas",
      "7. Integração Metabólica"
    ]
  },
  {
    id: 6,
    title: "Embriologia Humana",
    description: "Desenvolvimento embrionário e fetal explicado de forma clara e com ilustrações detalhadas.",
    detailedDescription: "Um resumo didático sobre o desenvolvimento humano desde a fertilização até o nascimento. O conteúdo inclui:\n\n• Gametogênese e fertilização\n• Primeiras semanas do desenvolvimento embrionário\n• Formação dos folhetos germinativos e seus derivados\n• Desenvolvimento dos principais sistemas orgânicos\n• Anexos embrionários: placenta, cordão umbilical, membranas fetais\n• Períodos críticos do desenvolvimento e teratogênese\n• Anomalias congênitas mais frequentes",
    category: "Embriologia",
    price: "R$ 29,90",
    pages: 52,
    popular: false,
    previewImage: "/placeholder.svg",
    tableOfContents: [
      "1. Gametogênese",
      "2. Primeira Semana do Desenvolvimento",
      "3. Segunda Semana do Desenvolvimento",
      "4. Terceira Semana do Desenvolvimento",
      "5. Desenvolvimento dos Sistemas Orgânicos",
      "6. Anexos Embrionários",
      "7. Anomalias Congênitas"
    ]
  },
  {
    id: 7,
    title: "Patologia Geral",
    description: "Fundamentos de patologia geral com foco nos mecanismos das doenças mais prevalentes.",
    detailedDescription: "Um resumo abrangente sobre os processos patológicos básicos que fundamentam as doenças humanas. O material contém:\n\n• Lesão, adaptação e morte celular\n• Inflamação aguda e crônica\n• Reparo tecidual e cicatrização\n• Distúrbios hemodinâmicos: trombose, embolia, isquemia\n• Neoplasias benignas e malignas\n• Doenças ambientais e nutricionais\n• Patologia dos principais sistemas orgânicos",
    category: "Patologia",
    price: "R$ 42,90",
    pages: 78,
    popular: true,
    previewImage: "/placeholder.svg",
    tableOfContents: [
      "1. Lesão e Morte Celular",
      "2. Adaptações Celulares",
      "3. Inflamação",
      "4. Reparo Tecidual",
      "5. Distúrbios Hemodinâmicos",
      "6. Neoplasias",
      "7. Patologia Ambiental"
    ]
  },
  {
    id: 8,
    title: "Microbiologia Médica",
    description: "Bactérias, vírus, fungos e parasitas de importância médica abordados de maneira prática.",
    detailedDescription: "Um resumo objetivo sobre os principais microrganismos de relevância clínica. O conteúdo aborda:\n\n• Bacteriologia: morfologia, estrutura, classificação e patogênese\n• Virologia: estrutura viral, replicação e principais famílias de vírus\n• Micologia: fungos patogênicos e micoses mais comuns\n• Parasitologia: protozoários e helmintos de importância médica\n• Mecanismos de patogenicidade microbiana\n• Diagnóstico microbiológico: métodos convencionais e moleculares\n• Antimicrobianos: mecanismos de ação e resistência",
    category: "Microbiologia",
    price: "R$ 38,90",
    pages: 70,
    popular: false,
    previewImage: "/placeholder.svg",
    tableOfContents: [
      "1. Introdução à Microbiologia",
      "2. Bacteriologia",
      "3. Virologia",
      "4. Micologia",
      "5. Parasitologia",
      "6. Diagnóstico Microbiológico",
      "7. Antimicrobianos"
    ]
  },
];

const ResumoPreview = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [showPreviewDialog, setShowPreviewDialog] = React.useState(false);
  
  const resumoId = parseInt(id || '0');
  const resumo = summariesData.find(item => item.id === resumoId);

  if (!resumo) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-serif font-bold text-rosa-800 mb-4">
              Resumo não encontrado
            </h1>
            <p className="text-gray-600 mb-6">
              O resumo que você está procurando não existe ou foi removido.
            </p>
            <Button asChild variant="default" className="bg-rosa-500 hover:bg-rosa-600">
              <Link to="/resumos">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar para resumos
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleBuyClick = () => {
    toast({
      title: "Processo de compra iniciado",
      description: "Você será redirecionado para a página de pagamento em instantes.",
    });
    // Aqui seria implementada a lógica de pagamento
  };

  const handleDownloadPreview = () => {
    toast({
      title: "Baixando prévia",
      description: "Uma amostra do resumo será baixada em instantes.",
    });
    // Aqui seria implementada a lógica de download da prévia
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-rosa-50 py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-6">
              <Button asChild variant="ghost" size="sm" className="text-rosa-600">
                <Link to="/resumos">
                  <ArrowLeft className="h-4 w-4 mr-1" /> Voltar
                </Link>
              </Button>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">{resumo.title}</span>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Coluna da esquerda - Imagem e tabela de conteúdo */}
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-lg border border-rosa-100 shadow-sm">
                  <img 
                    src={resumo.previewImage} 
                    alt={`Capa do resumo ${resumo.title}`} 
                    className="w-full h-auto aspect-[3/4] object-cover rounded bg-rosa-100"
                  />
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-rosa-100 shadow-sm">
                  <h3 className="font-serif font-semibold text-lg text-rosa-800 mb-4">
                    Sumário
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    {resumo.tableOfContents.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-rosa-400 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Coluna do meio e direita - detalhes do resumo */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white p-6 rounded-lg border border-rosa-100 shadow-sm">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="bg-rosa-50 text-rosa-600 border-rosa-200">
                      {resumo.category}
                    </Badge>
                    {resumo.popular && (
                      <Badge className="bg-rosa-500">Popular</Badge>
                    )}
                  </div>
                  
                  <h1 className="font-serif text-3xl font-bold text-rosa-800 mb-4">
                    {resumo.title}
                  </h1>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4 text-rosa-400" />
                      <span>{resumo.pages} páginas</span>
                    </div>
                  </div>
                  
                  <div className="prose max-w-none mb-6">
                    <h2 className="text-xl font-semibold text-rosa-700 mb-3">Sobre este resumo</h2>
                    <p className="text-gray-700 whitespace-pre-line">{resumo.detailedDescription}</p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <Button 
                      onClick={handleBuyClick}
                      className="flex-1 bg-rosa-500 hover:bg-rosa-600 text-white"
                      size="lg"
                    >
                      Comprar por {resumo.price}
                    </Button>
                    <Button 
                      onClick={() => setShowPreviewDialog(true)}
                      variant="outline" 
                      className="flex-1 border-rosa-200 text-rosa-600 hover:bg-rosa-50"
                      size="lg"
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      Visualizar prévia
                    </Button>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-rosa-100 shadow-sm">
                  <h3 className="font-serif font-semibold text-lg text-rosa-800 mb-4">
                    Como você receberá este material
                  </h3>
                  <div className="flex items-start gap-3 text-gray-600">
                    <Mail className="h-5 w-5 text-rosa-400 mt-0.5" />
                    <p>
                      Após a confirmação do pagamento, o resumo será enviado para o seu e-mail
                      em formato PDF, pronto para ser baixado e utilizado imediatamente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      
      {/* Dialog de prévia */}
      <Dialog open={showPreviewDialog} onOpenChange={setShowPreviewDialog}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="font-serif text-rosa-800">
              Prévia: {resumo.title}
            </DialogTitle>
            <DialogDescription>
              Esta é uma amostra do conteúdo completo do resumo.
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-4 bg-gray-50 p-6 rounded-md border border-gray-100 max-h-[60vh] overflow-y-auto">
            <div className="flex justify-center mb-6">
              <img 
                src={resumo.previewImage}
                alt={`Prévia de ${resumo.title}`}
                className="max-w-[200px] h-auto aspect-[3/4] object-cover rounded bg-rosa-100"
              />
            </div>
            
            <h2 className="font-serif text-xl font-bold text-rosa-800 mb-3">
              {resumo.tableOfContents[0]}
            </h2>
            
            <p className="text-gray-600 mb-4">
              Este é apenas um exemplo do conteúdo disponível no resumo completo. 
              O material completo contém explicações detalhadas, diagramas, 
              tabelas e informações adicionais relevantes para o seu aprendizado.
            </p>
            
            <div className="prose max-w-none border-l-4 border-rosa-200 pl-4 py-2 italic text-gray-500">
              "O conteúdo completo inclui {resumo.pages} páginas de material organizado 
              e sintetizado para facilitar seu estudo e compreensão dos temas abordados."
            </div>
            
            <h3 className="font-serif text-lg font-semibold text-rosa-700 mt-6 mb-2">
              Benefícios deste resumo:
            </h3>
            
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-rosa-400 mr-2">•</span>
                <span>Conteúdo conciso e objetivo, facilitando a revisão</span>
              </li>
              <li className="flex items-start">
                <span className="text-rosa-400 mr-2">•</span>
                <span>Material elaborado por especialista na área</span>
              </li>
              <li className="flex items-start">
                <span className="text-rosa-400 mr-2">•</span>
                <span>Organização lógica dos tópicos para melhor compreensão</span>
              </li>
              <li className="flex items-start">
                <span className="text-rosa-400 mr-2">•</span>
                <span>Formato digital para estudo em qualquer lugar</span>
              </li>
            </ul>
          </div>
          
          <DialogFooter className="flex flex-col sm:flex-row gap-4 sm:justify-between">
            <Button 
              onClick={handleDownloadPreview}
              variant="outline" 
              className="order-2 sm:order-1"
            >
              <Download className="mr-2 h-4 w-4" />
              Baixar amostra
            </Button>
            
            <Button 
              onClick={handleBuyClick}
              className="bg-rosa-500 hover:bg-rosa-600 order-1 sm:order-2"
            >
              Comprar por {resumo.price}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ResumoPreview;
