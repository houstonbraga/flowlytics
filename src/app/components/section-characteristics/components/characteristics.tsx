import {
  FiBarChart2,
  FiCommand,
  FiMail,
  FiMessageCircle,
  FiSmile,
  FiZap,
} from "react-icons/fi";
import CharacteristicsOnly from "./characteristicOnly";

const listCharacteristics = [
  {
    icon: <FiMail />,
    title: "Compartilhe as caixas de entrada da equipe",
    description:
      "Se você tem uma equipe de 2 ou 200, nossas caixas de entrada de equipes compartilhadas mantêm todos na mesma página e no loop.",
  },
  {
    icon: <FiZap />,
    title: "Entregar respostas instantâneas",
    description:
      "Uma plataforma de atendimento ao cliente tudo em um que ajuda a equilibrar tudo o que seus clientes precisam ser felizes.",
  },
  {
    icon: <FiBarChart2 />,
    title: "Gerencie sua equipe com relatórios",
    description:
      "Meça o que importa com os relatórios fáceis de usar do Untitled. Você pode filtrar, exportar e perfurar os dados em alguns cliques.",
  },
  {
    icon: <FiSmile />,
    title: "Conecte -se com os clientes",
    description:
      "Resolva um problema ou feche uma venda em tempo real com o bate-papo. Se ninguém estiver disponível, os clientes são perfeitamente roteados para e -mail sem confusão.",
  },
  {
    icon: <FiCommand />,
    title: "Conecte as ferramentas que você já usa",
    description:
      "Explore mais de 100 integrações que tornam seu fluxo de trabalho diário mais eficiente e familiar. Além disso, nossas extensas ferramentas de desenvolvedor.  ",
  },
  {
    icon: <FiMessageCircle />,
    title: "Nosso povo faz a diferença",
    description:
      "Somos uma extensão da sua equipe de atendimento ao cliente e todos os nossos recursos são gratuitos. Converse com nossa equipe amigável 24/7 quando precisar de ajuda.",
  },
];

export default function Characteristics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 items-start mb-24">
      {listCharacteristics.map(({ icon, title, description }, index) => (
        <CharacteristicsOnly
          key={index}
          icon={icon}
          title={title}
          description={description}
        />
      ))}
    </div>
  );
}
