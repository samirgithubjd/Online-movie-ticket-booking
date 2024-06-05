import React from "react";
import { Link } from "react-router-dom";

export const Recomended = ({ item: { id, cover, name, time } }) => {
  return (
    <>
      <br />
      <Link to="/MovieTime">
        <div className="RecMovie">
          <div className="img">
            <img src={cover} alt="Movie img" />
          </div>
          <div className="text">
            <h3>{name}</h3>
            <button className="primary-btn">
              <i className="fa fa-play"></i>Book Now
            </button>
          </div>
        </div>
      </Link>
    </>
  );
};
