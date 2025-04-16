import React from "react";
import "./Menu.css";
import arow from "./img/sidearow.svg";
import net from "./img/internet.svg";
import close from "./img/close.svg";

const MenuList = ({ MostItems, MoreSec, closeList }) => {
  return (
    <div className="presentation">
      <div className="pres-draw">
        <div class="mobile-nav-side">
          <ul className="ud-unstyle">
            <li>
              <button className="btn-prof">
                <div className="ud-list-item">
                  <div className="welcome-section">
                    <span className="arial">AD</span>
                    <span className="prof-name">
                      <span className="prof">Hi, Adhith Vinoj</span>
                      <p className="welcome">Welcome back</p>
                    </span>
                  </div>
                </div>
                <img src={arow} alt="" />
              </button>
            </li>
          </ul>
          <h2 className="ud-heading">Learn</h2>
          <ul className="block-list">
            <li>
              <div className="learn-btn">
                <span className="learn">My learning</span>
              </div>
            </li>
          </ul>
          <ul className="block-lists">
            <li>
              <div className="learn-btn">
                <span className="learn">Certification preparation</span>
                <img src={arow} alt="" />
              </div>
            </li>
          </ul>
          <h2 className="popular">Most popular</h2>
          <ul className="nav-sec-list">
            {MostItems.map((item, index) => (
              <li key={index}>
                <button className="side-btn">
                  <span className="tech">{item.title}</span>
                  <img src={arow} alt="" />
                </button>
              </li>
            ))}
          </ul>
          <h2 className="popular">More from udemy</h2>
          <ul className="nav-sec-list">
            {MoreSec.map((text) => (
              <li>
                <button className="side-btn">
                  <span className="tech">{text.name}</span>
                </button>
              </li>
            ))}
          </ul>
          <div className="nav-item">
            <button className="lang">
              <img src={net} alt="" />
              <span className="eng">English</span>
            </button>
          </div>
        </div>
        <button className="close-btn" onClick={closeList}>
          <img src={close} alt="" />
        </button>
      </div>
    </div>
  );
};

export default MenuList;
