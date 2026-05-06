import { useState } from "react"

const CheckoutForm = ({ shippingData, setShippingData, inputRefs }) => {

    return (
        <>
            <form className="
                checkout-form
                mt-[1.5rem]
            ">
                <div className="flex gap-[1rem]">
                    <input
                        type="text"
                        placeholder="First Name"
                        ref={inputRefs.firstName}
                        value={shippingData.firstName}
                        onChange={(e) =>
                            setShippingData(prev => ({
                                ...prev,
                                firstName: e.target.value
                            }))
                        }
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        ref={inputRefs.lastName}
                        value={shippingData.lastName}
                        onChange={(e) =>
                            setShippingData(prev => ({
                                ...prev,
                                lastName: e.target.value
                            }))
                        }
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Flat, Building, Floor, House No."
                        ref={inputRefs.address}
                        value={shippingData.address}
                        onChange={(e) =>
                            setShippingData(prev => ({
                                ...prev,
                                address: e.target.value
                            }))
                        }
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Area, Street, Sector"
                        ref={inputRefs.area}
                        value={shippingData.area}
                        onChange={(e) =>
                            setShippingData(prev => ({
                                ...prev,
                                area: e.target.value
                            }))
                        }
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Landmark (Optional)"
                        ref={inputRefs.landmark}
                        value={shippingData.landmark}
                        onChange={(e) =>
                            setShippingData(prev => ({
                                ...prev,
                                landmark: e.target.value
                            }))
                        }
                    />
                </div>
                <div className="flex gap-[1rem]">
                    <input
                        type="text"
                        placeholder="City"
                        ref={inputRefs.city}
                        value={shippingData.city}
                        onChange={(e) =>
                            setShippingData(prev => ({
                                ...prev,
                                city: e.target.value
                            }))
                        }
                    />
                    <input
                        type="text"
                        placeholder="State"
                        ref={inputRefs.state}
                        value={shippingData.state}
                        onChange={(e) =>
                            setShippingData(prev => ({
                                ...prev,
                                state: e.target.value
                            }))
                        }
                    />
                </div>
                <div>
                    <input
                        type="number"
                        placeholder="PIN Code"
                        ref={inputRefs.pincode}
                        value={shippingData.pincode}
                        onChange={(e) =>
                            setShippingData(prev => ({
                                ...prev,
                                pincode: e.target.value
                            }))
                        }
                    />
                </div>
                <div>
                    <input
                        type="number"
                        placeholder="Phone No."
                        ref={inputRefs.phone}
                        value={shippingData.phone}
                        onChange={(e) =>
                            setShippingData(prev => ({
                                ...prev,
                                phone: e.target.value
                            }))
                        }
                    />
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

                            const isActive = shippingData.addressType === type

                            return (
                                <button
                                    key={type}
                                    type="button"
                                    onClick={() =>
                                        setShippingData(prev => ({
                                            ...prev,
                                            addressType: type
                                        }))
                                    }
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
