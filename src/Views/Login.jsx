import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';


const LoginForm = () => {

   
    const [values, setValues] = useState({
      username:"",
      password:""
    })


    const [error, setError] = useState('')
    const navigate = useNavigate()
  
   function handleSubmit (e){
    e.preventDefault();
    axios.post('http://localhost:3001/login', values)
     .then (res => {
      if(res.data.status === "Succes"){
          navigate('/')
      } else {

        setError(res.data.error);

      }
     })
          .catch(err => console.log(err));
   }
  return (


        <form  className="login" onSubmit={handleSubmit}>
        <h2 className='autodeal'>AUTODEAL</h2>
      <div className="text-danger p-text2">{error && error}</div>
      <br />
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
           onChange={e => setValues({...values, username: e.target.value})}/>
      </div>


      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={e => setValues({...values, password: e.target.value})}
        />
      </div>
      <button type="submit">Login</button>
      <p className='p-text'>You are Agree to our terms and policies.</p>
    </form>
  );
};

export default LoginForm;
