import React from "react";
import "./payment.css";

export const Upi = () => {
  return (
    <>
      <div className="upi">
        <h3>pay using UPI</h3>
        <br />
        <br />
        <div className="row">
          <div className="col">
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                <div className="logoimg">
                  <img src="https://assets-in.bmscdn.com/paymentcms/gpay.jpg" />
                </div>
              </label>
            </div>
          </div>

          <div className="col">
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                <div className="logoimg1">
                  <img src="https://assets-in.bmscdn.com/paymentcms/Amazonpay.png" />
                </div>
              </label>
            </div>
          </div>

          <div className="col">
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                <div className="logoimg">
                  <img src="https://assets-in.bmscdn.com/paymentcms/paytmupi_web.png" />
                </div>
              </label>
            </div>
          </div>

          <div className="col">
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                <div className="logoimg">
                  <img src="https://assets-in.bmscdn.com/paymentcms/OTHERUPI.png" />
                </div>
              </label>
            </div>
          </div>
        </div><br />
       
            <h4>Or Scan QR Code</h4>
            <div className="qr">
                <img src="https://www.freepnglogos.com/uploads/qr-code-png/qr-code-file-bangla-mobile-code-0.png" alt="" />
            </div>
        </div>
      
    </>
  );
};
