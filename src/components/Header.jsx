import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png'


import '../Styles/header.css'

function Header() {
  return (
    <Navbar className="bg-primary">
    <Container>
    
       <div className="d-inline-block align-top logo-title ">
       <h3 className='logo-title1'>AUTODEAL</h3>
       <h4 className='logo-title2'>INVENTORY SYSTEMS</h4>
       </div>
      
    </Container>
  </Navbar>
  );
}

export default Header;