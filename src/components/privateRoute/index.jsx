import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext"

const PrivateRoute = ({ children }) => {
  const context = useContext(AuthContext)
  return context.isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

// function PrivateRoute (){
//     const { session } = isLoggedIn();
    
//     var auth = session;

//     // If authorized, return an outlet that will render child elements
//     // If not, return element that will navigate to login page
//     return (auth ? <ShowSiteHeader /> : <LoginPage />);

// }

// export default PrivateRoute;