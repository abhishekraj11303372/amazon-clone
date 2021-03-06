import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import logo from './amazon_login_logo.png'
import { auth } from './firebase';
import './Login.css'

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth => {
                navigate('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth) => {
                console.log(auth);
            })
            .catch(error => alert(error.message))

            if (auth) {
                navigate('/')
            }
    }

    return (
        <div className='login'> 
            <Link to='/'>
                <img className='login_logo' src={logo} alt="Amazon"/> 
            </Link>
            
            <div className='login_container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>Email or mobile phone number</h5>
                    <input type='text' value={email}  onChange={e => setEmail(e.target.value)}/>
                    
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                    <button type='submit' onClick={signIn}>Sign In</button>
                </form>

                <p>By continuing, you agree to Amazon's clone Conditions of Use and Privacy Notice.</p>

                <button onClick={register}>Create your Amazon Clone Account</button>
            </div>
        </div>
    )
}

export default Login
