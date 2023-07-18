import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import { Toggle } from "rsuite";
import '../Styles/Usermanagement.css'
import { FaPencilAlt, FaPlus, FaTrashAlt } from "react-icons/fa";
import Sidebar from "../components/Sidebar";


 const UserManagement = () => {
  const defaultUsers = [
    {
      id: 1,
      name: "Matthew Brown",
      address: "Sta. Rosa, Laguna",
      age: "26",
      position: "Software Engineer",
      number: "09992314571",
      email: "matthew_brown10@gmail.com",
    },
    {
      id: 2,
      name: "John Hawkins",
      address: "Pasay City",
      age: "30",
      position: "Software Engineer",
      number: "09609876254",
      email: "hawkins_21@gmail.com",
    },
    {
      id: 3,
      name: "Mark Brondia",
      address: "Bulacan",
      age: "24",
      position: "Web Developer",
      number: "09660786816",
      email: "mark17@gmail.com",
    },
  ];

  const initCurrentUser = {
    id: null,
    name: "",
    address: "",
    age: "",
    position: "",
    number: "",
    email: "",
  };

  const [users, setUsers] = useState(defaultUsers);
  const [show, setShow] = useState(false);
  const [newUser, setNewUser] = useState(initCurrentUser);
  const [showCreateBtn, setShowCreateBtn] = useState(true);
  const [editing, setEdit] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
    if (editing === false) {
      setNewUser(initCurrentUser);
    }
  };

  const onFormSubmit = (newUser) => {
    const id = users.length + 1;
    setUsers([...users, { ...newUser, id }]);
  };

  const onEdit = (newUser) => {
    setEdit(true);
    if (editing === true) {
      setNewUser({ ...newUser, newUser });
      handleShow();
    }
  };

  const onSubmit = (newUser) => {
    if (editing === true) {
      onUpdateUser(newUser);
    } else {
      onFormSubmit(newUser);
    }
  };

  const onUpdateUser = (newUser) => {
    setEdit(false);
    let id = newUser.id;
    setUsers(users.map((i) => (i.id === id ? newUser : i)));
  };

  const onDeleteUser = (currentUser) => {
    setUsers(users.filter((i) => i.id !== currentUser.id));
  };

  return (

   <Sidebar>
    <Container fluid="md" className="userman">
      <Row className="row-1">
        <Col>
          <Card className="customCard">
            <Card.Body>
              <div className="d-flex justify-content-between customCardBody">
                <div>
                  <Card.Title><h3>User Data</h3></Card.Title>
                </div>
                <div className="d-flex">
                  <Toggle
                    className="userToggleBtn"
                    checked={showCreateBtn}
                    onClick={(e) => {
                      e.preventDefault();
                      setShowCreateBtn(!showCreateBtn);
                    }}
                  />
                  {showCreateBtn ? (
                    <Button
                      variant="primary"
                      onClick={handleShow}
                      title="Add User"
                    >
                      <FaPlus />
                    </Button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th style={{ textAlign: 'center' }}>Id</th>
                    <th style={{ textAlign: 'center' }}>Name</th>
                    <th style={{ textAlign: 'center' }}>Address</th>
                    <th style={{ textAlign: 'center' }}>Age</th>
                    <th style={{ textAlign: 'center' }}>Position</th>
                    <th style={{ textAlign: 'center' }}>Phone</th>
                    <th style={{ textAlign: 'center' }}>Email</th>
                    <th style={{ textAlign: 'center' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.length > 0 ? (
                    users.map((user, index) => (
                      <tr key={index}>
                        <td style={{ textAlign: 'center' }}>{user.id}</td>
                        <td style={{ textAlign: 'center' }}>{user.name}</td>
                        <td style={{ textAlign: 'center' }}>{user.address}</td>
                        <td style={{ textAlign: 'center' }}>{user.age}</td>
                        <td style={{ textAlign: 'center' }}>{user.position}</td>
                        <td style={{ textAlign: 'center' }}>{user.number}</td>
                        <td style={{ textAlign: 'center' }}>{user.email}</td>
                        <td style={{ textAlign: 'center' }}>
                          <Button
                            variant="info"
                            title="Edit user details"
                            onClick={() => onEdit(user)}
                          >
                            <FaPencilAlt />
                          </Button>{" "}
                          <Button
                            variant="danger"
                            title="Delete user"
                            onClick={() => onDeleteUser(user)}
                          >
                            <FaTrashAlt />
                          </Button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="text-center">
                        No users found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </Card.Body>
          </Card>

          <Modal size="lg" show={show} onHide={handleClose}>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                onSubmit(newUser);
              }}
            >
              <Modal.Header closeButton>
                {editing === true ? (
                  <Modal.Title>Edit User</Modal.Title>
                ) : (
                  <Modal.Title>Add User</Modal.Title>
                )}
              </Modal.Header>
              <Modal.Body>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={newUser.name}
                    required
                    onChange={(e) =>
                      setNewUser({ ...newUser, name: e.target.value })
                    }
                    placeholder="Enter Name"
                    style={{ width: '100%' }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    value={newUser.address}
                    onChange={(e) =>
                      setNewUser({ ...newUser, address: e.target.value })
                    }
                    placeholder="Enter Address"
                    style={{ width: '100%' }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAge">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    type="number"
                    value={newUser.age}
                    onChange={(e) =>
                      setNewUser({ ...newUser, age: e.target.value })
                    }
                    placeholder="Enter Age"
                    style={{ width: '100%' }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPosition">
                  <Form.Label>Position</Form.Label>
                  <Form.Control
                    type="text"
                    value={newUser.position}
                    onChange={(e) =>
                      setNewUser({ ...newUser, position: e.target.value })
                    }
                    placeholder="Enter Position"
                    style={{ width: '100%' }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPosition">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    value={newUser.number}
                    onChange={(e) =>
                      setNewUser({ ...newUser, number: e.target.value })
                    }
                    placeholder="Enter Phone Number"
                    style={{ width: '100%' }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    value={newUser.email}
                    onChange={(e) =>
                      setNewUser({ ...newUser, email: e.target.value })
                    }
                    placeholder="Enter Email"
                    style={{ width: '100%' }}
                  />
                </Form.Group>
                
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                {editing === true ? (
                  <Button variant="primary" type="submit" onClick={handleClose}>
                    Update
                  </Button>
                ) : (
                  <Button variant="primary" disabled={!newUser.name} type="submit" onClick={handleClose}>
                    Submit
                  </Button>
                )}
              </Modal.Footer>
            </Form>
          </Modal>
        </Col>
      </Row>
    </Container>
    </Sidebar>
    
  );
};

export default UserManagement