import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from "./firebase";
import { useStateValue } from './StateProvider';
import "./css/Login.css";



function Login() {
    let [{user}] = useStateValue();
    console.log(user);
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            navigate('/');
        })
        .catch(error => alert(error.message));
    }

    // const register = e => {
    //     e.preventDefault();
    //     auth.createUserWithEmailAndPassword(email, password)
    //     .then((auth) => {
    //         console.log(auth);
    //     })
    //     .catch(error => alert(error.message));

    //     if (auth) {
    //         navigate('/');
    //     }
    // }

  return (
    <div className='login'>
        <Link to="/">
            <img className='login_logo' src="https://i.ibb.co/FhJB3Gv/amazon.png"
            alt="amazon logo" />
        </Link>
        <div className="login_container">
            <h1> Sign In </h1>
            <form action="">
                <h5> E-mail </h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                <h5> Password </h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <button type='submit' className='signIn_button' onClick={signIn}> Sign in </button>
            </form>
            <p>By signing in you agree to the Amazon FAKE CLONE Conditions of use & sale.
                Pleas see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>
            <Link to="/register">
                <button  className='login_registerButton'> Create Your amazon Account </button>
            </Link>
        </div>
    </div>
  )
}

export default Login;
