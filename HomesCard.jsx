import React from "react";
import { homeData } from "../../dummyData";
import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import "./home.css";

export const HomeCard = ({
  item: { id, cover, name, ratting, time, desc, starring, genres, video },
}) => {
  const location = useLocation();
  return (
    <>
      <div className="box">
        <div className="coverImage">
          <img src={cover} alt="movie img" />
        </div>
        <div className="content flex">
          <div className="details row ">
            <h1>{name}</h1>
            <div className="rating flex">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>

            <label>{ratting}</label>

            <label>{time}</label>
          </div>
          <p>{desc}</p>
          <div className="cast">
            <h4>
              <span>Starring :</span>
              {starring}
            </h4>

            <h4>
              <span>Genres:</span>
            </h4>
            <div className="genrs">{genres}</div>
          </div>
          <Link to={"/SinglePage/${id}"}>
            <button className="primary-btn">
              <i className="fas fa-play"></i>Book Now
            </button>
            
          </Link>
        </div>
      </div>
    </>
  );
};
