import AdvancedLotion from "../components/AdvancedLotion"
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
    </>
  )
}

export default Home