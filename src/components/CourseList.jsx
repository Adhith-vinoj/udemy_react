import React from "react";
import info from "./img/info.svg";
import "./Course.css";

const CourseList = ({ RelatedItems }) => {
  return (
    <div className="related-search">
      <div className="related">
        <span className="ud-lg">Related searches</span>
        <img src={info} alt="" />
      </div>
      <div className="related-srh-btn">
        
        {RelatedItems.map((lists) => 
        <div className="anger-serach">
          <button className="small-btn">
            <span className="small-list">{lists.items}</span>
          </button>
        </div>
        )}

      </div>
      
    </div>
    
  );
};


export default CourseList;



























