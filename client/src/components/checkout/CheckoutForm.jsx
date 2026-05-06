
const CheckoutForm = () => {
    return (
        <>
            <form action="" className="
                checkout-form
                mt-[1.5rem]
            ">
                <div className="flex gap-[1rem]">
                    <input type="text" placeholder="First Name" required />
                    <input type="text" placeholder="Last Name" required />
                </div>
                <div>
                    <input type="text" placeholder="Flat, Building, Floor, House No." required />
                </div>
                <div>
                    <input type="text" placeholder="Area, Street, Sector" required />
                </div>
                <div>
                    <input type="text" placeholder="Landmark (Optional)" />
                </div>
                <div className="flex gap-[1rem]">
                    <input type="text" placeholder="City" required />
                    <input type="text" placeholder="State" required />
                </div>
                <div>
                    <input type="number" placeholder="PIN Code" required />
                </div>
                <div>
                    <input type="number" placeholder="Phone No." required />
                </div>
                {/* Address Type */}
                <div>
                    <label>Address Type :</label>
                    <div className="
                        mt-[0.8rem] flex items-center gap-[1rem] 
                    ">
                        {["Home", "Office", "Others"].map((type) => (
                            <button
                                key={type}
                                type="button"
                                className="
                                    bg-[#becb0c] text-white rounded-full
                                    px-[1rem]
                                    py-[0.3rem]
                                "
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>
            </form>
        </>
    )
}

export default CheckoutForm
