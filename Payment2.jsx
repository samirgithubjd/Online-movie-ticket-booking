import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./payment.css";

export const Payment2 = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <br />
      <div className="row">
        <div className="col-md-6">
      <div className="pymt">
        <div className="paybox1">
          <h6>Share Your Contact Details</h6>
          <div className="femail">
            <form>
              <div className="row">
                <div className="col">
                  <div className="inp">
                    <label htmlFor="email">Email :</label>
                    <input type="email" name="email" id="data" placeholder="Enter Email..." required/>
                  </div>
                </div>
                <div className="col">
                  <div className="inp">
                    <label htmlFor="PhoneNo">Phone No :</label>
                    <input type="tel" name="tel" id="data" placeholder="Enter your number" required />
                  </div>
                </div>
              </div><br />
              {/* <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enetr Email address"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    <label for="number" class="form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter Phone Number"
                      class="form-control"
                      id="exampleInputphone"
                    />
                  </div>
                </div>
              </div> */}
              <button type="submit" className="btn-primary" id="pybtn">
                  Continue
                </button>
            </form>
          </div>
        </div><br />
       

        <div className="paybox2 ">
          <div className="dropdown">
            <div
              className="dropdown-btn"
              onClick={(e) => setIsActive(!isActive)}
            >
              Payment Options<i class="fa fa-down"></i>
            </div>
            {isActive && (
              <div className="dropdown-content">
                <div className="dropdown-item">
                  <button type="button" class="btn btn-outline-Secondary">
                    QuikPay
                  </button>
                </div>
                <div className="dropdown-item">
                <Link to ='DcCard'> <button type="button" class="btn btn-outline-Secondary">
                    Debit/Credit Card
                  </button></Link>
                </div>
                <div className="dropdown-item">
                <Link to ='NetBanking'><button type="button" class="btn btn-outline-Secondary">
                    Net Banking
                  </button></Link>
                </div>
                <div className="dropdown-item">
                  <button type="button" class="btn btn-outline-Secondary">
                    Mobile Wallets
                  </button>
                </div>
                <div className="dropdown-item">
                  <button type="button" class="btn btn-outline-Secondary">
                    Gift Voucher
                  </button>
                </div>
                <div className="dropdown-item">
                <Link to ='Upi'> <button type="button" class="btn btn-outline-Secondary">
                    UPI
                  </button></Link>
                </div>
                <div className="dropdown-item">
                  <button type="button" class="btn btn-outline-Secondary">
                    Reedeem Points
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      </div>

      <div className="col-md-6">
        
      <div className="pyntbox">
                <h6>BOOKING SUMMARY</h6><br />
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
{/* 
                 <div className="proceed">
                 <Link to='Payment2'><button type="button" class="btn btn-danger" id="pybtn1">Proceed</button></Link>
                 </div> */}
            </div>
      </div>
      </div>
    </>
  );
};
