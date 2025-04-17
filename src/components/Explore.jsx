import React from "react";
import "./explore.css";
import arow from "./img/sidearow.svg";

const Explore = ({ Browse, Browser, BrowserList }) => {
  return (
    <>
      <div className="context-dropdown">
        <div className="animation-wrapper">
          <div className="popover">
            <div className="listmenu-flex">
              <div className="js-browse">
                {Browse.map((map) => (
                  <h2 className="list-menu">{map.title}</h2>
                ))}
                <ul className="menu-module">
                  {Browser.map((item) => (
                    <li>
                      <div className="small">
                        <span className="certi">{item.task}</span>
                        <img src={arow} alt="" />
                      </div>
                    </li>
                  ))}
                </ul>
                <ul className="items-ul">
                  {BrowserList.map((listItem) => (
                    <li>
                      <div className="small">
                        <span className="certi">{listItem.list}</span>
                        <img src={arow} alt="" />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;






 



