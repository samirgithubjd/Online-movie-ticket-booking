import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Recon } from "../../dummyData";
import "./home.css";

export const Ucard = ({ item: { id, cover, name, time } }) => {
  return (
    <>
      <br />
      <Link to="/MovieTime">
        <div className="MovieBox">
          <div className="ucard">
            <img src={cover} alt="" />
          </div>

          
          <div className="text">
            {/* <h3>{name}</h3> */}
            <button className="primary-btn">
              <i className="fa fa-play"></i>Book Now
            </button>
            </div>
        </div>
      </Link>
    </>
  );
};

// import React, { useEffect, useState } from "react";
// let API_KEY="&api_key=bff3f22c4a96e91b9e7ee90a37e13e35";
// let base_url="https://api.themoviedb.org/3";
// let url=base_url+"/discover/movie?sort_by=popularity.desc"+API_KEY;

// export const Ucard = () => {
//     const [movieData, setData]= useState([]);
//     const [url_set, setUrl] = useState(url);

//     useEffect(() => {
//         fetch(url_set).then(res=>res.json()).then(data=>{
//             // console.log(data.results);
//             setData(data.results);
//         });
//     },[url_set])

//     return(
//         <>
//         <div className="MovieBox">
//            {
//             (movieData.length==0)?<p className="NOT FOUND">not found</p>: movieData.map(() => {

//             })
//            }
//         </div>

//         </>
//     )
// }
