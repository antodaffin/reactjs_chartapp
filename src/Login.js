import React, {Component} from 'react'
 import Button from '@material-ui/core/Button';
import {TextField} from '@material-ui/core'
import {Link} from "react-router-dom";


export default class Login extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             email:"",
             emailError:false,
             password:"",
             passwordError:false
             
        }
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
      
     event.preventDefault();
     if(this.state.email==="" ){
       this.setState({
          emailError:true
       })
      
     
      }
     else if(this.state.password==="" ){
        this.setState({
           passwordError:true
        })
       
      
       }
      else{
          this.setState({
              emailError:false,
              passwordError:false
          })
        this.props.history.push('charts')
       
      }
      if(this.state.password==="" ){
        this.setState({
           passwordError:true
        })
       
      
       }
    }
    
    
     handleChangeEmail = (event) => {
         this.setState({
             email:event.target.value,
             emailError:false
            
         })
         
       
      } 
      handleChangePassword = (event) => {
        this.setState({
            password:event.target.value,
            passwordError:false
           
        })
        
      
     } 
    
      
         
      
    render(){
       
        return(
            <div>
                <h2 style={{color:"purple"}}>LOGIN PAGE!!</h2>
              
                <form   onSubmit={this.handleSubmit}  autoComplete="off"> 

                <TextField type="email" style={{width:"20%", marginBottom:"5px"}} id="standard-basic" label="Email" onChange={this.handleChangeEmail} /><br/>
                {this.state.emailError?<small style={{marginLeft:"-120px",color:"red"}}>please enter the email</small>:null}<br/>
               
                <TextField  style={{width:"20%", marginBottom:"5px"}} id="standard-basic" type="password" onChange={this.handleChangePassword} label="Password" /><br/>
                {this.state.passwordError?<small style={{marginLeft:"-100px",color:"red"}}>please enter the password</small>:null}<br/>
                {/* <input style={{marginBottom:"20px"}} type="submit" value="Submit" /> */}

                </form>
                <Button onClick={this.handleSubmit}  style={{marginTop:"30px", width:"20%"}}variant="contained" color="primary">
                Login
                </Button>
                <p>Don't have an account? <Link to="/signup">SIGNUP</Link> Here</p>
   
            </div> 
        )
    }
}
