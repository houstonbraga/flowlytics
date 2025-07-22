import GridContainer from "../GridContainer";
import Image from "next/image";

const SectionSisyphus = () => {
  return (
    <section className="bg-gray-200 py-24 mb-24">
      <GridContainer>
        <div className="flex flex-col items-center gap-8">
          <Image
            src="/assets/sisyphus.svg"
            alt="sisyphus"
            width={140}
            height={40}
          />
          <h1 className="text-5xl max-w-6xl text-center">
            Temos usado sem título para iniciar todos os novos projetos e não
            podemos imaginar trabalhar sem ele.
          </h1>
          <div className="flex flex-col items-center">
            <Image 
              src="/assets/avatar-02svg.svg"
              alt="avatar"
              width={64}
              height={64}
              className="mb-4"
            />
            <h2 className="text-xl font-semibold mb-1">Ronaldo Caio</h2>
            <h3 className="text-gray-500">Gerente de Produto, Sisyphus</h3>
          </div>
        </div>
      </GridContainer>
    </section>
  );
};

export default SectionSisyphus;
