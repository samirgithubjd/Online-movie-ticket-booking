import React, { useState, useNavigate } from "react";
import {useFormik} from 'formik';
import "./login.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const initialValues = {
  name: "",
  email: "",
  password: "",
}
export const Login = () => {

const { values, errors, handleBlur, handleChange, handleSubmit } =  useFormik({
    initialValues: initialValues,
    onSubmit: (values)=>{
      console.log(
        " ~ file: Login.jsx ~ line-10 Login ~ values", 
        values
        );
    },
  });
  console.log(
    " ~ file: Login.jsx ~ line-10 Login ~ values", 
    
  );


  // const history = useNavigate();
  const [action, setAction] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  

  // async function submit(e) {
  //   e.preventDefault();
  //   try {
  //     await axios
  //       .post(
  //         "mongodb+srv://samirjadav271:samirjadav2103@cluster0.iwcsfqq.mongodb.net/",
  //         {
  //           email,
  //           password,
  //         }
  //       )
  //       .then((res) => {
  //         if ((res.data = "exits")) {
  //           history("/home");
  //         }
  //       });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  return (
    <>
    
      <div className="login">
        <form action="POST">
          <div className="mainbox">
            <div className="signup">
              <div className="text">{action}</div>
              <div className="underline"></div>
            </div>
            <div className="inputs">
              {action === "Login" ? (
                <div></div>
              ) : (
                <div className="input">
                  <img src={<i class="fa fa-rr"></i>} alt="" />
                  <input type="name"  id="name" placeholder=" Name" value={values.name} onChange={handleChange} onBlur={handleBlur} required/>
                </div>
              )}

              <div className="input">
                <img src={<i class="fa fa-envelope"></i>} alt="" />
                <input
                  type="email"
                  name="email"
                  id="email-address"
                  placeholder="Email"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  
                />
              </div>

              <div className="input">
                <img src={<i className="fab fa-twitter"></i>} alt="" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required 
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>

            {action === "Sign Up" ? (
              <div></div>
            ) : (
              <div className="forgot-password">Forgot password?</div>
            )}
            {action === "Login" ? (
              <div></div>
            ) : (
              <div id="logclick">Have already account?</div>
            )}

            {/* <div className="submit-btn">
              <input type="submit" onClick={submit} />
            </div> */}
           <button className="input-button" type="submit" >submit</button>

            <div className="login-btn">
              <div
                className={action === "Login" ? "submit gray" : "submit"}
                onClick={() => {
                  setAction("Sign Up");
                }}
              >
                Sign Up
              </div>
              <div
                className={action === "Sign Up" ? "submit gray" : "submit"}
                onClick={() => {
                  setAction("Login");
                }}
              >
                Login
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};


// import React, { useState } from 'react';

// export const Login = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [username, setUsername] = useState('');

//   const handleLogin = () => {
//     // Perform login logic, for example, sending a request to a server
//     // For demonstration purposes, we'll just set a dummy username and assume login is successful
//     const dummyUsername = 'user123';
//     setUsername(dummyUsername);
//     setIsLoggedIn(true);
//   };

//   const handleLogout = () => {
//     // Perform logout logic, for example, clearing local storage or sending a logout request to a server
//     // For demonstration purposes, we'll just clear the username and set isLoggedIn to false
//     setUsername('');
//     setIsLoggedIn(false);
//   };

//   return (
//     <div>
//       {isLoggedIn ? (
//         <div>
//           <p>Welcome, {username}!</p>
//           <button onClick={handleLogout}>Logout</button>
//         </div>
//       ) : (
//         <div>
//           <p>Please login</p>
//           <button onClick={handleLogin}>Login</button>
//         </div>
//       )}
//     </div>
//   );
// };


