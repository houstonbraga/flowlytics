import GridContainer from "../GridContainer";
import MockupResources from "./components/mockupsResources";

const SectionResources = () => {
  return (
    <section>
      <GridContainer>
        <div className="flex flex-col items-center">
          <div className="bg-purple-50 py-0.5 px-4 text-center inline-block rounded-full mb-4">
            <span className="text-brand font-semibold">Recursos</span>
          </div>
          <h1 className="mb-5 text-4xl font-semibold">Recursos de ponta para análise avançada</h1>
          <p className="text-gray-600 text-xl text-center max-w-3xl mb-16">
            Produtos poderosos e de autoatendimento e análise de crescimento
            para ajudá-lo a converter, envolver e reter mais usuários. Confie em
            mais de 4.000 startups.
          </p>
          <MockupResources />
        </div>
      </GridContainer>
    </section>
  );
};

export default SectionResources;
