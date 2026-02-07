import AdvancedLotion from "../components/AdvancedLotion"
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
    </>
  )
}

export default Home