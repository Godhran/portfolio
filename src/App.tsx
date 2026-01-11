import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Page404 } from "./pages/Page404/Page404";
import { defaultColourScheme } from "./styles/colours.constants";
import { schemeToCssVars } from "./styles/colours.utils";
import { usePortfolioStore } from "./stores/usePortfolioStore";

const App = () => {
  const colourScheme = usePortfolioStore((s) => s.colourScheme);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  return (
    <div
      style={{
        backgroundColor: defaultColourScheme.light,
        color: defaultColourScheme.dark,
        ...schemeToCssVars(colourScheme),
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
};

export default App;
