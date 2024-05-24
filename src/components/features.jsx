import React from "react";
import { useTranslation } from "react-i18next";
import '../components css/feature.css';

export const Features = (props) => {
  const { t } = useTranslation(); // Hook to access translations

  return (
    <div id="features" className="text-center" >
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>{t("features.title")}</h2> {/* Access translation using t() */}
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3" style={{ marginBottom: "20px" }}>
                  {" "}
                  <i className={d.icon} style={{ fontSize: "24px", alignContent:"center" }}></i>
                  <h3 style={{ marginTop: "10px", marginBottom: "10px" }}>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : t("features.loading")} {/* Display loading translation */}
        </div>
      </div>
    </div>
  );
};
