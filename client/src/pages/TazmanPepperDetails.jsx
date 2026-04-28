import ActiveCompounds from "../components/tazman/ActiveCompounds"
import Safety from "../components/tazman/Safety"
import SkinExperience from "../components/tazman/SkinExperience"
import TazmanBanner from "../components/tazman/TazmanBanner"
import TazmanScience from "../components/tazman/TazmanScience"
import TazmanStory from "../components/tazman/TazmanStory"
import WhyTazman from "../components/tazman/WhyTazman"

const TazmanPepperDetails = () => {
    return (
        <>
            <TazmanBanner />
            <TazmanStory />
            <WhyTazman />
            <TazmanScience />
            <ActiveCompounds />
            <SkinExperience />
            <Safety />
        </>
    )
}

export default TazmanPepperDetails
