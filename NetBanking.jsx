import React from "react";

export const NetBank = () => {
  return (
    <>
      <div className="net">
        <h3>Pay using Net Banking</h3>
        <br />
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
                <div className="bankimg">
                  <img src="https://cdn.dribbble.com/users/5298575/screenshots/13983738/state_bank_of_india_logo_2_1x.png" />
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
                <div className="bankimg">
                  <img src="https://download.logo.wine/logo/Axis_Bank/Axis_Bank-Logo.wine.png" />
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
                <div className="bankimg1">
                  <img src="https://www.inventiva.co.in/wp-content/uploads/2022/07/HDFC-.png" />
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
                <div className="bankimg">
                  <img src="https://cdn.freelogovectors.net/wp-content/uploads/2023/01/icici-bank-logo-freelogovectors.net_.png" />
                </div>
              </label>
            </div>
          </div>
        </div>

        <div className="select">
          <p>ALL BANKS</p>
          <label for="bank"></label>

          <select name="banks" id="banks">
            <option value="volvo">SBI Bank</option>
            <option value="saab">Bank of Maharashtra</option>
            <option value="mercedes">ICIC Bank</option>
            <option value="audi">HDFC Bank</option>
            <option value="audi">Federal Bank</option>
            <option value="audi">AXIS Bank</option>
            <option value="audi">Kotak Bank</option>
            <option value="audi">Airtel payments Bank</option>
            <option value="audi">Centeral bank of india</option>
            <option value="audi">Cosmos Bank</option>
          </select>
        </div>
        <br />
        <button type="submit" className="btn btn-danger">
          make payment
        </button>
      </div>
    </>
  );
};
{
  /* <input type="radio" lable="radio" id="statebank" />
        <div className="bankimg">
          <img src="https://cdn.dribbble.com/users/5298575/screenshots/13983738/state_bank_of_india_logo_2_1x.png" />
        </div> */
}
