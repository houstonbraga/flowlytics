import GridContainer from "../GridContainer";
import { IconCompany } from "./components/icon-company";
import { itemsIcons } from "@/app/data/data";


const SectionCompanies = () => {
  return (
    <section>
      <GridContainer>
        <div className="flex flex-col text-center gap-8 pb-24 mb-24 border-b border-b-gray-800">
          <span className="text-white">
            Junte-se a mais de 4.000 empresas que já crescem
          </span>
          <div className="flex justify-around items-center flex-wrap">
            {itemsIcons.map(({src, alt, width, height}, index) => (
              <IconCompany key={index}  src={src} alt={alt} width={width} height={height} />
            ))}
          </div>
        </div>
      </GridContainer>
    </section>
  );
};

export default SectionCompanies;
