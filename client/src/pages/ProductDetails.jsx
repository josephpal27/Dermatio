import ProductDescription from "../components/product-details/ProductDescription"
import ProductDetailsBanner from "../components/product-details/ProductDetailsBanner"
import ProductGallery from "../components/product-details/ProductGallery"
import RelatedProducts from "../components/product-details/RelatedProducts"

const ProductDetails = () => {
    return (
        <>
            <ProductDetailsBanner />
            <ProductGallery />
            <ProductDescription />
            <RelatedProducts />
        </>
    )
}

export default ProductDetails