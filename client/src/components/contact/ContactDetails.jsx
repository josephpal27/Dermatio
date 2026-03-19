import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import ContactForm from './ContactForm';

const contactData = [
    {
        id: 1,
        title: "Call Us",
        items: [
            { value: "+91 8657001315", link: "tel:8657001315" },
        ],
    },
    {
        id: 2,
        title: "Location",
        items: [
            {
                value: "Gala No. 4, 2nd Floor, Shiv Industrial Complex, Building No. 2, Survey No. 21, Sativali Palghar, Vasai East, Maharashtra-401208, India",
                link: "https://maps.app.goo.gl/",
            },
        ],
    },
    {
        id: 3,
        title: "Email Us",
        items: [
            {
                value: "dermatiocare@gmail.com",
                link: "https://mail.google.com/mail/?view=cm&fs=1&to=dermatiocare@gmail.com",
            },
        ],
    },
    {
        id: 4,
        title: "Social Media",
        socials: [
            { icon: <FaInstagram />, link: "https://www.instagram.com/dermatiocare/" },
            { icon: <FaFacebookF />, link: "https://www.facebook.com/profile.php?id=61578935669043" },
            { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
        ],
    },
];

const ContactDetails = () => {
    return (
        <>
            <section className="
                px-[1rem] sm:px-[5%] lg:px-[7%]
                mt-[1.7rem] sm:mt-[3rem] lg:mt-[3rem] xl:mt-[3.5rem] 2xl:mt-[4.5rem]
                d-flex flex-wrap justify-between
            ">
                <div className="
                    w-full sm:w-[50%]
                ">
                    <h2 className="
                        text-[1.8rem] sm:text-[3rem] lg:text-[2.4rem] xl:text-[2.7rem] 2xl:text-[3rem]
                        font-[600] tracking-[3px]    
                    "
                        data-aos="fade"
                    >
                        {/* <span className="text-[#becb0c]">Get In Touch</span> For Support, Queries, <span className="text-[#becb0c]">Or</span> Collaborations */}
                        Get In Touch
                    </h2>
                    <p className="
                        text-[1.1rem] sm:text-[1rem] lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem]
                        mt-[0.5rem] sm:mt-[1.5rem] lg:mt-[1.25rem] xl:mt-[1.35rem] 2xl:mt-[1.5rem]
                        text-[#363636]
                    "
                        data-aos="fade" data-aos-once="true"
                    >
                        For product queries, order assistance, or general questions, feel free to contact us.
                    </p>
                    <div className="
                        mt-[1.5rem] sm:mt-[3rem] lg:mt-[2.6rem] xl:mt-[2.8rem] 2xl:mt-[3rem]
                        d-flex flex-wrap justify-between 
                    ">
                        {contactData.map((item) => (
                            <div key={item.id} className="
                                w-full sm:w-[48.5%]
                                p-[1rem]
                                shadow-sm border
                                rounded-[12px] sm:rounded-[12px] lg:rounded-[8px] xl:rounded-[10px] 2xl:rounded-[12px]
                                mb-[1.1rem] sm:mb-[1.2rem] lg:mb-[1.1rem] xl:mb-[1.2rem] 2xl:mb-[1.25rem]
                            "
                                data-aos="fade" data-aos-once="true"
                            >
                                <span className="
                                    text-[#becb0c] d-block
                                    text-[1.3rem] sm:text-[1.3rem] lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem]
                                    mb-[1rem] sm:mb-[1rem] lg:mb-[0.8rem] xl:mb-[0.9rem] 2xl:mb-[1rem]
                                ">
                                    {item.title}
                                </span>

                                {/* Normal text / links */}
                                {item.items &&
                                    item.items.map((data, i) => (
                                        <p key={i} className="
                                            text-[1.1rem] sm:text-[1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                                            mb-[0.5rem]
                                        ">
                                            {data.label &&
                                                <b className="
                                                text-[1.1rem] sm:text-[1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                                            ">
                                                    {data.label} :
                                                </b>}
                                            <a
                                                href={data.link} target="_blank"
                                                className="
                                                    text-[#363636] hover:text-[#8e9802] font-[500]
                                                    text-[1.1rem] sm:text-[1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1rem]
                                            ">
                                                {data.value}
                                            </a>
                                        </p>
                                    ))}

                                {/* Social icons */}
                                {item.socials && (
                                    <div className="
                                        d-flex 
                                        gap-[1rem] sm:gap-[1rem] lg:gap-[0.8rem] xl:gap-[0.9rem] 2xl:gap-[1rem]
                                        mt-[0.5rem]
                                    ">
                                        {item.socials.map((social, i) => (
                                            <a key={i} href={social.link} target="_blank" rel="noopener noreferrer" className="
                                                text-[#fff] bg-[#becb0c] hover:bg-[#aeba05] transition rounded-full d-flex justify-center items-center
                                                text-[1.2rem] sm:text-[1.2rem] lg:text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                                                w-[30px] lg:w-[28px] xl:w-[32px] 2xl:w-[35px]
                                                h-[30px] lg:h-[28px] xl:h-[32px] 2xl:h-[35px]
                                            ">
                                                {social.icon}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="
                    w-full sm:w-[44%]
                ">
                    <ContactForm />
                </div>
            </section>
        </>
    )
}

export default ContactDetails