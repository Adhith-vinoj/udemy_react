import React, { useEffect, useState } from "react";
import "./Body.css";
import star from "./img/star5.svg";
import Filter from "./Filter";

const BodyContent = ({ setFilter, filter }) => {
  const [dataItem, setData] = useState([]);

  const [filterData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch("Products.json");
      const data = await res.json();
      setData(data);     
      setFilteredData(data);
    };
    fetchPost();
  }, []);

  const filterFunction = (minRating, maxRating) => {
    const highRatedCourse = dataItem.filter(
      (course) => course.rating >= minRating && course.rating <= maxRating
    );
    setFilteredData(highRatedCourse);
  };

  const languageFilter = (lang) => {
    const highLanguage = dataItem.filter((course) => course.language === lang);
    setFilteredData(highLanguage);
  };

  const priceFilter = (items) => {
    const lowPrice = dataItem.filter((course) => course.type === items);
    setFilteredData(lowPrice);
  };

  return (
    <>
      <div className="free">
        <div className="filter-par">
          {filter && (
            <Filter
              closing={() => setFilter(false)}
              highRatedCourse={filterFunction}
              highLanguage={languageFilter}
              lowPrice={priceFilter}
            />
          )}
        </div>
        <div className="map-parnt">
        {filterData.map((courses, title) => (
          <div key={title} className="poper-module">
            <div className="poper-section">
              <div className="query-card">
                <div className="query-image">
                  <img src={courses.img} alt="" />
                </div>
                <div className="course-card-price">
                  <div className="course-title">
                    <span className="java-lang">{courses.title}</span>
                  </div>
                  <p className="par-head">{courses.content}</p>
                  <div className="text-us">
                    <span className="txt">{courses.name}</span>
                  </div>
                  <div className="ratings-section">
                    <span className="num-rate">{courses.rating}</span>
                    <img src={star} alt="" />
                    <span className="views">{courses.reviews}</span>
                  </div>
                  <div className="hours-section">
                    <div className="hours-purpose">
                      <span className="total">{courses.hours} .</span>
                      <span className="total">{courses.lecture} .</span>
                      <span className="total">{courses.levels} .</span>
                    </div>
                  </div>
                  <div className="base-price">
                    <div className="base-sp">
                      <span className="rate">{courses.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
       
      </div>
    </>
  );
};

export default BodyContent;










console.log




