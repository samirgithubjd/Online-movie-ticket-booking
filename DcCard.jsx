import React from "react";
import "./payment.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const DcCard = () => {
  return (
    <>
      <form>
        <h3 className="cdetails">Enter your credit card details</h3>
        <div className="mnbox">
          <div className="cinputs">
            <form>
              <div className="Dcinp">
                <div className="mb-3">
                  <label for="name" class="name-label">
                    Name
                  </label>
                  <input
                    type="name"
                    placeholder="Name of the card"
                    class="form-control"
                    id="name"
                    required  
                  />
                </div>

                <div className="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Credit card number
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your card number"
                    class="form-control"
                    id="exampleInputPassword1"
                    required
                  />
                </div>
              </div>

              <div className="input1">
                <div className="mb-3">
                  <label for="date" class="form-label">
                    Expiry
                  </label>
                  <input type="month" class="form-control" required/>
                </div>
              </div>

              <div className="input2">
                <div className="mb-3">
                  <label for="password" class="form-label">
                    CVV
                  </label>
                  <input
                    type="password"
                    placeholder="cvv"
                    class="form-control"
                    required
                  />
                </div>
              </div>
              <br />

              {/* <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  confirm
                </label>
              </div> */}

              <Link to="Confirm">
                {" "}
                <button type="submit" className="btn btn-danger">
                  make payment
                </button>
              </Link>
            </form>
          </div>
        </div>
      </form>
    </>
  );
};
