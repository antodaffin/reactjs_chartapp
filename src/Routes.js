import React, { useContext } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Signup from "./Signup";
import UserProvider from "./UserProvider";
import Chart from "./Chart";
import { UserContext } from "./UserProvider";
import PasswordReset from "./PasswordReset";



function Routes(props) {
  const user = useContext(UserContext);
  return (
    <BrowserRouter>
      <div className="App">
        
        
        <Switch>
          <Route exact path="/charts" component={Chart} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Dashboard />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Routes;
