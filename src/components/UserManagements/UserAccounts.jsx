import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import './UserAccount.css'
import { BsPersonAdd } from 'react-icons/bs';





function UserAccounts() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/getuser')
            .then(res => {
                if (res.data.Status === "Success") {
                    setData(res.data.Result);
                } else {
                    alert("Error");
                }
            })
            .catch(err => console.log(err));
    }, []);


    const handleDelete = (userid) => {
        axios.delete('http://localhost:3001/userdelete/'+userid)
        .then(res => {
          if(res.data.Status === "Success") {
            window.location.reload(true);
          } else {
            alert("Error")
          }
        })
        .catch(err => console.log(err));
      }


    return (
        <div>
            <h1>User Managements</h1>
            <br />
            <Link to={'/useradd'} className='btn btn-primary btn-user'> <BsPersonAdd className='icon-btn'/>Add User</Link>

            <div >
            <Table striped bordered hover className='table-1 '>
                <thead >
                    <tr>
                        <th>ID#</th>
                        <th>Profile</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Position</th>
                        <th>Salary</th>
                        <th>Date Hired</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody className='col align-self-center'>

                    {data.map((user, i) => {
                        return <tr key={i}>
                            <td className='descrip'>{user.userid}</td>
                            <td>{
                    <img src={`http://localhost:3001/image/`+user.image} alt="" className='user_image'/>
                    }</td>
                            <td className='descrip'>{user.fullname}</td>
                            <td className='descrip'>{user.email}</td>
                            <td className='descrip'>{user.username}</td>
                            <td className='descrip'>{user.position}</td>
                            <td className='descrip'>{user.salary}</td>
                            <td className='descrip'>{user.age}</td>
                            <td className='descrip '>
                                <Link to={`/useredit/`+user.userid} className='btn btn-primary btn-55'>User Edit</Link>
                                <Button onClick={e => handleDelete(user.userid)} className='btn btn-danger btn-55'>delete</Button>
                            </td>
                        </tr>

                    })}

                </tbody>
            </Table>
            </div>

        </div>
    );
}

export default UserAccounts