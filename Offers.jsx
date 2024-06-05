import React from "react";
import "./offers.css";

export const Offers = () => {
  return (
    <>
      <div className="ofrimg">
        <img
          src="https://cdn0.desidime.com/cdn-cgi/image/fit=contain,f=auto,onerror=redirect,w=1200,h=675,q=90/attachments/photos/973498/original/HowtoSaveMoneyon.jpg"
          alt="..."
        />
      </div>
      <div className="ofrbox1">
        <div className="ofrbox2">
          <div className="row">
            <div className="col-md-6">
              <div class="card">
                <div class="card-body1">
                  <i class="fi fi-ss-gift-card">gift</i>
                  <h6 class="card-title">Welcoe Offer Rs.500*</h6>
                  <p class="card-text"> on PLAY card activatioin</p>
                  <br />
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div class="card">
                <div class="card-body1">
                  <i class="fi fi-ss-credit-card">card</i>
                  <h6 class="card-title">on 200 BMS cash*</h6>
                  <p class="card-text">
                    {" "}
                    on completing your PLAY card journey{" "}
                  </p>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ofrtext">
        <h4>Applying for the play card is super easy</h4>
        <br />
        <p>it's hassle-free & paperless</p>
        <p>complete video KYC in less than 10 minuts</p>
      </div>
      <br />
      <hr />
    </>
  );
};
