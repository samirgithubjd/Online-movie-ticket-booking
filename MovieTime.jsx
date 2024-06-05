import React from "react";
import { useState } from "react";
import { homeData } from "../../dummyData";
import "./movietime.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const MovieTime = () => {
 
  return (
    <>
      <br />
      <div className="text1">
        <div className="tbtn">
        <button type="button" class="btn btn-success">02/03<br />2024</button>&nbsp;&nbsp;
        <button type="button" class="btn btn-secondary">03/03<br />2024</button>&nbsp;&nbsp;
        <button type="button" class="btn btn-secondary">04/03<br />2024</button>&nbsp;&nbsp;
        <button type="button" class="btn btn-secondary">05/03<br />2024</button>&nbsp;&nbsp;
        </div>
        
        {/* {
          dummyData.map((dummyData,i) => {
            <div className="time" key={i}>
              <h2>{dummyData.name}</h2>
            </div>
          })
          
        } */}
      </div>
   

      <Link to="/SeatBook">
        {" "}
        <div className="container1">
          <div className="timebox">
            <div className="lnt">
              <div className="row">
                <div className="col-md-3">Cinepolis Vandana: Rajkot</div>
                <div className="col-md-3">
                  <button type="button" class="btn btn-outline-danger">
                    08:30 AM
                  </button>
                </div>
              </div>
            </div>
            <br />

            <div className="lnt">
              <div className="row">
                <div className="col-md-3">INOX: Rajkot R World</div>
                <div className="col-md-3">
                  <button type="button" class="btn btn-outline-danger">
                    11:30 AM
                  </button>
                </div>
              </div>
            </div>
            <br />

            <div className="lnt">
              <div className="row">
                <div className="col-md-3">Cosmoplex Multiplex: Rajkot</div>
                <div className="col-md-3">
                  <button type="button" class="btn btn-outline-success">
                    03:30 PM
                  </button>
                </div>
              </div>
            </div>
            <br />

            <div className="lnt">
              <div className="row">
                <div className="col-md-3">Cinepolis Vandana: Rajkot</div>
                <div className="col-md-3">
                  <button type="button" class="btn btn-outline-success">
                    08:30 PM
                  </button>
                </div>
              </div>
            </div>
            <br />

            <div className="lnt">
              <div className="row">
                <div className="col-md-3">INOX: Reliance Mega Mall, Rajkot</div>
                <div className="col-md-3">
                  <button type="button" class="btn btn-outline-success">
                    11:30 PM
                  </button>
                </div>
              </div>
            </div>
          </div>    
        </div>
      </Link>
    </>
  );
};
