import React, {Component} from 'react'
 import Button from '@material-ui/core/Button';
import {TextField} from '@material-ui/core'
import {Link} from "react-router-dom";

export default class Signup extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             name:"",
             nameError:false,
             email:"",
             emailError:false,
             phone:"",
             phoneError:false,
             password:"",
             passwordError:false
            
             
        }
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
       
     event.preventDefault();
     if(this.state.name==="" ){
      this.setState({
         nameError:true
      })
     
    
     }
     else if(this.state.email==="" ){
      this.setState({
         emailError:true
      })
     
    
     }
     else if(this.state.phone==="" ){
      this.setState({
         phoneError:true
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
             passwordError:false,
             nameError:false,
             phoneError:false
         })
       this.props.history.push('/')
      
     }
     if(this.state.email==="" ){
      this.setState({
         emailError:true
      })
     
    
     }
     if(this.state.phone==="" ){
      this.setState({
         phoneError:true
      })
     
    
     }
     if(this.state.password==="" ){
       this.setState({
          passwordError:true
       })
      
     
      }

    }
    
    
     handleChange = (event) => {
         this.setState({
             name:event.target.value,
             nameError:false
         })
         
       
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
  handleChangePhone = (event) => {
    this.setState({
        phone:event.target.value,
        phoneError:false
       
    })
    
  
 } 
 
     
      
         
      
    render(){
       
        return(
            <div>
                <h2 style={{color:"purple"}}>SIGNUP PAGE!!</h2>
              
                <form    onSubmit={this.handleSubmit}  autoComplete="off"> 
                    <TextField  style={{width:"20%", marginBottom:"5px"}}  id="standard-basic" label="UserName" onChange={this.handleChange}  value={this.state.name}  /><br/>
                    {this.state.nameError?<small style={{marginLeft:"-120px",color:"red"}}>please enter the Name</small>:null}<br/>
                
                  <TextField  type="email"style={{width:"20%", marginBottom:"5px"}} id="standard-basic" label="Email"value={this.state.email} onChange={this.handleChangeEmail} /><br/>
                  {this.state.emailError?<small style={{marginLeft:"-120px",color:"red"}}>please enter the email</small>:null}<br/>
                
                  <TextField  type="number" style={{width:"20%", marginBottom:"5px"}} id="standard-basic" value={this.state.phone} label="Phone No"  onChange={this.handleChangePhone}/><br/>
                  {this.state.phoneError?<small style={{marginLeft:"-60px",color:"red"}}>please enter the Mobile Number</small>:null}<br/>
                
                  <TextField  style={{width:"20%", marginBottom:"5px"}} id="standard-basic" type="password" value={this.state.password} label="Password" onChange={this.handleChangePassword} /><br/>
                  {this.state.passwordError?<small style={{marginLeft:"-100px",color:"red"}}>please enter the Password </small>:null}<br/>
              
                </form>
                <Button onClick={this.handleSubmit}  style={{marginTop:"30px", width:"20%"}}variant="contained" color="primary">
                  SIGNUP
                </Button>
                <p>Already have an account? <Link to="/">LOGIN</Link> Here</p>
   
            </div> 
        )
    }
}
