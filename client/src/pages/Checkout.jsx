
const Checkout = () => {
    return (
        <>
            <section className="
                flex justify-between flex-wrap
                px-[1rem] sm:px-[5%] lg:px-[7%]
                py-[2rem]
            ">
                {/* Left */}
                <div className="
                    w-[48%]
                ">
                    <h1>
                        Enter Shipping Details
                    </h1>
                    <form action="">
                        <div>
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
                        <div>
                            <input type="text" placeholder="City" required />
                            <input type="text" placeholder="State" required />
                        </div>
                        <div>
                            <input type="text" placeholder="PIN Code" required />
                        </div>
                        <div>
                            <input type="number" placeholder="Phone No." required />
                        </div>
                        {/* Address Type */}
                        <div>
                            <label>Address Type :</label>
                            <div>
                                {["Home", "Office", "Others"].map((type) => (
                                    <button
                                        key={type}
                                        type="button"
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </form>
                </div>
                {/* Right */}
                <div className="
                    w-[48%]
                ">

                </div>
            </section>
        </>
    )
}

export default Checkout
