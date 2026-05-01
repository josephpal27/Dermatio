const safetyData = [
  {
    title: "Non-irritating",
    desc: "Patch tested at 10% concentration",
  },
  {
    title: "Non-sensitising",
    desc: "HRIPT confirmed",
  },
  {
    title: "Non-phototoxic",
    desc: "3T3 NRU tested",
  },
  {
    title: "No genotoxicity",
    desc: "AMES test confirmed on pure extract",
  },
  {
    title: "Biodegradable and ecologically safe",
    desc: "aquatoxicity assessed",
  },
]

const Safety = () => {
  return (
    <>
      <section className="
        px-[1rem] sm:px-[5%] lg:px-[7%]
        mb-0 sm:mb-[2rem] lg:mb-[1.9rem] xl:mb-[2.2rem] 2xl:mb-[2.5rem]
      ">
        <h6 className="
          text-[1.8rem] sm:text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem] leading-[1]
        " data-aos="fade-up">
          Safety & Sustainability
        </h6>
        <div className="
          mt-[2rem] sm:mt-[2rem] lg:mt-[2.4rem] xl:mt-[2.8rem] 2xl:mt-[3rem]
          p-[1rem] sm:p-[2rem] lg:p-[2.4rem] xl:p-[2.8rem] 2xl:p-[3rem]
          bg-[#fbf4ea] rounded-[15px] sm:rounded-[20px] lg:rounded-[20px] xl:rounded-[25px] 2xl:rounded-[30px]
        ">
          <b className="
            text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem]
            text-[#151515]
          " data-aos="fade" data-aos-once="true">
            Tazman Pepper™ has undergone extensive safety testing and carries an excellent safety profile:
          </b>
          <div className="mt-[1.5rem] sm:mt-[1.5rem] lg:mt-[1.8rem] xl:mt-[1.9rem] 2xl:mt-[2rem]">
            {safetyData.map((item, index) => {
              return (
                <p key={index} className="
                  text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                  mb-[0.7rem] sm:mb-[0.5rem] lg:mb-[0.4rem] xl:mb-[0.45rem] 2xl:mb-[0.5rem]
                  text-[#363636] last:mb-0
                " data-aos="fade" data-aos-once="true">
                  <b>{item.desc}</b> - {item.desc}
                </p>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Safety
