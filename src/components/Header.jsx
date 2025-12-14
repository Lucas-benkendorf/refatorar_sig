import { Link } from 'react-router-dom';
import logoSig from '../assets/LOGO_3_SIG-removebg-preview.png';

const Header = () => {
  return (
    <header className="bg-[#ADFF2F] flex justify-between items-center px-20 py-6 h-[75px]">
      <Link to="/">
        <img src={logoSig} alt="SIG" className="w-20 h-20" />
      </Link>
      
      <nav className="flex gap-8">
        <a href="#inicio" className="text-black font-semibold px-8 no-underline hover:text-gray-700 transition-colors">
          Início
        </a>
        <a href="#empresa" className="text-black font-semibold px-8 no-underline hover:text-gray-700 transition-colors">
          Empresa
        </a>
        <a href="#historia" className="text-black font-semibold px-8 no-underline hover:text-gray-700 transition-colors">
          História
        </a>
        <a href="#duvidas" className="text-black font-semibold px-8 no-underline hover:text-gray-700 transition-colors">
          Dúvidas
        </a>
        <Link to="/catalogo" className="text-black font-semibold px-8 no-underline hover:text-gray-700 transition-colors">
          Catálogo
        </Link>
      </nav>
    </header>
  );
};

export default Header;

