import React  from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";



// import Cal from "./Cal";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render( 
   <>
   <Auth0Provider
    domain="dev-c3ja2zfm1jl33hvh.us.auth0.com"
    clientId="rHVyf67bE08rPZfuafGpjPRzP8e8H4zs"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Router>
        <App />
    </Router>
    </Auth0Provider>
   </>
);