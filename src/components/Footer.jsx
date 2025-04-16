import React from "react";
import "./Footer.css";
import Web from "./Web";
import About from "./About";

const skillList = [
  { skill: "Certification by issuer" },
  { skill: "Certificaation by Skill" },
  { skill: "Web Development" },
  { skill: "IT Certifications" },
  { skill: "Leadership" },
  { skill: "Data Science" },
  { skill: "Communcation" },
  { skill: "Business Analytics & Inteligence" },
];

const AboutUs = [
  { type: "About us" },
  { type: "Careers" },
  { type: "Contact us" },
  { type: "Blog" },
  { type: "Investors" },
];

const App = [
  { ud: "Get the app" },
  { ud: "Teach on Udemy" },
  { ud: "Plans and Pricing" },
  { ud: "Affiliate" },
  { ud: "Help and Support" },
];

const lang = [{ site: "Udemy Business" }];

const SiteMap = [
  { acces: "Accessibility statement" },
  { acces: "Privacy policy" },
  { acces: "Sitemap" },
  { acces: "Terms" },
];

const Footer = () => {
  return (
    <div className="ud-footer">
      <div className="udfooter-section">
        <div className="teach-sec">
          <p className="head">Teach the world online</p>
          <div className="teach-ud">
            Create an online video course, reach students across the globe, and
            earn money
          </div>
        </div>
        <div className="ud-banner">
          <button className="teach-btn">Teach on Udemy</button>
        </div>
      </div>
      <div className="udfooter-section">
        <div className="notice-module">
          <span className="top">
            Top companies choose Udemy Business to build in-demand career
            skills.
          </span>
        </div>
        <div className="footer-images">
          <img
            src="	https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg"
            alt=""
          />
          <img
            src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg"
            alt=""
          />
          <img
            src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg"
            alt=""
          />
          <img
            src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg"
            alt=""
          />
        </div>
      </div>
      <Web skillList={skillList} />
      <About AboutUs={AboutUs} App={App} lang={lang} SiteMap={SiteMap} />
    </div>
  );
};

export default Footer;
