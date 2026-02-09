import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/logo.avif';
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

let footerData = [
    {
        title: "We Support",
        items: [
            "Dermatologist Developed",
            "Clinically Tested",
            "Hypoallergenic",
            "Fragrance-Free",
            "Cruelty-Free",
            "Made for Atopic Skin",
        ],
        type: "text",
    },
    {
        title: "Quick Links",
        items: [
            { label: "Home", to: "/" },
            { label: "About Us", to: "/about" },
            { label: "Products", to: "/products" },
            { label: "The Science", to: "/the-science" },
            { label: "Offers", to: "/offers" },
            { label: "Cart", to: "/cart" },
        ],
        type: "link",
    },
    {
        title: "Help",
        items: [
            { label: "Customer Support", to: "/customer-support" },
            { label: "Terms & Conditions", to: "/terms-and-conditions" },
            { label: "Privacy Policy", to: "/privacy-policy" },
        ],
        type: "link",
    },
];

let footerSocialHandles = [
    {
        id: 1,
        icon: <FaFacebookF />,
        link: "#"
    },
    {
        id: 2,
        icon: <FaInstagram />,
        link: "#"
    },
    {
        id: 3,
        icon: <FaXTwitter />,
        link: "#"
    },
    {
        id: 4,
        icon: <FaLinkedinIn />,
        link: "#"
    }
]

const Footer = () => {
    return (
        <>
            <footer className="
                bg-[#fbf4eb]
            ">
                {/* Main */}
                <div className="
                    py-[3rem]
                    px-[7%]
                    flex
                    justify-between
                ">
                    {/* Left */}
                    <div className="
                        w-[30%]
                    ">
                        <img src={logo} alt="Logo" loading="lazy" className="
                            w-[170px]
                        " />
                        <span className="
                            mt-[2rem]
                            block
                            text-[#000]
                            font-[600]
                            text-[1.1rem]
                        ">
                            We See You, We Support You
                        </span>
                        <p className="
                            text-[0.9rem]
                            text-[#363636]
                            mt-[0.5rem]
                        ">
                            Living with atopic skin can feel isolating. The constant discomfort, the self-consciousness, the frustration when nothing seems to work, we get it. Dermatio is more than skincare; it's a partner in your journey.
                        </p>
                    </div>

                    {/* Right */}
                    <div className="
                        w-[60%]
                    ">
                        {/* Content */}
                        <div className="
                            flex
                            justify-between
                            flex-wrap
                        ">
                            {
                                footerData.map((item, index) => {
                                    return (
                                        <div key={index} className="
                                            w-full sm:w-[auto]
                                        ">
                                            <span className="
                                                block font-[600]
                                                text-[1.5rem]
                                                mb-[1.2rem]
                                            ">
                                                {item.title}
                                            </span>

                                            {item.type === "text" &&
                                                item.items.map((item, idx) => (
                                                    <p key={idx} className="
                                                        text-[1.1rem] 
                                                        text-[#363636] 
                                                        mb-[0.5rem]
                                                    ">
                                                        {item}
                                                    </p>
                                                ))}

                                            {item.type === "link" &&
                                                item.items.map((item, idx) => (
                                                    <Link
                                                        key={idx}
                                                        to={item.to}
                                                        className="
                                                            text-[1.1rem] 
                                                            text-[#363636] 
                                                            mb-[0.5rem]
                                                            block 
                                                            hover:text-black
                                                            hover:underline
                                                        ">
                                                        {item.label}
                                                    </Link>
                                                ))}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        {/* Social Icons */}
                        <div className="
                            mt-[2rem]
                            flex
                            justify-end
                            gap-[1rem]
                        ">
                            {
                                footerSocialHandles.map((item, index) => {
                                    return (
                                        <a href={item.link} target="_blank" key={index} className="
                                            w-[40px]
                                            h-[40px]
                                            flex
                                            justify-center
                                            items-center
                                            bg-[#d4e01c]
                                            text-[1.2rem]
                                            rounded-[2px]
                                            transition duration-200
                                            text-[#fff]
                                            hover:translate-y-[-4px]
                                        ">
                                            {item.icon}
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="
                    px-[7%]
                    py-[1rem]
                    border-[#a7a7a7]
                    border-t-[1px]
                ">
                    <p className="
                        text-center
                        text-[#363636]
                        text-[0.9rem]
                    ">
                        Copyright © 2025 | Dermatio | All Rights Reserved
                    </p>
                </div>
            </footer>
        </>
    )
}
export default Footer
