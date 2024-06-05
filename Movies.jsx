import React from "react";
import "./movies.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Movies = () => {
  return (
    <>
      <br />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="mbutton">
              <div className="lang">
                <h3>Select Your Language</h3>
                <br />
                <button type="button" class="btn btn-outline-success">
                  Gujrati
                </button>
                &nbsp;&nbsp;
                <button type="button" class="btn btn-outline-success">
                  Hindi
                </button>
                &nbsp;&nbsp;
                <button type="button" class="btn btn-outline-success">
                  English
                </button>
                &nbsp;&nbsp;
                <button type="button" class="btn btn-outline-success">
                  Other
                </button>
              </div>
              <br />

              <div className="cat">
                <h3>Select Catagory </h3>
                <br />
                <button type="button" class="btn btn-outline-danger">
                  Sci-fi
                </button>
                &nbsp;&nbsp;
                <button type="button" class="btn btn-outline-danger">
                  Action
                </button>
                &nbsp;&nbsp;
                <button type="button" class="btn btn-outline-danger">
                  Thriller
                </button>
                &nbsp;&nbsp;
                <button type="button" class="btn btn-outline-danger">
                  Advanture
                </button>
                <br />
                <button type="button" class="btn btn-outline-danger">
                  Horror
                </button>
                &nbsp;&nbsp;
                <button type="button" class="btn btn-outline-danger">
                  Fantacy
                </button>
                &nbsp;&nbsp;
                <button type="button" class="btn btn-outline-danger">
                  Comedy
                </button>
                &nbsp;&nbsp;
                <button type="button" class="btn btn-outline-danger">
                  Drama
                </button>
              </div>
              <br />

              <div className="format">
                <h3>Format</h3>
                <button type="button" class="btn btn-outline-danger">
                  2D
                </button>
                &nbsp;&nbsp;
                <button type="button" class="btn btn-outline-danger">
                  3D
                </button>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="row">
              <div className="col">
            <div className="movcard" id="movcard1">
              <img src="https://im.rediff.com/movies/2023/jan/12film1.jpg" alt="Movie Img" />
            </div>
            <Link to='MovieTime'><button type="button" class="btn btn-danger" style={{width:200}}>Book Now</button></Link>
            </div><br />

            <div className="col">
            <div className="movcard" id="movcard2">
              <img src="https://upload.wikimedia.org/wikipedia/en/7/75/Leo_%282023_Indian_film%29.jpg" alt="Movie Img" />
            </div>
            <Link to='MovieTime'><button type="button" class="btn btn-danger" style={{width:200}}>Book Now</button></Link>
            </div><br />
            <div className="col">
            <div className="movcard" id="movcard3">
              <img src="https://img.mensxp.com/media/content/2020/Sep/10---IMDB_5f71eabb96d85.jpeg" alt="Movie Img" />
            </div>
            <Link to='MovieTime'><button type="button" class="btn btn-danger" style={{width:200}}>Book Now</button></Link>
            </div>
            <div className="col">
            <div className="movcard" id="movcard3">
              <img src="https://m.media-amazon.com/images/M/MV5BZDI4OTM1ZjMtOWQxMC00OTY5LTg3NjQtMjlhMWVjODFlYTY4XkEyXkFqcGdeQXVyMTYzMTU3Njgx._V1_.jpg" alt="img" />
            </div>
            <Link to='MovieTime'><button type="button" class="btn btn-danger" style={{width:200}}>Book Now</button></Link>
            </div>
          </div>
          </div>

        </div>
      </div>
    </>
  );
};
