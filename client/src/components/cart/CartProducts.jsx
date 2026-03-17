import CartProductCard from "./CartProductCard";

const CartProducts = () => {
    return (
        <>
            <section className="
                px-[7%]
                pt-[2rem]
                pb-[5rem]
            ">
                {/* Cart Products List */}
                <CartProductCard />
                <CartProductCard />
            </section>
        </>
    )
}

export default CartProducts