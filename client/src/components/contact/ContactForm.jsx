
const ContactForm = () => {
    return (
        <>
            <div className="
                bg-[#eee7dd]
                pt-[1rem] sm:pt-[2rem] lg:pt-[1.6rem] xl:pt-[1.8rem] 2xl:pt-[2rem]
                p-[1rem] sm:p-[2.5rem] lg:p-[2.1rem] xl:p-[2.3rem] 2xl:p-[2.5rem]
                rounded-[15px] sm:rounded-[40px]
                mt-[1rem] sm:mt-[0]
                mb-[0.5rem] sm:mb-[0]
            "
                data-aos="fade-up" data-aos-once="true"
            >
                <span className="
                    text-[#363636] font-[700]
                    text-[1.3rem] sm:text-[1.8rem] lg:text-[1.6rem] xl:text-[1.7rem] 2xl:text-[1.8rem]
                ">
                    Get In Touch
                </span>
                <p className="
                    text-[1.1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                    mt-[0.5rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                    text-[#363636]
                ">
                    You’ll be heard by people who care and respond. <br /> Get in touch with our team.
                </p>
                <form action="" className="
                    contact-form
                    mt-[2rem] sm:mt-[2.5rem] lg:mt-[2.3rem] xl:mt-[2.5rem] 2xl:mt-[2.7rem]
                ">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" name="name" id="name" required />
                    <label htmlFor="email">Email Id</label>
                    <input type="email" name="email" id="email" required />
                    <label htmlFor="msg">Message</label>
                    <textarea name="message" id="msg" required></textarea>
                    <button type="submit" className="
                        bg-[#becb0c] hover:bg-[#aeba05] text-[#fff]
                        py-[0.6rem] sm:py-[1rem] lg:py-[0.8rem] xl:py-[0.9rem] 2xl:py-[1rem]
                        px-[1.3rem] sm:px-[3rem] lg:px-[2.6rem] xl:px-[2.8rem] 2xl:px-[3rem]
                        text-[1.15rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                        rounded-full transition
                    ">
                        Send Message
                    </button>
                </form>
            </div>
        </>
    )
}

export default ContactForm