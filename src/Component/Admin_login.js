import React,{useState,useEffect} from 'react'
import './css/login.css'
import axios from "axios";
import base_url from "./api"
import { Button, Input, CardBody} from 'reactstrap';
import { Card, CardImg} from 'reactstrap';
import logout from './icon/logout.png'
import Nav from 'react-bootstrap/Nav'
import img from './admin.png';




const Admin_login = (props)=>{

  useEffect(()=>{

  let id = sessionStorage.getItem("id")
  if(id)
  {
    props.history.push('/managecontributors')
  }


  },[props.history])


  const [username1,setUsername] = useState("")
  const [password1,setPassword] = useState("")
  const [lgfailed1,setlgfailed] = useState(false)

  const usernameChange = (event)=>{
    setUsername(event.target.value)
   

  }
  const passordChange = (event)=>{
    setPassword(event.target.value)



  }
  const logoutCall=()=>{
    sessionStorage.clear();

  }

  const login=(event)=>{
   
    axios({
            method: 'post',
            url: base_url+'/adminlogin',
            data: {
                userName: username1,
                password: password1
            }
        })
        .then(
          (response) => {
            if(response.data==="sucess") {
              sessionStorage.setItem("id",response.data)
              props.history.push('/managecontributors')
          }
          else
          {
              alert('Invalid Credentials');

          }
}, (error) => {
  console.log(error);
 setlgfailed(true);
}
);
  }



  return(
    <>
   
   <div className="login-wrapper">
    
    <Card>
    <h1 align='center' font='bold'>Admin Login</h1>
      <CardImg top width="20%" src={img} height="55%" alt="outreach" />
      
        <CardBody>
         <div>
           <Input
                type="text"
                value={username1}
                id="username"
                placeholder="Username"
                onChange={usernameChange}
            />
         </div>
         <div>
           <Input
                type="password"
                value={password1}
                id="password"
                placeholder="Password"
                onChange={passordChange}
            />
         </div>
         <div>
            <Button color="secondary" id ='login' type="button" onClick={login}>Submit</Button>{' '}
         </div>
          { lgfailed1 && <span>
          Invalid credentials! Try again.
          </span>}

<nav>
  
  <Nav.Link href="/login" onClick={logoutCall} style={{ display: 'flex', alignItems: 'center' }}>
 <img src={logout} className='icon' alt="notification" style={{ margin: '0 auto' }} />
  </Nav.Link>
</nav> 

        </CardBody>
      </Card>
     
    
   </div>
   </>
  );
};


export default Admin_login;
