import Header from "./components/header"
import SectionCharacteristics from "./components/section-characteristics"
import SectionCompanies from "./components/section-companies"
import SectionHero from "./components/section-hero"
import SectionSisyphus from "./components/section-sisyphus"

const Page = () => {
  return (
    <>
      <Header />
      <SectionHero />
      <SectionCompanies />
      <SectionCharacteristics />
      <SectionSisyphus />
    </>
    
  )
}

export default Page