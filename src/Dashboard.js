import React, { useContext } from "react";
import { UserContext } from "./UserProvider";
import { auth } from "./firebase";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Chart from "./Chart";

const Dashboard = (props) => {
  const user = useContext(UserContext);
  const { displayName, email } = user;
  console.log(user);

  return (
    <div>
      <h2>Welcome, {displayName}</h2>

      <br />
      <br />
      <Link to="/charts">go to charts page</Link>
      <br />
      <br />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          auth.signOut();
        }}
      >
        Sign out
      </Button>
    </div>
  );
};

export default Dashboard;
