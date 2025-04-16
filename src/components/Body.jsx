import React, { useState } from "react";
import "./Body.css";
import filtered from "./img/filter.svg";
import CourseList from "./CourseList";
import leftarow from "./img/lefTArow.svg";
import dots from "./img/dots.svg";
import sidearow from "./img/sidearow.svg";
import BodyContent from "./BodyContent";

const RelatedItems = [
  { items: "the complete 2024 web development bootcamp" },
  { items: "web developer bootcamp" },
  { items: "coding bootcamp" },
  { items: "web development bootcamp" },
  { items: "hitesh" },
  { items: "react typescript" },
  { items: "modern javascript" },
  { items: "nextjs 14" },
];





const Body = () => {
  const [filter , setFilter] = useState(false);


  
  const filteredSection = () =>{
    setFilter(!filter)
   }


  return (
    <div className="main-container">
      <div className="header-content">
        <h1 className="head">10,000 results for "javascript"</h1>
      </div>

      <div className="course-directory">
        <div className="mobile-filter">
          <div className="filter-drawer">
            <div className="filter-container">
              <button className="fil-btn" onClick={filteredSection}>
                <img src={filtered} alt="" />
                <span className="fil">Filter</span>
              </button>

       
              
              <div className="ud-compact">
                <div className="ud-compact-form">
                  <div className="ud-form">
                    <select className="select">
                      <option value="relavence">Most Relevant</option>
                      <option value="most-reviewed">Most Reviewed</option>
                      <option value="highest-rated">Highest Rated</option>
                      <option value="newest">Newest</option>
                    </select>
                  </div>
                  <div className="sort">
                    <span className="srt">Sort by</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="course-hy-list">
            <BodyContent  filter = {filter} setFilter = {setFilter}/>
            <CourseList RelatedItems={RelatedItems} />
          </div> 

        </div>

        <div className="nav-module">
          <div className="secondry-btn">
            <img src={leftarow} alt="" />
          </div>
          <div className="numbers">1</div>
          <div className="numbers">2</div>
          <div className="numbers">3</div>
          <img src={dots} alt="" />
          <span className="num">500</span>
          <div className="secondry-btns">
            <img src={sidearow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;






