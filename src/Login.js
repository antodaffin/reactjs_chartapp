import React, {useState, useContext} from "react";
import {Link} from "react-router-dom";
import { signInWithGoogle } from "./firebase";
import { auth } from "./firebase";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { UserContext } from "./UserProvider";



const Login = (props) => {
     const user = useContext(UserContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    

    const signInWithEmailAndPasswordHandler = (event,email, password) => {
       
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).catch(error => {
        setError("Error signing in with password and email!");
          console.error("Error signing in with password and email", error);
        });
      };
      
      const onChangeHandler = (event) => {
        
          const {name, value} = event.currentTarget;
        
          if(name === 'userEmail') {
              setEmail(value);
          }
          else if(name === 'userPassword'){
            setPassword(value);
          }
      };
   

  return (
    <div>
      <h1 >Sign In</h1>
      <div>
        {error !== null && <div style={{color:"red"}}>{error}</div>}
        <br/>
        <br/>
        <form className="">
         
         
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
          id="outlined-required"
          label="Password"
          type="password"
          variant="outlined"
          value = {password}
         name="userPassword"
          onChange = {(event) => onChangeHandler(event)}
        />
         <br/>
         <br/>
         <div style={{ marginLeft:"15%"}}>
         <Link to="passwordReset">
            Forgot Password?
          </Link>
          </div>
         <br/>
         <br/>
         <Button onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}} variant="contained" color="primary">
          Sign In
         </Button>
          
        </form>
        <p>or</p>
        <Button onClick={() => {
            signInWithGoogle();
          }} variant="contained" color="primary">
        Sign in with Google
        </Button>
       
        <p>
          Don't have an account?{" "}
          <Link to="/signUp">
            Sign up
          </Link>{" "}
        here
          
        </p>
      </div>
    </div>
  );
};

export default Login