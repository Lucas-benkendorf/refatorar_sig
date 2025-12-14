import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import jardim1 from '../assets/jardim 1.jpeg';
import jardim2 from '../assets/jardim 2.jpeg';
import sigg from '../assets/sigg.jpeg';
import flor from '../assets/flor.jpeg';

const Home = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const questions = [
    {
      question: "Quais serviços são oferecidos pela Sig",
      answer: "A Sig oferece uma ampla gama de serviços, incluindo reparos de rotina, montagem, serviços gerais, tratamento de insetos e pragas, cuidados com plantas, atendimento personalizado, orientações de cuidado, entre outros. Meu objetivo é fornecer cuidados abrangentes e personalizados para garantir o encanto e cuidado do seu jardim."
    },
    {
      question: "Quais espécies de plantas a empresa atende?",
      answer: "A empresa Sig atende plantas de inúmeras as espécies, incluindo plantas menores, médias e grandes, gramado orgânico e sintético, entre outros. Possuo conhecimento e experiência para cuidar de diferentes tipos de plantas, oferecendo um cuidado especializado e dedicado."
    },
    {
      question: "A empresa Sig oferece serviços de quanto em quanto tempo?",
      answer: "Você pode escolher serviços diários, semanais, mensais ou dependendo do estilo e cuidado do jardim. Podendo mudar de acordo com seu gosto e orçamento."
    },
    {
      question: "A empresa atua em quais horários?",
      answer: "Atuo de acordo com a demanda da semana, podendo atuar qualquer dia em horário comercial, se precisar, é só chamar!"
    }
  ];

  return (
    <main className="text-[#263138]">
      {/* Seção inicial */}
      <section id="inicio" className="flex items-center gap-8 px-20 py-6 pb-32 relative">
        <img src={jardim1} alt="Jardim" className="w-[500px] h-[400px] object-cover rounded-lg" />
        <div>
          <h1 className="font-semibold text-[32px] mb-8">
            Garanta um jardim encantador e decorativo para sua casa!
          </h1>
          <p className="leading-[150%] mb-8">
            O sig é uma empresa de confiança para o cuidado completo do seus jardins. Com profissional dedicado e
            serviços abrangentes, ofereço uma experiência encantadora e personalizada, garantindo beleza, cuidado e
            capricho do seus jardins.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://web.WhatsApp.com/send?phone=554799031486" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#228B22] text-white px-8 py-4 rounded-lg no-underline hover:bg-[#1e7a1e] transition-colors"
            >
              Entre em contato
            </a>
            <a 
              href="#empresa" 
              className="bg-transparent text-[#228B22] px-8 py-4 underline underline-offset-4 hover:text-[#1e7a1e] transition-colors"
            >
              Conheça minha história
            </a>
          </div>
        </div>
      </section>

      <hr className="border-gray-300" />

      {/* Seção da empresa */}
      <section id="empresa" className="flex items-center gap-16 px-20 py-16">
        <div>
          <h2 className="font-semibold text-[32px] mb-8">Paisagismo de Qualidade</h2>
          <p className="leading-[150%] mb-8">
            Minha empresa de jardinagem e paisagismo é o local onde a paixão pela natureza se une à profissionalismo e excelência em jardineiros.
            Sob a liderança do Sigmar da silva, um profissional altamente qualificado e comprometido, oferecendo
            serviços de qualidade e preço justo para jardins simples e de alto padrão. veja os serviços
          </p>
          <ul className="space-y-4">
            <li className="ml-8">Limpeza e organização;</li>
            <li className="ml-8">Plantação de grama e plantas;</li>
            <li className="ml-8">Poudagem de árvores e cercas vivas;</li>
            <li className="ml-8">Tratamento de insetos e pragas;</li>
            <li className="ml-8">Serviços diários, semanais ou mensais;</li>
            <li className="ml-8">Atendimento personalizado;</li>
            <li className="ml-8">Tratamento e aconselhamento para seu jardim.</li>
          </ul>
          <div className="mt-8">
            <Link to="/catalogo">
              <Button className="bg-[#228B22] hover:bg-[#1e7a1e] text-white px-8 py-4">
                Ver Catálogo de Serviços
              </Button>
            </Link>
          </div>
        </div>
        <img src={jardim2} alt="Jardim" className="w-[480px] h-[480px] object-cover rounded-lg" />
      </section>

      <hr className="border-gray-300" />

      {/* Seção história */}
      <section id="historia" className="px-20 py-16 text-center">
        <h2 className="font-semibold text-[32px] mb-8">Minha história</h2>
        <img src={sigg} alt="Sigmar" className="w-[465px] h-[430px] object-cover rounded-lg mx-auto my-16" />
        <div className="flex justify-center">
          <p className="leading-[150%] max-w-[950px] mx-auto">
            Comecei minha trajetória no ramo de jardinagem a mais de 15 anos, sempre gostei de plantas do geral e tinha muito cuidado 
            com elas, quando comecei, trabalhava como vendedor numa loja, era ótimo no meu trabalho, sempre tendo uma boa interação
            com os clientes e assim aumentando cada vez mais as vendas, porém não sentia que era meu sonho. Quando comecei na jardinagem, 
            realizava projetos pequenos, como cortar grama ou plantas flores, quando percebi que conseguiria viver do meu sonho. 
            logo pedi a conta na loja e criei minha própria empresa, foram altos e baixos ao longo da carreira, e valeu cada centavo,
            suor e tempo investido. Hoje sou reconhecido por muitos como um profissional de qualidade e comprometimento, tendo reconhecimento
            nas emissoras de TV como a record e globo. e se quiser saber mais sobre minha trajetória é só me contatar.
          </p>
        </div>
      </section>

      <hr className="border-gray-300" />

      {/* Seção de perguntas frequentes */}
      <section id="duvidas" className="flex items-start gap-16 px-20 py-16">
        <img src={flor} alt="Flor" className="w-[450px] h-[440px] object-cover rounded-lg" />
        <div className="flex-1">
          <h2 className="font-semibold text-[32px] mb-8">Ficou alguma dúvida?</h2>
          <div className="space-y-4">
            {questions.map((item, index) => (
              <div key={index} className="relative">
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full text-left border-2 border-[#228B22] rounded-lg p-6 font-semibold cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  {item.question}
                </button>
                <div className={`overflow-hidden transition-all duration-200 ${
                  activeQuestion === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}>
                  <p className="border-r border-b border-l border-[#228B22] rounded-b-lg p-6 -mt-2 leading-[150%]">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

