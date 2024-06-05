import React from "react";
import "./payment.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const Payment1 = () => {
    return(
        <><br />
         <div className="pymntbox">
                <h6>BOOKING SUMMARY</h6>
                <div className="tcttxt">
                    <div className="row">
                        <div className="col">
                        <p>CREW:J-04,J-05 ( 2 Tickets )</p>
                        </div>
                        <div className="col">
                        <p>Rs. 420.00</p>   
                        </div>
                    </div><br />

                    <div className="row">
                        <div className="col">
                        <p> Convenience Fees</p>
                        </div>
                        <div className="col">
                        <p>Rs.70.80</p>
                        </div>
                    </div><hr />

                    <div className="row">
                        <div className="col">
                        <p> Sub Total</p>
                        </div>
                        <div className="col">
                        <p>Rs.490.80</p>
                        </div>
                    </div>
                   
                </div>
                <div className="tcttxt1">
                    <div className="total">
                <div className="row">
                        <div className="col">
                        <p>Amount Payable</p>
                        </div>
                        <div className="col">
                        <p>Rs.490.80</p>
                        </div>
                    </div>
                 </div>
                 </div><br />

                 <div className="proceed">
                 <Link to='Payment2'>  <button type="button" class="btn btn-danger">Proceed</button></Link>
                 </div>
            </div>
        </>
    )
}