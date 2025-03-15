
import { Link } from 'react-router-dom';
import { BookOpen, Instagram, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-rosa-50 border-t border-rosa-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-6 w-6 text-rosa-500" />
              <span className="font-serif text-xl font-semibold text-rosa-800">
                Rafaela Maroca
              </span>
            </Link>
            <p className="text-gray-600 mb-4">
              Resumos de medicina para estudantes e profissionais que buscam aprendizado contínuo.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-rosa-500 hover:text-rosa-700 transition-colors" />
              </a>
              <a href="mailto:contato@rafaelamaroca.com" aria-label="Email">
                <Mail className="h-5 w-5 text-rosa-500 hover:text-rosa-700 transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-rosa-500 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/resumos" className="text-gray-600 hover:text-rosa-500 transition-colors">
                  Resumos
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-600 hover:text-rosa-500 transition-colors">
                  Sobre mim
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-600 hover:text-rosa-500 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-4">Categorias</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/resumos?categoria=anatomia" className="text-gray-600 hover:text-rosa-500 transition-colors">
                  Anatomia
                </Link>
              </li>
              <li>
                <Link to="/resumos?categoria=fisiologia" className="text-gray-600 hover:text-rosa-500 transition-colors">
                  Fisiologia
                </Link>
              </li>
              <li>
                <Link to="/resumos?categoria=patologia" className="text-gray-600 hover:text-rosa-500 transition-colors">
                  Patologia
                </Link>
              </li>
              <li>
                <Link to="/resumos?categoria=farmacologia" className="text-gray-600 hover:text-rosa-500 transition-colors">
                  Farmacologia
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-4">Informações</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/termos" className="text-gray-600 hover:text-rosa-500 transition-colors">
                  Termos de uso
                </Link>
              </li>
              <li>
                <Link to="/privacidade" className="text-gray-600 hover:text-rosa-500 transition-colors">
                  Política de privacidade
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-rosa-500 transition-colors">
                  Perguntas frequentes
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-rosa-100 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Rafaela Maroca. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-sm flex items-center">
            Feito com <Heart className="h-4 w-4 text-rosa-500 mx-1" /> para estudantes de medicina
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
