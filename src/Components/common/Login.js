import React, { useState } from "react";
import './style.css'
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
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
            navigate('/taskboard');
        }
        else{
            alert("Wrong Credentials. Please try again")
        }
    }

    return (
        <div className="container-input">
        <div className="auth-form-container container-login">
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
                <Link to={"/"}>
                    <p className="register">Register</p>
                </Link>
                <button className="lr-btn" type="submit">Log In</button>
            </form>
            
        </div>
        </div>
    )
}

export default Login