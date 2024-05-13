import React from "react";
import '../components css/feature.css'
export const Features = (props) => {
  return (
    <div id="features" className="text-center" >
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Features</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3" style={{ marginBottom: "20px" }}>
                  {" "}
                  <i className={d.icon} style={{ fontSize: "24px" }}></i>
                  <h3 style={{ marginTop: "10px", marginBottom: "10px" }}>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
