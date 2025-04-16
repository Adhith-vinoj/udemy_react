import React, { useActionState, useEffect, useState } from "react";
import "./Body.css";
import down from "./img/downarow.svg";
import close from "./img/close.svg";
import star from "./img/star5.svg";

const Filter = ({ closing, highRatedCourse, highLanguage, lowPrice }) => {
  const [toggle, setToggle] = useState(false);
  const [lang, setLang] = useState(false);
  const [price, setPrice] = useState(false);
  const [selectedRating, setSelectedRating] = useState("4.5");

  useEffect(() => {
    highRatedCourse(4.5, 4.8);
  }, []);

  const toggleSection = () => {
    setToggle(!toggle);
  };

  const languageSection = () => {
    setLang(!lang);
  };

  const priceSection = () => {
    setPrice(!price);
  };

  let handleSection = (e) => {
    e.stopPropagation();
  };

  const langSec = (e) => {
    e.stopPropagation();
  };

  const section = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className="presentation-filter">
        <div className="side-drawer-module">
          <div className="nav">
            <div className="side-drawer">
              <div className="filter-pad">
                <div className="filter-flex">
                  <span className="filter-span">10000 results</span>
                </div>
              </div>
              <div className="filter-marg">
                <div>
                  <div className="cert-filter">
                    <div className="label">
                      <span className="lab">
                        View certification prep courses only
                      </span>
                      <span className="switch"></span>
                    </div>
                  </div>

                  <div className="acording-pannels" onClick={toggleSection}>
                    <div className="panel-toggle">
                      <div className="pannel-head">
                        <button className="hd-btn">
                          <span className="Rating">Ratings</span>
                        </button>
                      </div>
                      <img src={down} alt="" />
                    </div>

                    {toggle && (
                      <div>
                        <div className="group-pannel" onClick={handleSection}>
                          <div className="group-pad">
                            <div className="group-flex">
                              <div className="group-label">
                                <input
                                  className="rd-btn"
                                  onChange={() => {
                                    setSelectedRating("4.5");
                                    highRatedCourse(4.5, 4.8);
                                  }}
                                  type="radio"
                                  name="ud-toggle"
                                  id="1"
                                  checked={selectedRating === "4.5"}
                                />
                                <span className="stars">
                                  <img src={star} alt="" />
                                </span>
                                <span className="num-star">4.5 & up</span>
                                <span className="num">(5,756)</span>
                              </div>
                              <div className="group-label">
                                <input
                                  className="rd-btn1"
                                  onChange={() => {
                                    setSelectedRating("4.0");
                                    highRatedCourse(4, 4.8);
                                  }}
                                  type="radio"
                                  name="ud-toggle"
                                  id="2"
                                  checked={selectedRating === "4.0"}
                                />
                                <span className="stars">
                                  <img src={star} alt="" />
                                </span>
                                <span className="num-star">4.0 & up</span>
                                <span className="num">(10,000)</span>
                              </div>
                              <div className="group-label">
                                <input
                                  className="rd-btn2"
                                  onChange={() => {
                                    setSelectedRating("3.5");
                                    highRatedCourse(3.5, 4.8);
                                  }}
                                  type="radio"
                                  name="ud-toggle"
                                  id="3"
                                  checked={selectedRating === "3.5"}
                                />
                                <span className="stars">
                                  <img src={star} alt="" />
                                </span>
                                <span className="num-star">3.5 & up</span>
                                <span className="num">(10,000)</span>
                              </div>
                              <div className="group-label">
                                <input
                                  className="rd-btn3"
                                  onChange={() => {
                                    setSelectedRating("3.0");
                                    highRatedCourse(3.0, 4.8);
                                  }}
                                  type="radio"
                                  name="ud-toggle"
                                  id="4"
                                  checked={selectedRating === "3.0"}
                                />
                                <span className="stars">
                                  <img src={star} alt="" />
                                </span>
                                <span className="num-star">3.0 & up</span>
                                <span className="num">(10,000)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="acording-pannels1" onClick={languageSection}>
                    <div className="panel-toggle">
                      <div className="pannel-head">
                        <button className="hd-btn">
                          <span className="Rating">Language</span>
                        </button>
                      </div>
                      <img src={down} alt="" />
                    </div>

                    {lang && (
                      <div className="group-pannels" onClick={langSec}>
                        <div className="group-pad">
                          <div className="group-flex">
                            <div className="group-label">
                              <input
                                className="rd-btn"
                                onChange={() => highLanguage("English")}
                                type="checkbox"
                                name="ud-toggle"
                                id="1"
                              />
                              <span className="eng">English</span>
                              <span className="num">(7,675)</span>
                            </div>
                            <div className="group-label">
                              <input
                                className="rd-btn"
                                onChange={() => highLanguage("Spanish")}
                                type="checkbox"
                                name="ud-toggle"
                                id="1"
                              />
                              <span className="eng">Spanish</span>
                              <span className="num">(5,756)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="acording-pannels2" onClick={priceSection}>
                    <div className="panel-toggle">
                      <div className="pannel-head">
                        <button className="hd-btn">
                          <span className="Rating">Price</span>
                        </button>
                      </div>
                      <img src={down} alt="" />
                    </div>

                    {price && (
                      <div className="group-pannels-sec" onClick={section}>
                        <div className="group-pad">
                          <div className="group-flex">
                            <div className="group-label">
                              <input
                                className="rd-btn"
                                onChange={() => lowPrice("paid")}
                                type="checkbox"
                                name="ud-toggle"
                                id="1"
                              />
                              <span className="eng">Paid</span>
                              <span className="num">(10,000)</span>
                            </div>
                            <div className="group-label">
                              <input
                                className="rd-btn"
                                onChange={() => lowPrice("free")}
                                type="checkbox"
                                name="ud-toggle"
                                id="1"
                              />
                              <span className="eng">Free</span>
                              <span className="num">(1,883)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="fil-close-btn" onClick={closing}>
            <img src={close} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Filter;
