import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import MyNavbar from "./components/Navbar";

const App = () => {

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

  return (
    <>
      {/* <PageTitle /> */}
      <MyNavbar />
      <Outlet />
      {/* <Footer /> */}
      {/* <ScrollToTop /> */}
    </>
  );
};

export default App;