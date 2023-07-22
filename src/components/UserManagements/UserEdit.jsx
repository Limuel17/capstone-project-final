import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';









const UserEdit = () => {

  const [fullname, setFullname] = useState('');
const [email, setEmail] = useState('');
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [position, setPosition] = useState('');
const [age, setAge] = useState('');
const [salary, setSalary] = useState('');
const [image, setFile] = useState('');









  const {userid} = useParams ();
  
  useEffect(() => {
    axios.get('http://localhost:3001/userget/'+userid)
    .then(res => {
        
     setFullname(res.data[0].fullname);
      setEmail(res.data[0].email);
     setUsername(res.data[0].username);
     setPassword(res.data[0].password);
    setPosition(res.data[0].position);
    setAge(res.data[0].age);
    setSalary(res.data[0].salary)
    setFile(res.data[0].image)
    })
    .catch(err => console.log(err));
     
}, [])
 

  
      




  const navigate = useNavigate();

    const handleSubmit = (e) => {
		e.preventDefault();
		axios.put('http://localhost:3001/userupdate/'+userid, {fullname, email, username, password, position, age, salary, image})
		.then(res => {
			if(res.data.Status === "Success") {
				navigate('/userManagements')
			}
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
           value={fullname} onChange={e => setFullname(e.target.value)}/>
     </div>

     <div className='mb-2'>
         <label htmlFor="">Email</label>
         <input type="Email" className='form-control mb-2'
          value={email} onChange={e => setEmail(e.target.value)} />
     </div>
     <div className='mb-2'>
         <label htmlFor="">User Name</label>
         <input type="text" className='form-control mb-2'
          value={username} onChange={e => setUsername(e.target.value)} />
     </div>
     <div className='mb-2'>
         <label htmlFor="">Password</label>
         <input type="Password" className='form-control mb-2'
           value={password} onChange={e => setPassword(e.target.value)} />
     </div>

     <div className='mb-2'>
         <label htmlFor="">Position</label>
         <input type="text" className='form-control mb-2'
           value={position} onChange={e => setPosition(e.target.value)} />
     </div>

     <div className='mb-2'>
         <label htmlFor="">Date of birth</label>
         <input type="date" className='form-control mb-2'
           value={age} onChange={e => setAge(e.target.value)} />
     </div>
     <div className='mb-2'>
         <label htmlFor="">Salary</label>
         <input type="text" className='form-control mb-2'
           value={salary} onChange={e => setSalary(e.target.value)} />
     </div>
     <div className='mb-2'>
         <label htmlFor="">Upload Picture</label>
         <input type="file" className='form-control mb-2'
           value={image} onChange={e => setFile(e.target.value[0])} />
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

export default UserEdit