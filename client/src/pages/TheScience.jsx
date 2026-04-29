import DistinctPhases from "../components/science/DistinctPhases"
import InterruptCycle from "../components/science/InterruptCycle"
import ScienceBanner from "../components/science/ScienceBanner"
import ScratchCycle from "../components/science/ScratchCycle"
import SkinPhysiology from "../components/science/SkinPhysiology"
import SupportPhase from "../components/science/SupportPhase"
import UnderstandingEczema from "../components/science/UnderstandingEczema"

const TheScience = () => {
    return (
        <>
            <ScienceBanner />
            <UnderstandingEczema />
            <DistinctPhases />
            <SupportPhase />
            <ScratchCycle />
            <InterruptCycle />
            <SkinPhysiology />
        </>
    )
}

export default TheScience
