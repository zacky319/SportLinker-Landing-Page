import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n"; // Import the i18n instance
import "../components css/navigation.css";

export const Navigation = (props) => {
  const { t } = useTranslation(); // Hook to access translations

  const [currentLanguage, setCurrentLanguage] = useState(i18n.language); // State to store current language

  const changeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "vi" : "en"; // Toggle between English and Vietnamese
    i18n.changeLanguage(newLanguage); // Change language using i18n instance
    setCurrentLanguage(newLanguage); // Update current language state
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          {/* Logo */}
          <a className="navbar-brand page-scroll" href="#page-top">
            <img
              src="/img/logo.png"
              alt="SportLinker Logo"
              className="logo-img"
            />
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                {t("navigation.features")} {/* Access translation using t() */}
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                {t("navigation.about")}
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                {t("navigation.services")}
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                {t("navigation.gallery")}
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                {t("navigation.testimonials")}
              </a>
            </li>
            {/* <li>
              <a href="#team" className="page-scroll">
                {t("navigation.team")}
              </a>
            </li> */}
            <li>
              <a href="#contact" className="page-scroll">
                {t("navigation.contact")}
              </a>
            </li>
            <li
              className="language-toggle-container"
              style={{
                textAlign: "center",
                paddingLeft: "4rem",
              }}
            >
              {" "}
              <button className="language-toggle" onClick={changeLanguage}>
                {currentLanguage === "en" ? "Tiếng Việt" : "English"}
              </button>
            </li>
          </ul>
        </div>
        {/* Language toggle button */}
      </div>
    </nav>
  );
};
