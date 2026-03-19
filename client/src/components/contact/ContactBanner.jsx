
const ContactBanner = () => {
    return (
        <>
            <section className="
                relative
            ">
                <img
                    src="/images/banners/contact-banner.avif"
                    alt="Product Details Banner"
                    loading="eager"
                    className="
                        w-full h-[120px] sm:h-auto
                        rounded-b-[15px] sm:rounded-b-[20px] lg:rounded-b-[20px] xl:rounded-b-[25px] 2xl:rounded-b-[30px]
                    "
                />
                <div className="
                    absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-[#fff]
                    px-[1rem] sm:px-[5%] lg:px-[7%]
                ">
                    <h1 className="
                        text-[2rem] sm:text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem]
                    " data-aos="fade-up">
                        Contact Us
                    </h1>
                    <p className="
                        w-[70%] text-center hidden sm:block
                        text-[1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                        mt-[1.2rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                    " data-aos="fade">
                        Your skin deserves the right care, and sometimes that starts with asking a question. Whether you’re looking for product guidance, need help with an order, or want to understand which Dermatio formula is right for you or your child, our team is here for you.
                    </p>
                </div>
            </section>
            
            <p className="
                text-[1.1rem] mt-[1rem] px-[1rem] block sm:hidden
            ">
                Your skin deserves the right care, and sometimes that starts with asking a question. Whether you’re looking for product guidance, need help with an order, or want to understand which Dermatio formula is right for you or your child, our team is here for you.
            </p>
        </>
    )
}

export default ContactBanner