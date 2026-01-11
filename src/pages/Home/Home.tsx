import "aos/dist/aos.css";
import React from "react";
import SelfPortrait from "../../components/animations/SelfPortrait/SelfPortrait";
import WoahYouGoBigGuy from "../../components/animations/WoahYouGoBigGuy/WoahYouGoBigGuy";
import NavBar from "../../components/structural/NavBar/NavBar";
import Footer from "../../components/structural/Footer/Footer";
import { MasonryGallery } from "../../components/sections/Gallery/Gallery";
import { RecentProjects } from "../../components/sections/RecentProjects/RecentProjects";
import { WebApps } from "../../components/sections/WebApps/WebApps";
import { AboutMe } from "../../components/sections/AboutMe/AboutMe";
import { usePortfolioStore } from "../../stores/usePortfolioStore";
import { FooterAnimation } from "../../components/sections/FooterAnimation/FooterAnimation";

export const Home = () => {
  // useEffect(() => {
  //   AOS.init({ duration: 1000
  // }, []);

  const colourScheme = usePortfolioStore((s) => s.colourScheme);

  return (
    <div
      id="app"
      className="pt-5 bg-[var(--c-light)] text-[var(--c-dark)] min-h-screen"
    >
      <NavBar />
      <AboutMe animation={<SelfPortrait />} id={"About"} />
      <RecentProjects
        header="Latest Projects"
        animation={<WoahYouGoBigGuy />}
        id={"Projects"}
        rightToLeft
      />
      <WebApps id={"WebApps"} />
      <MasonryGallery id={"Gallery"} />
      <FooterAnimation />
      <Footer />
    </div>
  );
};
