import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AuthContext } from '../../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

function NavbarHeader() {
  const {logOut,user,setLoader}=useContext(AuthContext)
  const navigate=useNavigate()
  const handleLogOut=()=>{
    logOut()
    .then(()=>{
      navigate('/login')
      setLoader(false)
    })
    .catch((e)=>console.log(e))
  }
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Task Master</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {
              user?.uid?<Button style={{marginLeft:'2px',marginTop:'2px'}}  onClick={handleLogOut}>Log out</Button>:<Button style={{marginLeft:'2px',marginTop:'2px'}} href="/login">Log In</Button>

            }
            <Button style={{marginLeft:'2px',marginTop:'2px'}} href="/register">Register</Button>
          </Nav>
          <Nav>
            {
              user?.displayName&&<Nav.Link href="#deets">{user.displayName}</Nav.Link>
            }
            
            {
              user?.photoURL&&<img style={{height:'50px',width:'50px'}} src={user?.photoURL}></img>
            }            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavbarHeader;