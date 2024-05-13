import React from "react";
import { useTranslation } from "react-i18next";
import '../components css/team.css';

export const Team = (props) => {
  const { t } = useTranslation(); // Hook to access translations

  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>{t("team.title")}</h2> {/* Access translation using t() */}
          <p>
            {t("team.description")}
          </p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : t("team.loading")} {/* Display loading translation */}
        </div>
      </div>
    </div>
  );
};
