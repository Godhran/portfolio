import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import "./App.css";
import { Main } from "./App.style";
import IMakeThings from "./components/animations/IMakeThings";
import NavBar from "./components/navigation/NavBar";
import AboutSection from "./components/sections/AboutSection";
import RecentProjectsSection from "./components/sections/RecentProjectsSection";
import Footer from "./components/structural/Footer";
import MiscProjectsPanel from "./components/structural/MiscProjectsPanel";
import { usePortfolioContext } from "./context";

const App = () => {
  const { minimalMode } = usePortfolioContext();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Main minimalMode={minimalMode}>
      <NavBar />
      <AboutSection />
      <RecentProjectsSection />
      <IMakeThings />
      <MiscProjectsPanel />
      <Footer />
    </Main>
  );
};

export default App;
