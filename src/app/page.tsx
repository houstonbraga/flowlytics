import Header from "./components/header"
import SectionCharacteristics from "./components/section-characteristics"
import SectionCompanies from "./components/section-companies"
import SectionHero from "./components/section-hero"
import SectionIntegrations from "./components/section-integrations"
import SectionMetrics from "./components/section-metrics"
import SectionQuestions from "./components/section-questions"
import SectionResources from "./components/section-resources"
import SectionSisyphus from "./components/section-sisyphus"
import SectionStillQuestions from "./components/section-still-questions"

const Page = () => {
  return (
    <>
      <Header />
      <SectionHero />
      <SectionCompanies />
      <SectionCharacteristics />
      <SectionSisyphus />
      <SectionResources />
      <SectionIntegrations />
      <SectionQuestions />
      <SectionStillQuestions />
      <SectionMetrics />
    </>
    
  )
}

export default Page