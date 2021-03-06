import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Signup from "./Signup";
import UserProvider from "./UserProvider";
import Chart from "./Chart";
import { UserContext } from "./UserProvider";
import PasswordReset from "./PasswordReset";
import Routes from "./Routes";

const NotFound = () => {
  return (
    <div>
      <h1>Page not Found</h1>
    </div>
  );
};
function Application(props) {
  const user = useContext(UserContext);
  return(
   user ? (
    <Routes />
  ) : (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/passwordreset" component={PasswordReset} />

          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  )
  )

}

export default Application;
