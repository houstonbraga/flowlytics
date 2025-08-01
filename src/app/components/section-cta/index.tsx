import GridContainer from "../GridContainer"
import { GroupButtons } from "./components/GroupButtons"

const SectionCta = () => {
  return (
    <section className="bg-white text-gray-950 py-24 mb-24 text-center">
      <GridContainer>
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-semibold mb-5">Comece sua avaliação gratuita</h1>
          <p className="mb-10 text-xl text-gray-600">Junte -se a mais de 4.000 startups que já crescem sem título.</p>
        </div>
        <GroupButtons />
      </GridContainer>
    </section>
  )
}

export default SectionCta