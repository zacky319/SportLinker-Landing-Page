import React from "react";
import { useTranslation } from "react-i18next";
import '../components css/services.css';

export const Services = (props) => {
  const { t } = useTranslation(); // Hook to access translations

  return (
    <div
      id="services"
      className="text-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${process.env.PUBLIC_URL}/img/background.png)`,
        backgroundSize: "cover", // Stretch only in width
        backgroundPosition: "center",
        color: "#fff",
        padding: "50px 0",
      }}
    >
      <div className="container">
        <div className="section-title">
          <h2>{t("services.title")}</h2> {/* Access translation using t() */}
          <p>{t("services.description")}</p> {/* Access translation using t() */}
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : t("services.loading")} {/* Display loading translation */}
        </div>
      </div>
    </div>
  );
};
