import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    const sections = gsap.utils.toArray(".stack-section");

    sections.forEach((section, index) => {
      const nextSection = sections[index + 1];
      if (!nextSection) return;

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        endTrigger: nextSection,
        end: "top top",
        pin: true,
        pinSpacing: false,
        scrub: true,
      });
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <>
      <section className="stack-section bg-one">
        <div className="content">
          <h1>Section One</h1>
        </div>
      </section>

      <section className="stack-section bg-two">
        <div className="content">
          <h1>Section Two</h1>
        </div>
      </section>

      <section className="stack-section bg-three">
        <div className="content">
          <h1>Section Three</h1>
        </div>
      </section>

      <section className="stack-section bg-four">
        <div className="content">
          <h1>Section Four</h1>
        </div>
      </section>
    </>
  );
};

export default Home;