import { Image } from "./image";
import React from "react";
import { useTranslation } from "react-i18next";
import '../components css/portfolio.css';

export const Gallery = (props) => {
  const { t } = useTranslation(); // Hook to access translations

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>{t("gallery.title")}</h2> {/* Access translation using t() */}
          <p>{t("gallery.description")}</p> {/* Access translation using t() */}
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : t("gallery.loading")} {/* Display loading translation */}
          </div>
        </div>
      </div>
    </div>
  );
};
