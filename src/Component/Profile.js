import React,{useEffect,useState} from 'react'
import Header from './Header'
import './css/home.css'
import axios from "axios"
import Card from 'react-bootstrap/Card'
import base_url from "./api"
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

const Profile=(props)=>{
  let id = sessionStorage.getItem("id")
  let key = props.location.state
  const [info,setInfo] = useState({})
  console.log("keyis::",props.location.state)



  useEffect(()=>{
    if(!id)
      props.history.push('/login')
    if(!key || key==id)
        key=id
        console.log("key1is::",props.location.state)
      axios({
               method: 'post',
               url: base_url+'/Profile',
               headers: { "Content-Type": "text/plain" },
               data: key

           })
           .then(
             (response) => {
               setInfo(response.data);


   }, (error) => {
     console.log(error);

   }
   );

  

 },[id,props,key])

  const editProfile=()=>{
    props.history.push('/editProfile')
  }

  const message=()=>{
    props.history.push({pathname: '/message', state: key })
  }

  return <div><Header history={props.history} />
  <div className="bg">
  <Card>
  <Card.Body>
  <Card.Text style={{textAlign:"center"}}><img alt="profile_pic" src={info.profile_pic} className='main-profile-pic'/></Card.Text>
  <Card.Title style={{textAlign:"center"}}>{info.name}</Card.Title>
  <Card.Text style={{textAlign:"center"}}>{!key || key==id?<Button onClick={editProfile}>Edit Profile</Button>:<Button onClick={message}>Message</Button>}</Card.Text>
  <div style={{justifyContent:"center",display:"flex"}}>
  <table style={{alignSelf:"center"}}>
  {!info.role && <tr><td>Program &nbsp;:&nbsp;</td><td>{info.program}</td></tr>}
  {!info.role && <tr><td>Batch &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;</td><td>{info.batch}</td></tr>}
  {!info.role && <tr><td>Roll no &nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;</td><td>{info.roll_no}</td></tr>}
  <tr><td>Interest &nbsp;&nbsp;&nbsp;:&nbsp;</td><td>{info.interest}</td></tr>
  <tr><td>About &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;</td><td>{info.about}</td></tr></table></div>
  </Card.Body></Card>

  </div>
  </div>
}

export default Profile;
