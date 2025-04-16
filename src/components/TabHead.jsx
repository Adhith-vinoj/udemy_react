import srch from "./img/srch.svg";
import "./Head.css";
import strBtn from "./img/store.svg";
import like from "./img/like.svg";
import React, { useState } from "react";
import Explore from "./Explore";
import Profile from "./Profile";
import bell from "./img/bell.svg";

const Browse = [{ title: "Browse Certifications" }];

const Browser = [{ task: "Certification preparation" }];

const BrowserList = [
  { list: "Devlopment" },
  { list: "Business" },
  { list: "Finance & Accounting" },
  { list: "IT & Software" },
  { list: "Office Productivity" },
  { list: "Personal Development" },
  { list: "Design" },
  { list: "Lifestyle" },
  { list: "Photography & video" },
  { list: "Health & Fitness" },
  { list: "Music" },
  { list: "Teaching & Academics" },
];

const LearningSection = [
  { course: "My learning" },
  { course: "My cart" },
  { course: "Wishlist" },
  { course: "Teach on Udemy" },
];

const Notification = [{ sign: "Notifications" }, { sign: "Messages" }];

const Payment = [
  { course: "Account settings" },
  { course: "Payment methods" },
  { course: "Subscription" },
  { course: "Udemy credits" },
  { course: "Purchase history" },
];

const support = [{ help: "Help and Support" }, { help: "Log out" }];

const TabHead = () => {
  const [browse, setBrowse] = useState(false);
  const [profile, setProfile] = useState(false);

  let mouseSection = () => {
    setBrowse(!browse);
  };

  let ProfileSection = () => {
    setProfile(!profile);
  };

  return (
    <>
      <header className="tab-head">
        <div className="desktop-head">
          <img
            src="	https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
            alt=""
          />
        </div>
        <div>
          className="nav-popper"
          onMouseOver={mouseSection}
          style={{ position: "relative" }}
        
          <button className="exp-btn">
            <span>Explore</span>
          </button>
          {browse && (
            <Explore
              Browse={Browse}
              Browser={Browser}
              BrowserList={BrowserList}
            />
          )}
        </div>
        <div className="lang-en">
          <div className="form-action">
            <input className="jsa" type="text" placeholder="javascript" />
            <button className="search-side-btn">
              <img src={srch} alt="" />
            </button>
          </div>
        </div>
        <div className="desk-poper">
          <div className="desk-href">
            <span>Udemy Business</span>
          </div>
        </div>
        <div className="desktops-poper">
          <div className="desk-href">
            <span>Teach on Udemy</span>
          </div>
        </div>

        <div className="desktop-poper">
          <div className="desk-href">
            <span>My learning</span>
          </div>
        </div>

        <div className="like-section">
          <div className="craft">
            <img src={like} alt="" />
          </div>
        </div>

        <div className="store-item ">
          <div className="craft">
            <img src={strBtn} alt="" />
          </div>
        </div>

        <div className="ring-btn ">
          <div className="craft">
            <img src={bell} alt="" />
          </div>
        </div>

        <div className="profs" onMouseOver={ProfileSection}>
          <span className=" jm">AD</span>
          {profile && (
            <Profile
              LearningSection={LearningSection}
              Notification={Notification}
              Payment={Payment}
              support={support}
            />
          )}
        </div>
      </header>
    </>
  );
};

export default TabHead;
