import highLight1 from '../assets/images/icons/doctor.png';
import highLight2 from '../assets/images/icons/injection.png';
import highLight3 from '../assets/images/icons/clinic.png';
import highLight4 from '../assets/images/icons/safe.png';

let highLightsData = [
    {
        id: 1,
        image: highLight1,
        title: "Dermatologist <br/> Guide",
    },
    {
        id: 2,
        image: highLight2,
        title: "Steroid-Free <br/> & Gentle",
    },
    {
        id: 3,
        image: highLight3,
        title: "Clinically <br/> Active Relief",
    },
    {
        id: 4,
        image: highLight4,
        title: "Safe for <br/> All Ages",
    },
]

const HighLights = () => {
    return (
        <>
            <section className="
                flex justify-between flex-wrap
                py-[3rem] sm:py-[2rem] lg:py-[2.2rem] xl:py-[2.7rem] 2xl:py-[3rem]
                px-[7%]
                mt-[1rem] sm:mt-[1rem] lg:mt-[0.6rem] xl:mt-[0.8rem] 2xl:mt-[1rem]
            ">
                {
                    highLightsData.map((item, index) => {
                        return (
                            <div key={index} className="
                                w-[23%]
                                flex flex-col items-center
                            ">
                                <img 
                                    src={item.image} 
                                    alt={item.title}
                                    className="
                                        w-[60px] sm:w-[50px] lg:w-[50px] xl:w-[55px] 2xl:w-[60px]
                                        h-[60px] sm:h-[50px] lg:h-[50px] xl:h-[55px] 2xl:h-[60px]
                                        object-contain
                                    "
                                />
                                <span dangerouslySetInnerHTML={{ __html: item.title }} className="
                                    text-[#363636] text-center leading-[1.3]
                                    text-[1.6rem] sm:text-[1.6rem] lg:text-[1.3rem] xl:text-[1.5rem] 2xl:text-[1.6rem]
                                    mt-[1.5rem] sm:mt-[1.5rem] lg:mt-[1.1rem] xl:mt-[1.3rem] 2xl:mt-[1.5rem]
                                "/>

                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}

export default HighLights;
