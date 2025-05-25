import React from 'react'
import star from "./img/star5.svg";


const CardComponent = ({courses}) => {
  return (
    <>
      <div className="poper-module">
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
    </>
  )
}

export default CardComponent
