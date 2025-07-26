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
      "Sim, você pode nos experimentar gratuitamente por 30 dias. Se você quiser, forneceremos uma chamada de integração de 30 minutos gratuita e personalizada para colocá-lo em funcionamento o mais rápido possível.",
    isOpen: false,
  },
  {
    question: "Qual é a sua política de cancelamento?",
    response:
      "Sim, você pode nos experimentar gratuitamente por 30 dias. Se você quiser, forneceremos uma chamada de integração de 30 minutos gratuita e personalizada para colocá-lo em funcionamento o mais rápido possível.",
    isOpen: false,
  },
  {
    question: "Como funciona o faturamento?",
    response:
      "Sim, você pode nos experimentar gratuitamente por 30 dias. Se você quiser, forneceremos uma chamada de integração de 30 minutos gratuita e personalizada para colocá-lo em funcionamento o mais rápido possível.",
    isOpen: false,
  },
  {
    question: "Como altero o email da minha conta?",
    response:
      "Sim, você pode nos experimentar gratuitamente por 30 dias. Se você quiser, forneceremos uma chamada de integração de 30 minutos gratuita e personalizada para colocá-lo em funcionamento o mais rápido possível.",
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
