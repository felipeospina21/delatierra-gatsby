import React, { useEffect } from "react";
import { navigate } from "gatsby";
import { isLoggedIn } from "../services/auth";

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  useEffect(() => {
    if (!isLoggedIn() && location.pathname !== `/app/login`) {
      navigate("/app/login");
      // return null
    }
  }, [isLoggedIn, location]);

  return isLoggedIn ? <Component {...rest} /> : null;
};
export default PrivateRoute;
