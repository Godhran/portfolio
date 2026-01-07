import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Gudetama from "../../components/animations/Gudetama/Gudetama";
import SelfPortrait from "../../components/animations/SelfPortrait/SelfPortrait";
import WoahYouGoBigGuy from "../../components/animations/WoahYouGoBigGuy/WoahYouGoBigGuy";
import NavBar from "../../components/structural/NavBar/NavBar";
import Footer from "../../components/structural/Footer/Footer";
import { MasonryGallery } from "../../components/sections/Gallery/Gallery";
import { RecentProjects } from "../../components/sections/RecentProjects/RecentProjects";
import { WebApps } from "../../components/sections/WebApps/WebApps";
import { AboutMe } from "../../components/sections/AboutMe/AboutMe";
import { defaultColourScheme } from "../../styles/colours.constants";

export const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      id="app"
      className="pt-5"
      style={{ backgroundColor: defaultColourScheme.light }}
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
      <Gudetama />
      <Footer />
    </div>
  );
};
