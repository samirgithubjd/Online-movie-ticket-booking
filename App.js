import React  from 'react';
import "./App.css";
import HomePage from "./Home/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Movies } from "./components/homes/Movies";
import { Footer } from "./footer/Footer";
import { MovieTime } from "./components/homes/MovieTime";
import { SeatBook } from "./components/homes/SeatBook";
import { Offers } from "./components/homes/Offers";
import { Payment1 } from "./payment/payment1";
import { Payment2 } from "./payment/Payment2";
import { Login } from "./components/homes/Login";
import { DcCard } from "./payment/DcCard";
import { NetBank } from "./payment/NetBanking";
import { Upi } from "./payment/Upi";
import { Confirm } from './payment/Confirm';
import AlertDismissibleExample from './Error';
import DashBord from './components/homes/Dashbord';

function App() {
    return ( 
        <>
        <Router >
        <Header />
        <Switch >
        <Route exact path = '/' component = { HomePage } />  
        {/* <Route exact path = "/SinglePage/:id" element =  {SinglePage }  />   */}
        <Route exact path = '/Movies' component = { Movies }/>  
        <Route exact path = '/Login'component = { Login }/> 
        <Route exact path = '/Movietime' component = { MovieTime } />  
        <Route exact path = '/seatbook' component = { SeatBook }/>  
        <Route exact path = '/Offers' component = { Offers }/>   
        <Route exact path = '/Payment1' component = { Payment1 }/>  
        <Route exact path = '/Payment2'component = { Payment2 }/>  
        <Route exact path = '/DcCard'component = { DcCard }/> 
        <Route exact path = '/NetBanking'component = { NetBank }/> 
        <Route exact path = '/Upi' component = { Upi }/>
        <Route exact path = '/Confirm' component = { Confirm }/> 
        <Route exact path = '*' component = { <AlertDismissibleExample /> }/> 

        <Route exact path = 'DashBord' component = {DashBord} />
        {/* <Route exact path = "*"element = { < Error / > } />  */}
        </Switch> 
         <Footer />
        </Router> 
        </>
    )
}

export default App;