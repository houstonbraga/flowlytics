import Header from "./components/header"
import SectionCharacteristics from "./components/section-characteristics"
import SectionCompanies from "./components/section-companies"
import SectionHero from "./components/section-hero"
import SectionIntegrations from "./components/section-integrations"
import SectionResources from "./components/section-resources"
import SectionSisyphus from "./components/section-sisyphus"

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
    </>
    
  )
}

export default Page