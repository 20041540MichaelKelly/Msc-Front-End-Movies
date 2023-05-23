import React, { useContext } from "react";
import { AuthContext } from "./contexts/authContext";
import withRouter from "./withRouter"
import LoginPage from './pages/loginPage';
import ShowSiteHeader from "./components/showSiteHeader";

const BaseAuthHeader = (props) => {
  const context = useContext(AuthContext);
  const { history } = props;

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return context.isAuthenticated ? <ShowSiteHeader /> : <LoginPage />;

}

export default BaseAuthHeader;