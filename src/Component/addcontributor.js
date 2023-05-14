import React, { useState } from 'react';
import {Card,CardBody} from 'reactstrap'
import axios from 'axios';
import base_url from "./api"
import img from './register.jpeg';
import {CardImg} from 'reactstrap';
import logout from './icon/logout.png'
import Nav from 'react-bootstrap/Nav'
// import styled from 'styled-components';

const Addconbtributor = () => {
    const[userId,setUserId]=useState('');
    const [Name, setFirstName] = useState('');
    const [Password, setPassword] = useState('');
    const[Email,setEmail]=useState('');
    const[Program,setProgram]=useState('');
    const[Rollno,setRollno]=useState('');
    const[Role,setRole]=useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/saveuser', {
            user_id: userId,
            email: Email,
            password: Password,
            role: Role,
            name: Name,
            program: Program,
            roll_no: Rollno
          }).then(
            (response) => {
              console.log("success");
            }, 
            (error) => {
              console.log("Errormsg::",error);
            }
          );
        


        alert('You have submitted');
    }
    const logoutCall=()=>{
        sessionStorage.clear();
    
      }

    return (
        <>
      <  div className="login-wrapper">
      <h1 align='center'>REGISTER CONTRIBUTOR</h1>
        <Card>
            
            <CardBody>
            <CardImg top width="20%" src={img} height="50%" alt="register" />
      
            <form className='form' onSubmit={handleSubmit}>
            <div className='form-control'>
                   <div>
                     <label htmlFor='UserId'>ID: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input
                        type='text'
                        id='userId'
                        name='userId'
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                    />
                </div>
                <br></br>
                <div>
            
                    <label htmlFor='Name'>Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input
                        type='text'
                        id='Name'
                        name='Name'
                        value={Name}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <br></br>
                <div>
                <label htmlFor='Password'>Password: </label>
                    <input
                        type='text'
                        id='Password'
                        name='Password'
                        value={Password}
                        onChange={(e) => setPassword(e.target.value)}
                        ></input>
                </div>
                <br></br>
                <div>
                <label htmlFor='Email'>Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input
                        type='text'
                        id='Email'
                        name='Email'
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                        ></input>
                </div>

                <br></br>
                <div>
                <label htmlFor='Program'>Program:&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input
                        type='text'
                        id='Program'
                        name='Program'
                        value={Program}
                        onChange={(e) => setProgram(e.target.value)}
                        ></input>
                </div>
                <br></br>
                <div>
                <label htmlFor='Rollno'>Rollno:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input
                        type='text'
                        id='Rollno'
                        name='Rollno'
                        value={Rollno}
                        onChange={(e) => setRollno(e.target.value)}
                        ></input>
                </div>
                <br></br>
                <div>
                <label htmlFor='Role'>Role:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input
                        type='boolean'
                        id='Role'
                        name='Role'
                        value={Role}
                        onChange={(e) => setRole(e.target.value)}
                        ></input>
                </div>
   </div>
                <button  align='centre' color="blue" type="submit">Submit</button>

            </form>
        
      </CardBody>
        </Card>
        <nav>
  
  <Nav.Link href="/Admin_login" onClick={logoutCall} style={{ display: 'flex', alignItems: 'center' }}>
 <img src={logout} className='icon' alt="notification" style={{ margin: '0 auto' }} />
  </Nav.Link>
</nav> 
        </div>
        </>
  );
};

export default Addconbtributor;