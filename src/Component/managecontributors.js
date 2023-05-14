import React from "react";
import Nav from 'react-bootstrap/Nav'
import logout from './icon/logout.png'
import { Card, CardImg} from 'reactstrap';
import "/home/anisha/Desktop/outreach-portal-frontend-master/src/Component/css/managecontributors.css";
import { useHistory } from 'react-router-dom';
import { CardBody} from 'reactstrap';



const Managecontributors=()=>{
  const history = useHistory();

    const headingStyle = {
        textAlign: 'center'
      }
      const logoutCall=()=>{
        sessionStorage.clear();
    
      }

      const navigateadd = () => {
        
        history.push('/addcontributor');
      }

    return  (
        <>
        <div className="login-wrapper">
    <Card>
    <CardBody>
   
     
     <div>
    <h1 style={headingStyle} color='blue'>ADD Contributors</h1>
    <button type="button" onClick={navigateadd}class="butt">Add Contributors</button>
  </div>
  
<nav>
  <Nav.Link href="/Admin_login" onClick={logoutCall} style={{ display: 'flex', alignItems: 'center' }}>
 <img src={logout} className='icon' alt="notification" style={{ margin: '0 auto' }} />
  </Nav.Link>
</nav>

</CardBody>
</Card>
</div>
</>
    )
}
export default Managecontributors;