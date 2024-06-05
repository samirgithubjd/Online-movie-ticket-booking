import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./Header.css";


export const Header = () => {
    const [Mobile, setMobile] = useState(false);

   
    return ( 
      <>
        <header >
        <div className = "container flexSB" >
        <nav className = "flexSB" >
        <div className = "logo" >{ /* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7wo2BqEk8mVie7otdQl8EfpPOJe82EMaMDrufbUDEcVQ0CGn5PMWoih-JRTPu7dijGdU&usqp=CAU" /> */ } { " " } 
        <h5 > Movie Ticket Online </h5>
         </div>

        <ul className = { Mobile ? "navMenu-list" : "flexSB" }
        onClick = {
            () => setMobile(false) } >
        <Link to = "/" >

        <li > Home </li>
        </Link> 
        <Link to = "/Movies" > 
        <li > Movies </li>
        </Link> 
        <Link to = "/Pages" > 
        <li > Pages </li>
        </Link> 
        <Link to = "/Offers" >  
        <li > Offers </li>
        </Link> 
        </ul>

        <button className = "toggle"
        onClick = {
            () => setMobile(!Mobile) } > {
            Mobile ? ( 
              <i className = "fa fa-times" > </i>
            ) : ( 
              <i className = "fa fa-bars" > </i>
            )
        }  
        </button> 
        </nav> 
        <div className = "account flexSB" >
        < div className = "searchbar" >
        <form className = "d-flex"
        role = "search" >
        <input class = "form-control me-2"
        type = "search"
        placeholder = "Search" />
        <button className = "btn btn-outline-danger"
        type = "submit" > 
        Search 
        </button> 
        </form> 
        </div>
         <i className = "fa fa-bell" > </i> 

< i className = "fa fa-user"></i>
        

      
{/* {
  isAuthenticated ?   <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
  Log Out
</button>
: 
< i className = "fa fa-user" onClick={() => loginWithRedirect()} ></i>
} */}
     

        </div>
        </div>
        </header>
        </>
    );
};