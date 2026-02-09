import AdvancedLotion from "../components/AdvancedLotion"
import AdvisoryBoard from "../components/AdvisoryBoard"
import ChooseCare from "../components/ChooseCare"
import ClinicallyProven from "../components/ClinicallyProven"
import EczemaJourney from "../components/EczemaJourney"
import HighLights from "../components/Highlights"
import HomeBanner from "../components/HomeBanner"
import OurProducts from "../components/OurProducts"
import StageOfEczemaJourney from "../components/StageOfEczemaJourney"
import Testimonials from "../components/Testimonials"

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
      <ChooseCare />
      <AdvisoryBoard />
      <Testimonials />
    </>
  )
}

export default Home