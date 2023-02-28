import React from 'react'
import { useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table';
import {Link} from 'react-router-dom'




function Redux() {

    
    const users = useSelector(state => state.users)
  
    return (
        <div>
            <h2 >DETAILS FROM REDUX</h2>

            <Table striped bordered hover>

                <thead >
                     <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Confirm Password</th>
                        <th>Date Of Birth</th>

                    </tr>
                          </thead>
                          {
                    users.map((user,i) =>
                        <tbody key={i}>


                            <tr>
                                <td> {user.firstname} </td>
                                <td> {user.lastname} </td>
                                <td> {user.email}</td>
                                <td> {user.password} </td>
                                <td> {user.confirmPassword} </td>
                                <td> {user.dob} </td>
                                <td> <Link to={'/editprofile'}  state={{ id: user.id }}> Click Here to Edit</Link></td>
                               
                                <td>  

                                
                                {/* <button className='btn btn-primary mx-2' onClick={()=>{dispatch(reducer)} } > Click Here to Edit</button> */}
                                
                                </td>
                            </tr>
                        </tbody>


                    )
                }

            </Table>





        </div>
    )
}

export default Redux