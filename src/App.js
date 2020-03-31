import React from 'react';

import './App.css';
import Login from './Login'
import Signup from './Signup'
import Chart from './Chart'
import { BrowserRouter, Route, Switch} from "react-router-dom";

const NotFound=()=>{
  return(
    <div>
      <h2>Page not found</h2>
    </div>
  )
}


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
  <Route exact path="/" component={Login}/>
   <Route exact path="/signup" component={Signup}/>
   <Route exact path="/charts" component={Chart}/>
   <Route   component={NotFound}/>
  </Switch>

    </div>
      
   
  

 
    </BrowserRouter>
  
  );
}

export default App;
