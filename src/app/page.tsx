import Header from "./components/header"
import SectionCharacteristics from "./components/section-characteristics"
import SectionCompanies from "./components/section-companies"
import SectionHero from "./components/section-hero"
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
    </>
    
  )
}

export default Page