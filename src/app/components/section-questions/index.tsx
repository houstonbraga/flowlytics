import GridContainer from "../GridContainer";
import ListQuestions from "./components/ListQuestions";

const SectionQuestions = () => {
  return (
    <section>
      <GridContainer>
        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-4xl mb-5">Perguntas frequentes</h1>
          <p className="text-xl text-gray-500 mb-16 text-center">
            Tudo o que você precisa saber sobre o produto e o faturamento.
          </p>
          <ListQuestions />
        </div>
      </GridContainer>
    </section>
  );
};

export default SectionQuestions;
