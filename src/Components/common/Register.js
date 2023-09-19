import React, { useState } from "react";
import './style.css'
import { useNavigate } from "react-router";
const Register = (props) => {
  const navigate = useNavigate();
  const [input,setInput] = useState({
      name : '',
      email : '',
      password : '',
  })

    const handleRegister = (e) => {
        e.preventDefault();
        localStorage.setItem('user',JSON.stringify(input));
        navigate('/login');
    }

    return (
        <div className="auth-form-container">
          <h2>Sign up!</h2>
        <form className="register-form" onSubmit={handleRegister}>
          <fieldset class ="space">
            <legend>Full name</legend>
            <input value={input.name} name="name" onChange={(e) => setInput({...input,[e.target.name]:e.target.value})} id="name" placeholder="full Name" /></fieldset>
            <fieldset class ="space">
            <legend>Email</legend>
            <input value={input.email} onChange={(e) => setInput({...input,[e.target.name]:e.target.value})} type="email" placeholder="youremail@gmail.com" id="email" name="email" /></fieldset>
            <fieldset >
            <legend>Password</legend>
            <input value={input.password} onChange={(e) => setInput({...input,[e.target.name]:e.target.value})}  type="password" placeholder="Enter your password" id="password" name="password" /></fieldset>
            <button type="submit">Sign Up</button>
        </form>
        
    </div>
    )
}

export default Register