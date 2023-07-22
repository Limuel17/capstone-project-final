import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import { BiLogOut } from 'react-icons/bi';
import '../Styles/header.css'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';








function Header() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar className="bg-primary">
    <Container>
    
       <div className="d-inline-block align-top logo-title ">
       <h3 className='logo-title1'>AUTODEAL</h3>
       <h4 className='logo-title2'>INVENTORY SYSTEMS</h4>
       </div>

       <Link  className='my-link' style={{color: "white", textDecoration: "none"}} onClick={handleShow}><BiLogOut/>Logout</Link>
       
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Account Signout</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to sign out?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Link style={{textDecoration: "none"}} to={'/login'}variant="primary" className='btn btn-primary' onClick={handleClose}>
            Signout
          </Link>
        </Modal.Footer>
      </Modal>
   
      
    </Container>
  </Navbar>
  );
}

export default Header;