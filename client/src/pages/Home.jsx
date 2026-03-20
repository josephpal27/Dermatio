import AdvancedLotion from "../components/home/AdvancedLotion"
import AdvisoryBoard from "../components/home/AdvisoryBoard"
import ChooseCare from "../components/home/ChooseCare"
import ClinicallyProven from "../components/home/ClinicallyProven"
import EczemaJourney from "../components/home/EczemaJourney"
import HighLights from "../components/home/Highlights"
import HomeBanner from "../components/home/HomeBanner"
import OurProducts from "../components/home/OurProducts"
import StageOfEczemaJourney from "../components/home/StageOfEczemaJourney"
// import Testimonials from "../components/home/Testimonials"
import WhyDermatio from "../components/home/WhyDermatio"

const Home = () => {
  return (
    <>
      <HomeBanner />
      <HighLights />
      <AdvancedLotion />
      <OurProducts />
      <EczemaJourney />
      <StageOfEczemaJourney />
      <WhyDermatio />
      <ClinicallyProven />
      <ChooseCare />
      <AdvisoryBoard />
      {/* <Testimonials /> */}
    </>
  )
}

export default Home