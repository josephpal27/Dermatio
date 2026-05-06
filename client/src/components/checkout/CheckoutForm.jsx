import { useState } from "react"

const CheckoutForm = () => {

    const [selectedType, setSelectedType] = useState("Home")

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        const data = Object.fromEntries(formData)

        const isEmpty = Object.values(data).some(value => value === "")

        if (isEmpty) {
            alert("Please fill all required fields")
            return
        }

        alert("Proceeding to payment")
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="
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
                    <label className="
                        text-[1.05rem]
                        mt-[0.5rem]
                    ">
                        Address Type :
                    </label>
                    <div className="
                        mt-[0.8rem] flex items-center gap-[1rem] 
                    ">
                        {["Home", "Office", "Others"].map((type) => {

                            const isActive = selectedType === type

                            return (
                                <button
                                    key={type}
                                    type="button"
                                    onClick={() => setSelectedType(type)}
                                    className={`
                                        rounded-full
                                        px-[1rem]
                                        py-[0.3rem]
                                        shadow-sm
                                        transition-all duration-300
                                        ${isActive
                                            ? "bg-[#becb0c] text-white"
                                            : "bg-white"
                                        }
                                    `}
                                >
                                    {type}
                                </button>
                            )
                        })}
                    </div>
                </div>
            </form>
        </>
    )
}

export default CheckoutForm
