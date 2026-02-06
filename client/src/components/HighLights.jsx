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
                flex
                justify-between
                flex-wrap
                py-[3rem]
                px-[7%]
                mt-[1rem]
            ">
                {
                    highLightsData.map((item, index) => {
                        return (
                            <div key={index} className="
                                w-[23%]
                                flex
                                flex-col
                                items-center
                            ">
                                <img 
                                    src={item.image} 
                                    alt={item.title}
                                    className="
                                        w-[60px]
                                        h-[60px]
                                        object-contain
                                    "
                                />
                                <span dangerouslySetInnerHTML={{ __html: item.title }} className="
                                    text-[#363636]
                                    text-[1.6rem]
                                    mt-[1.5rem]
                                    text-center
                                    leading-[1.3]
                                ">
                                </span>

                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}

export default HighLights;
