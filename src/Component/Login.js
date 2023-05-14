import React,{useState,useEffect} from 'react'
import './css/login.css'
import axios from "axios";
import base_url from "./api"
import { Button, Input, CardBody} from 'reactstrap';
import { Card, CardImg} from 'reactstrap';
import img from './outreach.jpg';
import Nav from './Nav';



const Login = (props)=>{

   console.log("login page",props); 
  
  useEffect(()=>{

  let id = sessionStorage.getItem("id")

  if(id)
  {
    props.history.push('/home')
  }


  },[props.history])


  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")

  const [lgfailed,setlgfailed] = useState(false)

  const usernameChange = (event)=>{
    setUsername(event.target.value)
    

  }
  const passordChange = (event)=>{
    setPassword(event.target.value)

  


   }

  const login=()=>{
  
    axios({
            method: 'post',
            url: base_url+'/login',
            data: {
                email: username,
                password: password
            }
        })
        .then(
          (response) => {
          sessionStorage.setItem("id",response.data)
          props.history.push('/home')
}, (error) => {
  console.log(error);

  setlgfailed(true);
}
);
  }



  return(
    <>
  
    <Nav/>
    <h1   align='center' font='bold'>STUDENT SPHERE</h1>
    
   <h3 align='center' font='bold'>Contributors login</h3>
   <div className="login-wrapper">
   <Card>
      <CardImg top width="70%" src={img} height="60%" alt="outreach" />
        <CardBody>
         <div>
           <Input
                type="text"
                value={username}
                id="username"
                placeholder="Username"
                onChange={usernameChange}
            />
         </div>
         <div>
           <Input
                type="password"
                value={password}
                id="password"
                placeholder="Password"
                onChange={passordChange}
            />
         </div>
         <div>
            <Button color="secondary" id ='login' type="button" onClick={login}>Submit</Button>{' '}
         </div>
          { lgfailed && <span>
          Invalid credentials! Try again.
          </span>}
        </CardBody>
      </Card>
     
    
   </div>
   </>
  );
};


export default Login;
