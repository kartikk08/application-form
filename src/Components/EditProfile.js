import React from 'react'
import '../css/register.css'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import {update} from '../store/actioncreator/index'
import store from '../store/reducer'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



function EditProfile() {
    const [firstname, setfirstName] = useState("")
    const [lastname, setlastName] = useState('')
    const [password, setPassword] = useState('')
    const [dob, setDob] = useState('')
    const [email, setEmail] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')

  
    const user = useSelector(state => state.users)
    const dispatch= useDispatch();

  const handleSubmit = (e) => 
  {
  e.preventDefault();

  dispatch(update({
    firstname,
    lastname, email, 
    dob, 
    password, 
   confirmPassword}));
  console.log(store.getState());

  }

  return (
    
    <>
     
    <Navbar bg="dark" variant="dark">
       <Container>
         <Navbar.Brand href="#home"><h1>EDIT PROFILE !!!</h1></Navbar.Brand>
         <Nav className="me-auto">
         </Nav>
       </Container>
     </Navbar>
       
<br/>
   <h1> &nbsp; Hiii !!!   {user.firstname} {user.lastname}</h1> <br/>
   <h3> &nbsp; You Can Update Your Details Here :</h3>
<br/>
   <form className="registerForm2" style={{width:'1800px', height: '650px'}} >

   
       <label style={{padding: '10px'}}>
       <h4 >First Name : </h4>
       </label>
<input style={{width:'600px', height:'30px',  marginLeft:'13px'}}
type="text" placeholder='firstname' value={firstname} 
onChange={e => setfirstName(e.target.value)}/>


<label style={{padding: '10px'}}><h4>Last Name :</h4></label>
<input style={{width:'600px', height:'30px',  marginLeft:'13px'}} 
type="text" placeholder='lastname' value={lastname} 
onChange={e => setlastName(e.target.value)}/>



<div className= 'dob' style={{marginTop: '20px'}}>
       <label style={{paddingRight:'20px', marginLeft: '12px'}}>
       <h4>Date Of Birth : </h4>
       </label>
<input type="date" value={dob} 
onChange={e => setDob(e.target.value)}/>
</div>


<label style={{marginTop: '15px',padding: '10px' }}>
       <h4>Email :</h4></label>
<input  style={{width:'600px', height:'30px',  marginLeft:'13px'}} type="text" placeholder='email' 
value={email} onChange={e => setEmail(e.target.value)}/>



<label style={{marginTop: '20px', marginLeft: '12px', paddingRight: '10px'}}>
       <h4>Password :</h4></label>
<input  style={{width:'600px', height:'30px',  marginLeft:'13px'}} type="text" placeholder='password' value={password} 
onChange={e => setPassword(e.target.value)}/>



<label style={{ marginLeft: '12px', marginTop: '15px', paddingRight: '10px'}}>
       <h4>Confirm Password : </h4>
       </label>
<input style={{width:'600px', height:'30px', marginLeft:'13px'}} type="text" placeholder='confirmPassword' 
value={password} 
onChange={e => setconfirmPassword(e.target.value)}/>



<button  style={{marginTop: '30px',width:'150px', height:'50px',  marginLeft: '200px'}} 
 onClick={handleSubmit}> UPDATE </button>
</form>
  
     
   </>
    )
}

export default EditProfile