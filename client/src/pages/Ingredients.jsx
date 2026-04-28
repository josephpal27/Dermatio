import IngredientHighlights from "../components/ingredients/IngredientHighlights"
import IngredientsBanner from "../components/ingredients/IngredientsBanner"
import OurIngredients from "../components/ingredients/OurIngredients"
import TazmanPepper from "../components/ingredients/TazmanPepper"
import WhatWeLeave from "../components/ingredients/WhatWeLeave"

const Ingredients = () => {
    return (
        <>
            <IngredientsBanner />
            <OurIngredients />
            <TazmanPepper />
            <IngredientHighlights />
            <WhatWeLeave />
        </>
    )
}

export default Ingredients
