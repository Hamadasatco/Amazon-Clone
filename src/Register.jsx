import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from "./firebase";
import "./css/Register.css";

function Register() {
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth);
        })
        .catch(error => alert(error.message));

        if (auth) {
            navigate('/');
        }
    }

  return (
    <div className="register">
        <Link to="/">
            <img className='register_logo' src="https://i.ibb.co/FhJB3Gv/amazon.png"
            alt="amazon logo" />
        </Link>
        <div className="register_container">
            <h1>Create account</h1>
            <form action="">
                <h5>Your name</h5>
                <input type="text" />
                <h5>Mobile number or email</h5>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                <h5> Password </h5>
                <input type="password"/>
                <h6><strong>i</strong> Passwords must be at least 6 characters.</h6>
                <h5>Re-enter password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <button onClick={register} type='submit' className='registerContinue_button'>Continue</button>
            </form>
            <p>
                By creating an account, you agree to Amazon's Conditions of Use and Privacy Notice.
            </p>
            <div>Already have an account?<Link to="/login">Sign in</Link></div>
            <div>Buying for work?<p>Create a free business account</p></div>
        </div>
    </div>
  );
}

export default Register;