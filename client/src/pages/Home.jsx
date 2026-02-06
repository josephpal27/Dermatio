import AdvancedLotion from "../components/AdvancedLotion"
import EczemaJourney from "../components/EczemaJourney"
import HighLights from "../components/Highlights"
import HomeBanner from "../components/HomeBanner"
import OurProducts from "../components/OurProducts"

const Home = () => {
  return (
    <>
      <HomeBanner />
      <HighLights />
      <AdvancedLotion />
      <OurProducts />
      <EczemaJourney />
    </>
  )
}

export default Home