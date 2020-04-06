import React, { useState, useContext } from "react";
import { auth } from "./firebase";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    }
  };

  const sendResetEmail = event => {
    event.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
          setEmailHasBeenSent(true);
        setTimeout(() => {setEmailHasBeenSent(false)}, 3000);
      })
      .catch(() => {
        setError("Error resetting password");
      });
  };
  return (
    <div>
      <h1>
        Reset your Password
      </h1>
      <div >
        <form action="">
          {emailHasBeenSent && (
            <div>
              An email has been sent to you!
            </div>
          
          )}
            <br/>
          {error !== null && (
            <div style={{color:"red"}}>
              {error}
            </div>
          )}
          <br/>
            <TextField
          style={{width:"25%"}}
          id="outlined-required"
          label="Email"
          type="email"
          variant="outlined"
          value = {email}
          name="userEmail"
          onChange={onChangeHandler}
        />
        <br/><br/>
         
         
         <Button
            variant="contained" color="primary"
            onClick={event => {
              sendResetEmail(event);
            }}
            >
          
            Send me a reset link
          </Button>
        </form>
        <br/>

        <Link
          to="/"
         
        >
          &larr; back to sign in page
        </Link>
      </div>
    </div>
  );
};

export default PasswordReset;