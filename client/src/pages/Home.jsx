import AdvancedLotion from "../components/AdvancedLotion"
import ClinicallyProven from "../components/ClinicallyProven"
import EczemaJourney from "../components/EczemaJourney"
import HighLights from "../components/Highlights"
import HomeBanner from "../components/HomeBanner"
import OurProducts from "../components/OurProducts"
import StageOfEczemaJourney from "../components/StageOfEczemaJourney"

const Home = () => {
  return (
    <>
      <HomeBanner />
      <HighLights />
      <AdvancedLotion />
      <OurProducts />
      <EczemaJourney />
      <StageOfEczemaJourney />
      <ClinicallyProven />
    </>
  )
}

export default Home