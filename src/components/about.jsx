import React from "react";
import { useTranslation } from "react-i18next";
import '../components css/about.css'

export const About = (props) => {
  const { t } = useTranslation(); // Hook to access translations

  const downloadLinkStyle = {
    display: "inline-flex",
    alignItems: "center",
    marginRight: "10px",
    marginBottom: "10px",
    color: "#fff",
    backgroundColor: "#5ca9fb",
    border: "1px solid #5ca9fb",
    padding: "15px 25px", // Increase padding for better button appearance
    textDecoration: "none",
    borderRadius: "30px", // Increase border radius for rounded corners
    transition: "all 0.3s ease",
  };

  const iconStyle = {
    fontSize: "24px", // Increase icon size
    marginRight: "10px",
  };

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>{t("about.title")}</h2>
              <p>{props.data ? props.data.paragraph : t("about.loading")}</p>
              <h3>{t("about.whyChooseUs")}</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : t("about.loading")}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : t("about.loading")}
                  </ul>
                </div>
              </div>
              <div className="download-links">
                <a href="#" className="btn btn-custom" style={downloadLinkStyle}>
                  {t("about.downloadForIOS")} <i className="fa fa-apple"></i>
                </a>
                <a href="#" className="btn btn-custom" style={downloadLinkStyle}>
                  {t("about.downloadForAndroid")} <i className="fa fa-android"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
