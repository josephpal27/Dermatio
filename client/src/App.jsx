import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import MyNavbar from "./components/Navbar";
import Footer from "./components/footer";
import ScrollToTop from './components/ScrollToTop';
import PageTitle from './components/PageTitle';
import AOS from "aos";

const App = () => {

  // Lenis Init
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);


  // AOS Init
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: true,
    });
  }, []);

  // Refresh AOS on scroll
  useEffect(() => {
    const handleScroll = () => {
      AOS.refresh();
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <PageTitle />
      <MyNavbar />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default App;