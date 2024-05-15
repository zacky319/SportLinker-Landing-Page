import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const { i18n } = useTranslation();
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      let lang = i18n.language; // Get the current language
      let jsonData;

      // Load data based on language
      if (lang === "vi") {
        jsonData = await import("./data/vidata.json");
      } else {
        jsonData = await import("./data/data.json");
      }

      setLandingPageData(jsonData.default);
    };

    fetchData();
  }, [i18n.language]); // Re-fetch data when language changes

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      {/* <Team data={landingPageData.Team} /> */}
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
