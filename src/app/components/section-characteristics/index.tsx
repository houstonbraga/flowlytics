import GridContainer from "../GridContainer";
import Characteristics from "./components/characteristics";

const SectionCharacteristics = () => {
  return (
    <section>
      <GridContainer>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-brand font-semibold mb-3">Características</h2>
          <h1 className="text-4xl font-semibold mb-5">
            Análise que parece ser do futuro
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl text-center mb-16">
            Produtos poderosos e de autoatendimento e análise de crescimento
            para ajudá-lo a converter, envolver e reter mais usuários. Confie em
            mais de 4.000 startups.
          </p>
        </div>
        <Characteristics />
      </GridContainer>
    </section>
  );
};

export default SectionCharacteristics;
