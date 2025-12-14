import logoFooter from '../assets/Design_sem_nome-removebg-preview (1).png';

const Footer = () => {
  return (
    <footer className="bg-[#ADFF2F] flex gap-20 px-20 py-16">
      <div className="flex-[2] max-h-[300px]">
        <img src={logoFooter} alt="SIG" className="w-[250px] h-[250px] mb-6" />
        <p className="text-[#263138] block mb-4 max-w-[350px]">
          Cuidando com amor, encantando lares <br />
          SIG JARDINAGEM E PAISAGISMO
        </p>
      </div>
      
      <div className="flex-1">
        <p className="font-semibold mb-6 text-[#263138]">Links Rápidos</p>
        <a href="#inicio" className="text-[#263138] block mb-4 no-underline hover:text-gray-600 transition-colors">
          Início
        </a>
        <a href="#empresa" className="text-[#263138] block mb-4 no-underline hover:text-gray-600 transition-colors">
          Serviços
        </a>
        <a href="#historia" className="text-[#263138] block mb-4 no-underline hover:text-gray-600 transition-colors">
          História
        </a>
        <a href="#duvidas" className="text-[#263138] block mb-4 no-underline hover:text-gray-600 transition-colors">
          Dúvidas
        </a>
      </div>
      
      <div className="flex-[2]">
        <p className="font-semibold mb-6 text-[#263138]">Contatos</p>
        <p className="text-[#263138] block mb-4 max-w-[350px]">
          WhatsApp: +55 (47) 99903-1486
        </p>
        <p className="text-[#263138] block mb-4 max-w-[350px]">
          Email: sigmar.silva@gmail.com.br
        </p>
        <p className="text-[#263138] block mb-4 max-w-[350px]">
          Rua Otto Pfuetzenreuter, Costa e Silva
        </p>
      </div>
    </footer>
  );
};

export default Footer;

