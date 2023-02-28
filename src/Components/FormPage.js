import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import './FormPage.css';
import { Container } from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap';


 const FormPage = (props) => {


  // console.log(props.user);

    const [firstname, setfirstName] = useState("")
    const [lastname, setlastName] = useState(props.user? props.user.lastname:"")
    const [password, setPassword] = useState('')
    
    const [email, setEmail] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [genderm, setGenderm] = useState('')
    const [dob, setDob] = useState('')

    const dispatch = useDispatch()


   

   const handleDummy = ()=>{

    setfirstName("raj");
    setlastName("kumar");
   setGenderm("Male");
   setPassword("123")
   setconfirmPassword("123")

   }


    const register = () => {
      console.log("user details")
      console.log(  firstname,lastname,password,confirmPassword,email)
      dispatch({
        type: 'REGISTRATION',
        payload: {
         
          firstname,lastname,password,confirmPassword,email,genderm,dob
        }

      });

      // props.user && setfirstName(props.user.firstname)

}

    return (
    
        
      <Container className="xs=6">
      <Row className="vh-100 d-flex justify-content-md-center">
          <Col md={8} lg={6} xs={12}>
      <h1 className="text-center mt-2 ">Registration Form</h1><br/>

     {/* <Form.Group className="mb-10 " controlId="formBasicPassword"> */}
        <div className='register d-flex'><Form.Label>First Name</Form.Label> 
        &nbsp;
        <Form.Control type="firstName" style={{width:180,height: 30}}  label="First Name" placeholder="first name" value={firstname} onChange={e => setfirstName(e.target.value)} /> <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;  
        <Form.Label>Last Name</Form.Label> &nbsp;&nbsp;
        <Form.Control type="lastName" style={{width:180,height: 30, paddingLeft:20}} placeholder="last name" value={lastname} onChange={e => setlastName(e.target.value)}  /> <br/>
        </div> 

      <Form.Group>
        <Form.Label>Gender</Form.Label> <br/>
        <Form.Check name ="gender" label="Male"  type="radio" value={genderm} onChange={e => setGenderm(e.target.value)}/>
        <Form.Check name ="gender" label="Female"  type="radio" />
        
      </Form.Group>
      <br/>
      <Form.Group controlId = 'dob'>
        <Form.Label>Date Of Birth</Form.Label>
        <Form.Control type = 'date' placeholder='Enter date of birth' value={dob} onChange={e => setDob(e.target.value)}></Form.Control>
      </Form.Group>

    
<br/>
      <Form.Group className="mb-50" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
<br/>
      <Form.Group className="mb-10" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  value={password} onChange={e => setPassword(e.target.value)}/>
        <Form.Text className="text-muted">
         Do not share your Password with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword2"
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={confirmPassword} onChange={e => setconfirmPassword(e.target.value)}/>
                      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Keep me Sign-in" padding-left="10px" />
      </Form.Group>

      {/* <button >
      <Link as={Link} to="/redux"
      
      style={{color: props.whitecolor, backgroundColor: props.bgcolor, fontSize: props.fs, borderRadius:props.borderadius, padding:props.pad, textDecoration : "none" }} onClick={register} > SUBMIT{props.name}  </Link>
      </button> */}

      <button className='button1'>
      <Link className='link1' as={Link} to="/redux"
      
      style={{ textDecoration : "none" }} onClick={register} > SUBMIT{props.name}  </Link>
      </button>

      <button onClick={handleDummy}>dummy data</button>
      
      
      <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already have an account??{' '}
                        <a href="{''}" className="text-primary fw-bold">
                          Sign In
                        </a>
                      </p>
                    </div>
      </Col>
        </Row>
       </Container>
       
 

    )
  }

export default FormPage