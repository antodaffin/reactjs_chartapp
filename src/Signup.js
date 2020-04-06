import React, { useState,useContext } from "react";
import {Link} from "react-router-dom";
import { auth, signInWithGoogle, generateUserDocument } from "./firebase";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { UserContext } from "./UserProvider";

const Signup = (props) => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);

  

  const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault();
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      generateUserDocument(user, {displayName});
    }
    catch(error){
      setError('Error Signing up with email and password');
    }
      
    setEmail("");
    setPassword("");
    setDisplayName("");
  };

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <div>
        {error !== null && (
          <div style={{color:"red"}}>
            {error}
          </div>
        )}
        <br/>
        <form className="">
        
          <TextField
            type="text"
            label="Username"
            name="displayName"
            value={displayName}
            variant="outlined"
            id="outlined-required"
            onChange={event => onChangeHandler(event)}
            style={{width:"25%"}}
          />
          <br/>
          <br/>
        <TextField
          style={{width:"25%"}}
          id="outlined-required"
          label="Email"
          type="email"
          variant="outlined"
          value = {email}
          name="userEmail"
          onChange = {(event) => onChangeHandler(event)}
        />
        <br/>
         <br/>
        
          <TextField
           style={{width:"25%"}}
            type="password"
            variant="outlined"
            name="userPassword"
            value={password}
            id="outlined-required"
            label="Password"
            onChange={event => onChangeHandler(event)}
          />
          <br/>
          <br/>
          <Button
           variant="contained" color="primary"
            onClick={event => {
              createUserWithEmailAndPasswordHandler(event, email, password);
            }}
          >
            Sign up
          </Button>
        </form>
        <p >or</p>
        <Button
        variant="contained" color="primary"
          onClick={() => {
            try {
              signInWithGoogle();
            } catch (error) {
              console.error("Error signing in with Google", error);
            }
          }}
         
        >
          Sign In with Google
        </Button>
        <p>
          Already have an account?{" "}
          <Link to="/" className="text-blue-500 hover:text-blue-600">
            Sign in
          </Link>{" "}
          here
        </p>
      </div>
    </div>
  );
};

export default Signup;