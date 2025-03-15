
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Júlia Santos",
    role: "Estudante de Medicina",
    avatar: "JS",
    content: "Os resumos da Rafaela transformaram meu estudo! Consegui compreender conceitos complexos com muito mais facilidade e melhorar consideravelmente meu desempenho nas avaliações."
  },
  {
    id: 2,
    name: "Carlos Oliveira",
    role: "Médico Residente",
    avatar: "CO",
    content: "Mesmo como residente, utilizo os resumos para revisar conceitos importantes. O material é conciso, objetivo e atualizado, perfeito para consultas rápidas no dia a dia."
  },
  {
    id: 3,
    name: "Mariana Costa",
    role: "Acadêmica de Medicina",
    avatar: "MC",
    content: "Os resumos me ajudaram muito durante minha preparação para as provas. O conteúdo é apresentado de forma didática e os esquemas facilitam a memorização."
  },
  {
    id: 4,
    name: "André Sousa",
    role: "Estudante de Medicina",
    avatar: "AS",
    content: "Material excepcional! Os resumos salvaram meu semestre e me ajudaram a ter uma visão mais clara e organizada dos temas mais desafiadores do curso."
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-rosa-800 mb-4">
            O Que Dizem Nossos Alunos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Depoimentos de estudantes e profissionais que utilizaram nossos resumos 
            para aprimorar seus conhecimentos em medicina.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border border-rosa-100 hover:shadow-md transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center mb-4">
                  <Avatar className="h-16 w-16 border-2 border-rosa-100">
                    <AvatarFallback className="bg-rosa-100 text-rosa-600">{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="mt-3 text-center">
                    <h3 className="font-medium text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-center">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
