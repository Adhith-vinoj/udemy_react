import React, { useEffect, useState } from "react";
import "./Body.css";
import Filter from "./Filter";
import CardComponent from "./CardComponent";

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
        {filterData.map((courses) => (
          <CardComponent   courses={courses} />
        ))}
        </div>
       
      </div>
    </>
  );
};

export default BodyContent;


