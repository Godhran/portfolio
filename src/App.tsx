import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import "./App.css";
import { Container } from "./App.style";
import NavBar from "./components/navigation/NavBar";
import AboutSection from "./components/sections/AboutSection";
import RecentProjectsSection from "./components/sections/RecentProjectsSection";
import Footer from "./components/structural/Footer";
import MiscProjectsPanel from "./components/structural/MiscProjectsPanel";
import { usePortfolioContext } from "./context";
import Gudetama from "./components/animations/Gudetama";

const App = () => {
  const { minimalMode } = usePortfolioContext();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container minimalMode={minimalMode}>
      <NavBar />
      <AboutSection />
      <RecentProjectsSection />
      <MiscProjectsPanel />
      <Gudetama />
      <Footer />
    </Container>
  );
};

export default App;
