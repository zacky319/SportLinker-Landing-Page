import React from "react";
import { useTranslation } from "react-i18next";
import '../components css/header.css';

export const Header = (props) => {
  const { t } = useTranslation(); // Hook to access translations

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {t("header.title")} {/* Access translation using t() */}
                  <span></span>
                </h1>
                <p>{t("header.paragraph")}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  {t("header.learnMore")}
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
