import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook
import '../components css/contact.css';

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const { t } = useTranslation(); // Hook to access translations

  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.target,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>{t("contact.title")}</h2> {/* Translate title */}
                <p>
                  {t("contact.formInstructions")} {/* Translate form instructions */}
                </p>
              </div>
              <form name="sentMessage" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder={t("contact.namePlaceholder")}
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder={t("contact.emailPlaceholder")}
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder={t("contact.messagePlaceholder")}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-custom btn-lg">
                  {t("contact.sendButton")} {/* Translate button text */}
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>{t("contact.contactInfoTitle")}</h3> {/* Translate title */}
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> {t("contact.addressLabel")} {/* Translate label */}
                </span>{" "}
                {props.data ? props.data.address : t("contact.loading")} {/* Translate loading text */}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> {t("contact.phoneLabel")} {/* Translate label */}
                </span>{" "}
                {props.data ? props.data.phone : t("contact.loading")} {/* Translate loading text */}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> {t("contact.emailLabel")} {/* Translate label */}
                </span>{" "}
                {props.data ? props.data.email : t("contact.loading")} {/* Translate loading text */}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; {new Date().getFullYear()} SportLinker
          </p>
        </div>
      </div>
    </div>
  );
};
