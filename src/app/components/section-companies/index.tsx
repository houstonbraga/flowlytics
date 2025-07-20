import GridContainer from "../GridContainer";
import { IconCompany } from "./components/icon-company";

const itemsIcons = [
  {
    id: 1,
    src: "/assets/layers.svg",
    alt: "layers",
    width: 146,
    height: 48,
  },
  {
    id: 2,
    src: "/assets/sisyphus.svg",
    alt: "sisyphus",
    width: 169,
    height: 48,
  },
  {
    id: 3,
    src: "/assets/circooles.svg",
    alt: "circooles",
    width: 183,
    height: 48,
  },
  {
    id: 4,
    src: "/assets/catalog.svg",
    alt: "catalog",
    width: 160,
    height: 48,
  },
  {
    id: 5,
    src: "/assets/quotient.svg",
    alt: "quotient",
    width: 187,
    height: 48,
  },
];

const SectionCompanies = () => {
  return (
    <section>
      <GridContainer>
        <div className="flex flex-col text-center gap-8 pb-24 mb-24 border-b border-b-gray-200">
          <span className="text-gray-600">
            Junte -se a mais de 4.000 empresas que já crescem
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
