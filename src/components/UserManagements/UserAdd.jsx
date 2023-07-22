import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Link, useNavigate, } from 'react-router-dom';
import axios from 'axios';








const UserAdd = () => {

    const [data, setData] = useState({
		fullname: '',
		email: '',
		username: '',
		password: '',
		position: '',
		age: '',
        salary: '',
        image: ''
        
	})

    const [file, setFile] = useState();
    const handleFile = (e) => {
     setFile(e.target.files[0])
    }
	const navigate = useNavigate()

	const handleSubmit = (event) => {
		event.preventDefault();
		const formdata = new FormData();
		formdata.append("fullname", data.fullname);
		formdata.append("email", data.email);
		formdata.append("username", data.username);
		formdata.append("password", data.password);
		formdata.append("position", data.position);
		formdata.append("age", data.age);
        formdata.append("salary", data.salary);
        formdata.append("image", file);
		axios.post('http://localhost:3001/adduser', formdata)
		.then(res => {
			navigate('/userManagements')
		})
		.catch(err => console.log(err));
	}
  return (

    <Card className='space' >
    <h1 className='add-stocks'>Create Admin Account</h1>
    <form className='form-card'  onSubmit={handleSubmit}>

     <div className='mb-2'>
         <label htmlFor="">Full name</label>
         <input type="text" className='form-control mb-2'
          onChange={e => setData({...data, fullname: e.target.value})}/>
     </div>

     <div className='mb-2'>
         <label htmlFor="">Email</label>
         <input type="Email" className='form-control mb-2'
          onChange={e => setData({...data, email: e.target.value})}/>
     </div>
     <div className='mb-2'>
         <label htmlFor="">User Name</label>
         <input type="text" className='form-control mb-2'
          onChange={e => setData({...data, username: e.target.value})}/>
     </div>
     <div className='mb-2'>
         <label htmlFor="">Password</label>
         <input type="Password" className='form-control mb-2'
           onChange={e => setData({...data, password: e.target.value})}/>
     </div>

     <div className='mb-2'>
         <label htmlFor="">Position</label>
         <input type="text" className='form-control mb-2'
           onChange={e => setData({...data, position: e.target.value})}/>
     </div>

     <div className='mb-2'>
         <label htmlFor="">Date of birth</label>
         <input type="date" className='form-control mb-2'
           onChange={e => setData({...data, age: e.target.value})}/>
     </div>
     <div className='mb-2'>
         <label htmlFor="">Salary</label>
         <input type="text" className='form-control mb-2'
           onChange={e => setData({...data, salary: e.target.value})}/>
     </div>
     <div className='mb-2'>
         <label htmlFor="">Upload Picture</label>
         <input type="file" className='form-control mb-2'
           onChange={handleFile}/>
     </div>

      <div>
     <button className='btn btn-sub-3 btn-primary '>Submit</button>
     </div>
     <div>
     
     </div>
    
    </form>
    <Link to="/userManagements" className='btn btn-sub-2 btn-primary'>cancel</Link>

    

    </Card>

  )
}

export default UserAdd