import React from "react";
import { useTranslation } from "react-i18next";
import '../components css/testimonials.css';

export const Testimonials = (props) => {
  const { t } = useTranslation(); // Hook to access translations

  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>{t("testimonials.title")}</h2> {/* Access translation using t() */}
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="testimonial">
                    <div className="testimonial-image">
                      {" "}
                      <img src={d.img} alt="" />{" "}
                    </div>
                    <div className="testimonial-content">
                      <p>"{d.text}"</p>
                      <div className="testimonial-meta"> - {d.name} </div>
                    </div>
                  </div>
                </div>
              ))
            : t("testimonials.loading")} {/* Display loading translation */}
        </div>
      </div>
    </div>
  );
};
