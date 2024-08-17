import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AuthContext } from '../../context/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

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
        <Navbar.Brand href="/" style={{marginLeft:'50px'}}>Task Master</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav style={{marginLeft:'50%'}}>
            {
              user?.uid?<Link><Button style={{marginLeft:'10px',marginTop:'2px',}}  onClick={handleLogOut}>Log out</Button></Link>:<Link to="/login"><Button style={{marginLeft:'10px',marginTop:'2px'}} >Log In</Button></Link>

            }
            <Link to="/register">
            <Button style={{marginLeft:'10px',marginTop:'2px'}} >Register</Button>
            </Link>
            {
              user?.displayName&&<Nav.Link style={{color:'black',fontSize:'20px'}}>{user.displayName}</Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavbarHeader;