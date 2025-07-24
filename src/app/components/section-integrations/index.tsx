import Button from "../Button";
import GridContainer from "../GridContainer";
import ListIcons from "./components/ListIcons";

const SectionIntegrations = () => {
  return (
    <section className="bg-white py-24 text-gray-950 mb-24">
      <GridContainer>
        <div className="text-center flex flex-col items-center">
          <h2 className="font-semibold text-brand mb-3">Integrações</h2>
          <h1 className="font-semibold text-gray-950 mb-5 text-4xl">
            Obtenha mais valor de suas ferramentas
          </h1>
          <p className="text-center text-xl text-gray-600 max-w-3xl mb-16">
            Conecte suas ferramentas, conecte suas equipes. Com mais de 200
            aplicativos já disponíveis em nosso diretório, as ferramentas
            favoritas da sua equipe estão a apenas um clique de distância.
          </p>
          <ListIcons />
          <Button 
            text="Veja todas as integrações"
          />
        </div>
      </GridContainer>
    </section>
  );
};

export default SectionIntegrations;
