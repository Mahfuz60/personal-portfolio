import React from "react";
import pic1 from "../../images/pic4.png";
import Typical from "react-typical";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import resume from "../../images/mahfuz-resume.pdf";

const HeaderMain = () => {
  return (
    <section className="container">
      <div className="row">
        <div className="col-lg-6  col-sm-12">
          <div className="header-content">
            <div className="header-section">
              <ul className="header-ul">
                <li>
                  <a target="_blank" rel="noreferrer" href="https://github.com/Mahfuz60">
                    <FaGithub className="headerIcon"></FaGithub>
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mahfuz-alam60/">
                    {" "}
                    <FaLinkedin className="headerIcon"></FaLinkedin>
                  </a>
                </li>

                <li>
                  <a target="_blank" rel="noreferrer" href="https://twitter.com/mahfuz_alam60">
                    <FaTwitter className="headerIcon"></FaTwitter>
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer" href="mailto:mahfuzuralam1996@gmail.com">
                    <FaEnvelope className="headerIcon"></FaEnvelope>
                  </a>
                </li>
              </ul>

              <h3>Hello there.... </h3>
              <h1>I am Mahfuz Alam </h1>
              <p className="type-effect">
                <Typical steps={["I Am Passionate Web Developer ", 2000, "Programmer ", 2000, "Web Developer", 2000]} loop={Infinity} wrapper="b" />
              </p>

              <button className="button btn-outline">
                <a target="_blank" rel="noreferrer" href={resume}>
                  Download Resume{" "}
                </a>
              </button>
              <button className="button btn-smart">
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mahfuz-alam60/">
                  Get In Touch
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className="header-img">
            <img src={pic1} alt=""  />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderMain;
