import React, { useState } from 'react';
import './Login.css'
import { Link } from "react-router-dom";

const Login = () => {
    const [show, setShow] = useState(false);

    const handleLogIn = event => {
        event.preventDefault();

        const form = event.target;
        const email =  form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }
    return (
        <div className="form__container">
      <h2 className="form__title mt-6">Please Login</h2>
      <form onSubmit={handleLogIn}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder='email' name="email" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type={show ? 'text' : 'password'} placeholder='password' name="password" id="" required />
          <p onClick={()=>setShow(!show)}><small>
            {
              show ? <span>Hide Password</span> : <span>Show Password</span>
            }
            </small></p>
        </div>
        <input className="btn__submit" type="submit" value="Login" />
      </form>
      <p><small>New to Tastebite? <Link to="/register">Create new Account?</Link></small></p>
    </div>
    );
};

export default Login;