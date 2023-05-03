import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import './Register.css'
import { AuthContext } from '../../provider/AuthProvider';
import { updateProfile, getAuth } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const auth = getAuth(app);
const Register = () => {
    const [show, setShow] = useState(false);
    const [error, setError] = useState('');
    const {createUser} = useContext(AuthContext)

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name =  form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        setError('');
        if (password.length < 6) {
          setError('Password must be at least 6 characters');
          return;
        }

        createUser(email, password)
        .then(result => {
          const loggedUser = result.user;
          console.log(loggedUser);
          updateUserData(result.user, name, photoURL);
        })
        .catch(error => {
          console.log(error)
          setError(error.message);
        })
    }

    const updateUserData = (user, name, photoURL) =>{
      updateProfile(user, {
        displayName:name, 
        photoURL:photoURL,
      })
      .then(() => {
        console.log("user name updated successfully");
      })
      .catch((error) => {
        setError(error.message);
      })
    }

    return (
        <div className="form_container">
      <h2 className="form__title mt-8">Please Register</h2>
      <form onSubmit={handleRegister}>
        <div className="form-control">
          <label htmlFor="text">Name</label>
          <input type="text" name="name" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="text">Photo URL</label>
          <input type="text" name="photo" id="" required />
        </div>
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
        <input className="btn__submit" type="submit" value="Sign Up" />
      </form>
      <p><small>Already have an account? <Link to="/login" className='text-yellow-500'>Login</Link></small></p>
      <p className="text-red-600">{error}</p>
    </div>
    );
};

export default Register;