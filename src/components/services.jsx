import React from "react";

export const Services = (props) => {
  return (
    <div
      id="services"
      className="text-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${process.env.PUBLIC_URL}/img/background.png)`,
        backgroundSize: "100% auto", // Stretch only in width
        backgroundPosition: "center",
        height: "100vh",
        color: "#fff",
        padding: "50px 0",
      }}
    >
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            Explore the services we offer to enhance your sports experience.
          </p>
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
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
