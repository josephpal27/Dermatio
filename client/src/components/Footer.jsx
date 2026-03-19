import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/logo.avif';
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import '../css/Footer.css';

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
            { label: "Customer Support", to: "/contact" },
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
        link: "https://www.facebook.com/profile.php?id=61578935669043"
    },
    {
        id: 2,
        icon: <FaInstagram />,
        link: "https://www.instagram.com/dermatiocare/"
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
                    pt-[2rem] sm:pt-[3rem] lg:pt-[2.6rem] xl:pt-[2.8rem] 2xl:pt-[3rem]
                    pb-[1.3rem] sm:pb-[2rem] lg:pb-[1.6rem] xl:pb-[1.8rem] 2xl:pb-[2rem]
                    px-[1rem] sm:px-[5%] lg:px-[7%]
                    flex justify-between flex-wrap
                ">
                    {/* Left */}
                    <div className="
                        w-[100%] sm:w-[30%]
                    ">
                        <img src={logo} alt="Logo" loading="lazy" className="
                            w-[130px] sm:w-[170px] lg:w-[150px] xl:w-[160px] 2xl:w-[170px]
                        " />
                        <span className="
                            mt-[1.5rem] sm:mt-[2rem] lg:mt-[1.6rem] xl:mt-[1.8rem] 2xl:mt-[2rem]
                            block font-[600]
                            text-[1.1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                        ">
                            We See You, We Support You
                        </span>
                        <p className="
                            text-[0.95rem] sm:text-[0.9rem] lg:text-[0.7rem] xl:text-[0.8rem] 2xl:text-[0.9rem]
                            text-[#363636]
                            mt-[0.5rem]
                        ">
                            Living with atopic skin can feel isolating. The constant discomfort, the self-consciousness, the frustration when nothing seems to work, we get it. Dermatio is more than skincare; it's a partner in your journey.
                        </p>
                    </div>

                    {/* Right */}
                    <div className="
                        w-[100%] sm:w-[60%]
                        mt-[0.7rem] sm:mt-0
                    ">
                        {/* Content */}
                        <div className="
                            flex justify-between flex-wrap
                        ">
                            {
                                footerData.map((item, index) => {
                                    return (
                                        <div key={index} className="
                                            w-full sm:w-[auto]
                                            foot-links
                                        ">
                                            <span className="
                                                block font-[600]
                                                text-[1.3rem] sm:text-[1.5rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem]
                                                mb-[1rem] sm:mb-[1.2rem] lg:mb-[1rem] xl:mb-[1.1rem] 2xl:mb-[1.2rem]
                                                mt-[1.2rem] sm:mt-0
                                            ">
                                                {item.title}
                                            </span>

                                            {item.type === "text" &&
                                                item.items.map((item, idx) => (
                                                    <p key={idx} className="
                                                        text-[1.1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                                                        text-[#363636] 
                                                        mb-[0.7rem] sm:mb-[0.5rem]
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
                                                            text-[1.1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                                                            text-[#363636] hover:text-black block 
                                                            mb-[0.7rem] sm:mb-[0.5rem]
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
                            mt-[1.2rem] sm:mt-[2rem] lg:mt-[1.6rem] xl:mt-[1.8rem] 2xl:mt-[2rem]
                            flex justify-start sm:justify-end
                            gap-[1rem] sm:gap-[1rem] lg:gap-[0.8rem] xl:gap-[0.9rem] 2xl:gap-[1rem]
                        ">
                            {
                                footerSocialHandles.map((item, index) => {
                                    return (
                                        <a href={item.link} target="_blank" key={index} className="
                                            w-[38px] sm:w-[40px] lg:w-[34px] xl:w-[37px] 2xl:w-[40px]
                                            h-[38px] sm:h-[40px] lg:h-[34px] xl:h-[37px] 2xl:h-[40px]
                                            flex justify-center items-center bg-[#d4e01c] transition duration-200 rounded-[2px]
                                            text-[1.3rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                                            text-[#363636]
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
                    px-[1rem] sm:px-[5%] lg:px-[7%]
                    py-[0.8rem] sm:py-[1rem] lg:py-[0.8rem] xl:py-[0.9rem] 2xl:py-[1rem]
                    border-[#a7a7a7] border-t-[1px]
                ">
                    <p className="
                        text-center text-[#363636]
                        text-[0.83rem] sm:text-[0.9rem] lg:text-[0.7rem] xl:text-[0.8rem] 2xl:text-[0.9rem]
                    ">
                        Copyright © 2025 | Dermatio | All Rights Reserved
                    </p>
                </div>
            </footer>
        </>
    )
}
export default Footer
