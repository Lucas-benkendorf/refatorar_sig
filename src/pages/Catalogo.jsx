import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, Scissors, TreePine, Bug, Droplets, Palette, Camera, Package } from 'lucide-react';

const Catalogo = () => {
  const servicos = [
    {
      id: 1,
      nome: "Manutenção Completa de Jardim",
      descricao: "Corte de grama, poda leve, limpeza e retirada de resíduos",
      valor: "R$ 150 a R$ 300 por visita",
      icon: <Leaf className="w-6 h-6" />,
      categoria: "Manutenção"
    },
    {
      id: 2,
      nome: "Corte de Grama / Roçagem",
      descricao: "Aparar e nivelar grama, deixando o jardim uniforme",
      valor: "R$ 80 a R$ 200",
      icon: <Scissors className="w-6 h-6" />,
      categoria: "Manutenção"
    },
    {
      id: 3,
      nome: "Poda de Plantas e Arbustos",
      descricao: "Poda de arbustos, cercas vivas e pequenas árvores",
      valor: "R$ 150 a R$ 400",
      icon: <TreePine className="w-6 h-6" />,
      categoria: "Poda"
    },
    {
      id: 4,
      nome: "Poda de Árvores Altas",
      descricao: "Poda com equipamento de segurança, remoção de galhos perigosos",
      valor: "R$ 300 a R$ 800 por árvore",
      icon: <TreePine className="w-6 h-6" />,
      categoria: "Poda"
    },
    {
      id: 5,
      nome: "Plantio e Replantio de Flores ou Mudas",
      descricao: "Preparação do solo, adubação e plantio de mudas",
      valor: "R$ 5 a R$ 15 por muda ou R$ 100 a R$ 300 por serviço",
      icon: <Leaf className="w-6 h-6" />,
      categoria: "Plantio"
    },
    {
      id: 6,
      nome: "Adubação e Tratamento do Solo",
      descricao: "Aplicação de adubo e correção de nutrientes",
      valor: "R$ 80 a R$ 200",
      icon: <Package className="w-6 h-6" />,
      categoria: "Tratamento"
    },
    {
      id: 7,
      nome: "Controle de Pragas e Fungos",
      descricao: "Pulverização e prevenção com soluções adequadas",
      valor: "R$ 100 a R$ 300",
      icon: <Bug className="w-6 h-6" />,
      categoria: "Tratamento"
    },
    {
      id: 8,
      nome: "Irrigação Manual ou Instalação de Sistema Simples",
      descricao: "Irrigação pontual ou instalação de sistema de gotejamento",
      valor: "R$ 50 a R$ 100 por visita ou R$ 400 a R$ 1.200 instalação",
      icon: <Droplets className="w-6 h-6" />,
      categoria: "Irrigação"
    },
    {
      id: 9,
      nome: "Limpeza e Remoção de Folhas e Galhos",
      descricao: "Varrição, recolhimento e descarte de resíduos orgânicos",
      valor: "R$ 100 a R$ 250",
      icon: <Leaf className="w-6 h-6" />,
      categoria: "Limpeza"
    },
    {
      id: 10,
      nome: "Paisagismo Simples",
      descricao: "Organização e embelezamento do jardim sem projeto complexo",
      valor: "R$ 300 a R$ 1.000",
      icon: <Palette className="w-6 h-6" />,
      categoria: "Paisagismo"
    }
  ];

  const pacotes = [
    {
      titulo: "Pacote Mensal",
      descricao: "1 visita semanal com corte de grama, limpeza e adubação leve.",
      vantagem: "até 20% mais barato que contratar visitas avulsas.",
      icon: <Package className="w-8 h-8" />
    },
    {
      titulo: "Poda Programada",
      descricao: "Agende podas sazonais de árvores e arbustos para evitar acúmulo de galhos e folhas.",
      vantagem: "Manutenção preventiva e economia a longo prazo.",
      icon: <Scissors className="w-8 h-8" />
    },
    {
      titulo: "Revitalização de Jardim",
      descricao: "Serviço completo para recuperar jardins descuidados: poda, adubação, replantio e limpeza geral.",
      vantagem: "Transformação completa do seu espaço verde.",
      icon: <Leaf className="w-8 h-8" />
    },
    {
      titulo: "Venda de Insumos",
      descricao: "Possibilidade de incluir adubos, plantas e mudas no orçamento, facilitando todo o cuidado do jardim em um só serviço.",
      vantagem: "Conveniência e preços especiais.",
      icon: <Package className="w-8 h-8" />
    },
    {
      titulo: "Registro Fotográfico",
      descricao: "Antes e depois para acompanhar a evolução do jardim e facilitar o planejamento de futuras manutenções.",
      vantagem: "Acompanhamento visual da evolução.",
      icon: <Camera className="w-8 h-8" />
    }
  ];

  const categorias = [...new Set(servicos.map(servico => servico.categoria))];

  const getCategoriaColor = (categoria) => {
    const colors = {
      'Manutenção': 'bg-green-100 text-green-800',
      'Poda': 'bg-blue-100 text-blue-800',
      'Plantio': 'bg-purple-100 text-purple-800',
      'Tratamento': 'bg-orange-100 text-orange-800',
      'Irrigação': 'bg-cyan-100 text-cyan-800',
      'Limpeza': 'bg-yellow-100 text-yellow-800',
      'Paisagismo': 'bg-pink-100 text-pink-800'
    };
    return colors[categoria] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#228B22] to-[#32CD32] text-white py-16">
        <div className="container mx-auto px-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Catálogo de Serviços de Jardinagem</h1>
          <p className="text-xl mb-2">Atendimento residencial, comercial e condomínios</p>
          <p className="text-lg opacity-90">Serviços realizados com cuidado, segurança e compromisso com o seu jardim.</p>
        </div>
      </section>

      {/* Serviços Section */}
      <section className="py-16">
        <div className="container mx-auto px-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#263138]">Serviços Oferecidos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicos.map((servico) => (
              <Card key={servico.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-[#228B22]">
                      {servico.icon}
                    </div>
                    <Badge className={getCategoriaColor(servico.categoria)}>
                      {servico.categoria}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-[#263138]">{servico.nome}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {servico.descricao}
                  </CardDescription>
                  <div className="text-lg font-semibold text-[#228B22]">
                    {servico.valor}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pacotes Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#263138] mb-4">🌱 Pacotes e Dicas para Economizar</h2>
            <p className="text-gray-600">Opções especiais para otimizar seu investimento em jardinagem</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pacotes.map((pacote, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-[#228B22]">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-[#228B22]">
                      {pacote.icon}
                    </div>
                    <CardTitle className="text-lg text-[#263138]">💡 {pacote.titulo}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {pacote.descricao}
                  </CardDescription>
                  <div className="text-sm font-medium text-[#228B22] bg-green-50 p-3 rounded-lg">
                    <strong>Vantagem:</strong> {pacote.vantagem}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#ADFF2F]">
        <div className="container mx-auto px-20 text-center">
          <h2 className="text-3xl font-bold text-[#263138] mb-4">Pronto para transformar seu jardim?</h2>
          <p className="text-lg text-[#263138] mb-8">
            Entre em contato conosco para um orçamento personalizado e gratuito
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="https://web.WhatsApp.com/send?phone=554799031486" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-[#228B22] hover:bg-[#1e7a1e] text-white px-8 py-4 text-lg">
                Solicitar Orçamento
              </Button>
            </a>
            <a href="tel:+5547999031486">
              <Button variant="outline" className="border-[#228B22] text-[#228B22] hover:bg-[#228B22] hover:text-white px-8 py-4 text-lg">
                Ligar Agora
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catalogo;

