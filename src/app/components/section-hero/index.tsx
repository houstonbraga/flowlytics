import GridContainer from "../GridContainer";
import HeroButtons from "./components/hero-buttons";
import TagFeature from "./components/tag-feature";

const SectionHero = () => {
  return (
    <section className="pt-24">
      <GridContainer>
        <div className="text-center">
          <TagFeature />
          <h1 className="text-6xl font-semibold text-gray-900 mt-4 mb-6">
            Belas análises para crescimento inteligente
          </h1>
          <p className="text-xl/6 text-gray-600 max-w-[850px] m-auto mb-12">
            Produtos poderosos e de autoatendimento e análise de crescimento
            para ajudá-lo a converter, envolver e reter mais usuários. Confie em
            mais de 4.000 startups.
          </p>
          <HeroButtons />
        </div>
      </GridContainer>
    </section>
  );
};

export default SectionHero;
