import { ReactNode } from "react";

interface QuestionTypes {
  question: string;
  response: string;
  icon: ReactNode;
  isOpen: boolean;
}

const Question = ({ question, response, icon, isOpen }: QuestionTypes) => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex justify-between items-start gap-4">
        <h2 className="text-[18px] font-semibold flex-1">{question}</h2>
        {icon}
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="w-full">
          <p className="text-gray-500">{response}</p>
        </div>
      </div>
    </div>
  );
};

export default Question;
