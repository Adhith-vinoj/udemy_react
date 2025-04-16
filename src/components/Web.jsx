import React from "react";
import "./Footer.css";
import downarow from "./img/downarow.svg";

const Web = ({ skillList }) => {
  return (
    <div className="content-area-module">
      <div className="footer-area">
        <div className="structured-link">
          <div className="structured-heading">
            <span className="exp">Explore top skills and certifications</span>
          </div>
          <div className="hideon -desk">
            {skillList.map((skills) => (
              <div className="acording-pannel">
                <div className="according">
                  <button className="panel">
                    <span className="crt">{skills.skill}</span>
                  </button>
                  <img src={downarow} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web;
