import Header from "./components/header"
import SectionCharacteristics from "./components/section-characteristics"
import SectionCompanies from "./components/section-companies"
import SectionHero from "./components/section-hero"

const Page = () => {
  return (
    <>
      <Header />
      <SectionHero />
      <SectionCompanies />
      <SectionCharacteristics />
    </>
    
  )
}

export default Page