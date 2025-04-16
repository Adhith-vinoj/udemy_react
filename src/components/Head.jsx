import menuBtn from "./img/menu.svg";
import srcBtn from "./img/search.svg";
import strBtn from "./img/store.svg";
import srch from "./img/srch.svg";
import React, { useState } from "react";
import "./Head.css";
import MenuList from "./MenuList";
import TabHead from "./TabHead";

const MostItems = [
  { title: "Web Development" },
  { title: "Mobile Development" },
  { title: "Game Devlopment" },
  { title: "Enterpreneurship" },
  { title: "Business Analytics & Intelligence" },
  { title: "Finance" },
  { title: "IT Certifications" },
  { title: "Personal Transformation" },
  { title: "Graphic Design & illustration" },
  { title: "Digittal Marketing" },
  { title: "All categories" },
];

const MoreSec = [
  { name: "Udemy Business" },
  { name: "Get the app" },
  { name: "Invite friends" },
  { name: "Help and Support" },
];

const Head = () => {
  const [taskBtn, setTaskBtn] = useState(false);

  const MenubtnSection = () => {
    setTaskBtn(!taskBtn);
  };

  return (
    <>
      <div className="ud-header-mobile">
        <div className="mobile-header">
          <button className="btn-medium" onClick={MenubtnSection}>
            {" "}
            <img src={menuBtn} alt="" />
          </button>

          <div className="space"></div>
          <div className="module-row">
            <div className="anger">
              <img
                className="ud-img"
                src="	https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
                alt=""
              />
            </div>
          </div>
          <button className="icon-btn">
            {" "}
            <img src={srcBtn} alt="" />
          </button>
          <button className="store-btn">
            <img src={strBtn} alt="" />
          </button>
        </div>
        {taskBtn && (
          <MenuList
            MostItems={MostItems}
            closeList={() => setTaskBtn(false)}
            MoreSec={MoreSec}
          />
        )}
      </div>
      <TabHead />
    </>
  );
};

export default Head;

