import React, { useState } from "react";
import './style.css'
import { useNavigate } from "react-router";
const Login = (props) => {
    const navigate = useNavigate();
    const [input,setInput] = useState({
        email : '',
        password : '',
    })

    const handleLogin = (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('user'));
        if(input.email===user.email && input.password===user.password){
            localStorage.setItem('loggedin', true);
            navigate('/homepage');
        }
        else{
            alert("Wrong Credentials. Please try again")
        }
    }

    return (
        <div className="auth-form-container ">
            <h2>Log in!</h2>
            <form className="login-form" onSubmit={handleLogin}>
                <fieldset class ="space">
                <legend>Email</legend>
                <input value={input.email} onChange={(e) => setInput({...input,[e.target.name]:e.target.value})}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                </fieldset>
                <fieldset>
                <legend>Password</legend>
                <input value={input.password} onChange={(e) => setInput({...input,[e.target.name]:e.target.value})} type="password" placeholder="Enter your password" id="password" name="password" />
                </fieldset>
   
                <button type="submit">Log In</button>
                
            </form>
            
        </div>
    )
}

export default Login