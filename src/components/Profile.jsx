import React from "react";
import "./explore.css";
import net from "./img/internet.svg";
import bsy from "./img/busy.svg";

const Profile = ({ LearningSection, Notification, Payment, support }) => {
  return (
    <>
      <div className="contexts-dropdown">
        <div className="animation-wrapper">
          <div className="popover">
            <div className="head-menu">
              <div className="user-profile">
                <span className="arial">AD</span>
                <div className="drop">
                  <div>
                    <span className="name">Adhith Vinoj</span>
                    <p className="mail">adhithvinoj03@gmail.com</p>
                  </div>
                </div>
              </div>
              <ul className="ud-list">
                {LearningSection.map((lists) => (
                  <li>
                    <div className="btn-neutral">
                      <span>{lists.course}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <ul className="ud-lists">
                {Notification.map((items) => (
                  <li>
                    <div className="btn-neutral">
                      <span>{items.sign}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <ul className="ud-lists">
                {Payment.map((block) => (
                  <li>
                    <div className="btn-neutral">
                      <span>{block.course}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <ul className="ud-lists">
                <li>
                  <button className="lang-btn">
                    <div className="list">
                      <div className="list-flex">
                        <span>internet</span>
                        <span>net</span>
                      </div>
                    </div>
                    <img src={net} alt="" />
                  </button>
                </li>
              </ul>
              <ul className="ud-lists">
                {support.map((last) => (
                  <li>
                    <div className="btn-neutral">
                      <span>{last.help}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="ud-bsy">
                <div>
                  <span className="ud-bs">Udemy Business</span>
                  <p className="paragraph">Bring learning yo uour company</p>
                </div>
                <img src={bsy} alt="" style={{ height: "24px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
