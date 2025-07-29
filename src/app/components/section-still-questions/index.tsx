import Button from "../Button";
import GridContainer from "../GridContainer";
import Image from "next/image";

const SectionStillQuestions = () => {
  return (
    <section>
      <GridContainer>
        <div className="flex flex-col items-center gap-8 py-8 bg-white text-gray-950 rounded-2xl">
          <Image src="/assets/users.png" width={120} height={56} alt="users" />
          <div className="text-center space-y-2">
            <h2 className="text-xl font-semibold">Ainda tem perguntas?</h2>
            <p className="text-gray-500 max-w-3xl">
              Não consegue encontrar a resposta que você está procurando? Por
              favor, converse com nossa equipe amigável.
            </p>
          </div>
          <Button text="Entre em contato" />
        </div>
      </GridContainer>
    </section>
  );
};

export default SectionStillQuestions;
