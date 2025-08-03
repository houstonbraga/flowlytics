"use client";

import { useState } from "react";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import Question from "./Question";

const questions = [
  {
    question: "Existe uma avaliação gratuita disponível?",
    response:
      "Sim, você pode nos experimentar gratuitamente por 30 dias. Se você quiser, forneceremos uma chamada de integração de 30 minutos gratuita e personalizada para colocá-lo em funcionamento o mais rápido possível.",
    isOpen: true,
  },
  {
    question: "Posso mudar meu plano mais tarde?",
    response:
      "Absolutamente! Nossa plataforma é flexível e você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As mudanças são aplicadas imediatamente e você só paga a diferença proporcional. Não há taxas de cancelamento ou penalidades por mudança de plano.",
    isOpen: false,
  },
  {
    question: "Qual é a sua política de cancelamento?",
    response:
      "Oferecemos cancelamento sem complicações. Você pode cancelar sua assinatura a qualquer momento através do painel de controle ou entrando em contato com nosso suporte. Não há taxas de cancelamento, multas ou perguntas desnecessárias. Seus dados são mantidos por 30 dias após o cancelamento caso você queira retornar.",
    isOpen: false,
  },
  {
    question: "Como funciona o faturamento?",
    response:
      "O faturamento é simples e transparente. Cobramos mensalmente ou anualmente (com desconto de 20% no plano anual). Aceitamos todos os principais cartões de crédito e débito. O faturamento acontece automaticamente no mesmo dia do mês em que você se inscreveu. Você recebe um recibo por email após cada cobrança.",
    isOpen: false,
  },
  {
    question: "Como altero o email da minha conta?",
    response:
      "Para alterar o email da sua conta, acesse as configurações do perfil no painel de controle. Você precisará confirmar o novo email através de um link de verificação que enviaremos. Por segurança, todas as sessões ativas serão encerradas após a mudança. O processo leva apenas alguns minutos.",
    isOpen: false,
  },
];

const ListQuestions = () => {
  const [questionsState, setQuestionsState] = useState(questions);

  const handleOpenClick = (index: number) => {
    setQuestionsState((prevState) =>
      prevState.map((question, i) =>
        i === index ? { ...question, isOpen: !question.isOpen } : question
      )
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div className="flex flex-col gap-8">
        {questionsState.map(({ question, response, isOpen }, index) => (
          <Question
            key={index}
            question={question}
            response={response}
            isOpen={isOpen}
            icon={
              <button
                className="cursor-pointer text-brand flex-shrink-0"
                onClick={() => handleOpenClick(index)}
              >
                {isOpen ? (
                  <FiMinusCircle width={24} />
                ) : (
                  <FiPlusCircle width={24} />
                )}
              </button>
            }
          />
        ))}
      </div>
    </div>
  );
};

export default ListQuestions;
