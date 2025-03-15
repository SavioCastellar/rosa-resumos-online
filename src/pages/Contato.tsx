
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Instagram, MapPin, Send } from "lucide-react";

const Contato = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Mensagem enviada!",
        description: "Em breve entraremos em contato com você.",
        variant: "default"
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-rosa-50 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-rosa-800 mb-4">
                Vamos Conversar
              </h1>
              <p className="text-gray-600 mb-0">
                Tem dúvidas, sugestões ou quer saber mais sobre os resumos? Entre em contato comigo!
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-serif font-bold text-rosa-800 mb-6">
                  Informações de Contato
                </h2>
                <p className="text-gray-600 mb-8">
                  Estou disponível para responder suas dúvidas e ajudar no que for preciso.
                  Não hesite em entrar em contato por qualquer um dos canais abaixo.
                </p>

                <div className="space-y-6">
                  <Card>
                    <CardContent className="flex items-center space-x-4 p-6">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-rosa-100 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-rosa-500" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Email</h3>
                        <a href="mailto:contato@rafaelamaroca.com" className="text-rosa-600 hover:text-rosa-800 transition-colors">
                          contato@rafaelamaroca.com
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="flex items-center space-x-4 p-6">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-rosa-100 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-rosa-500" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Telefone</h3>
                        <a href="tel:+5511999999999" className="text-rosa-600 hover:text-rosa-800 transition-colors">
                          +55 (11) 99999-9999
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="flex items-center space-x-4 p-6">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-rosa-100 flex items-center justify-center">
                        <Instagram className="h-5 w-5 text-rosa-500" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Instagram</h3>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-rosa-600 hover:text-rosa-800 transition-colors">
                          @rafaelamaroca
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="flex items-center space-x-4 p-6">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-rosa-100 flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-rosa-500" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Localização</h3>
                        <p className="text-gray-600">São Paulo, SP - Brasil</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="lg:col-span-2">
                <h2 className="text-2xl font-serif font-bold text-rosa-800 mb-6">
                  Envie uma Mensagem
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Nome completo
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-rosa-200 focus:border-rosa-500 focus:ring-rosa-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-rosa-200 focus:border-rosa-500 focus:ring-rosa-500"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                      Assunto
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="border-rosa-200 focus:border-rosa-500 focus:ring-rosa-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="border-rosa-200 focus:border-rosa-500 focus:ring-rosa-500"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="bg-rosa-500 hover:bg-rosa-600 w-full sm:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" />
                        Enviar mensagem
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-rosa-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-serif font-bold text-rosa-800 mb-4">
                Perguntas Frequentes
              </h2>
              <p className="text-gray-600 mb-8">
                Confira algumas das dúvidas mais comuns sobre os resumos e serviços oferecidos.
              </p>
              <div className="space-y-6 text-left">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-medium text-gray-900 mb-2">Como posso acessar os resumos após a compra?</h3>
                  <p className="text-gray-600">
                    Após a confirmação do pagamento, você receberá um email com um link para download do material 
                    em formato PDF. Você também terá acesso permanente através da sua área de cliente no site.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-medium text-gray-900 mb-2">Os resumos são atualizados com frequência?</h3>
                  <p className="text-gray-600">
                    Sim! Todo o material é revisado e atualizado regularmente para garantir que você 
                    tenha acesso às informações mais recentes. Clientes que já adquiriram o material 
                    recebem as atualizações sem custo adicional.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-medium text-gray-900 mb-2">Vocês oferecem suporte para dúvidas sobre o conteúdo?</h3>
                  <p className="text-gray-600">
                    Absolutamente! Após a compra, você terá acesso a um canal de suporte onde poderá 
                    enviar suas dúvidas sobre o conteúdo. Nos comprometemos a responder em até 48 horas úteis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contato;
