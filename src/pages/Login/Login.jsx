import React, { useContext, useRef, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo1 from '../../images/google.png'
import logo2 from '../../images/github.png'
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState('');
  const { googleSignIn, githubSignIn, signIn, resetPassword } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef();
  console.log('login page location', location);

  const from = location.state?.from?.pathname || "/"

  const handleLogIn = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    setError('')
    signIn(email, password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      navigate(from, { replace: true });
    })
    .catch(error => {
        setError(error.message);
        console.log(error);
    })
  };

  const handleResetPassword = (event) => {
    const email = emailRef.current.value;
    if (!email) {
      toast('Please provide  your email address to reset password');
      return;
    }
    resetPassword(email)
    .then( () => {
      toast('Please check your email');
    })
    .catch(error => {
      console.log(error);
      setError(error.message);
    })
  };

  const handleGoogleSignIn = () => {

      setError('')
      googleSignIn()
      .then(result => {
        const logUser = result.user;
        console.log(logUser);
        navigate(from, { replace: true });
      })
      .catch(error => {
        setError(error.message);
          console.log(error);
      })
  }

  const handleGithubSignIn = () => {

    setError('')
    githubSignIn()
    .then(result => {
      const logUser = result.user;
      console.log(logUser);
      navigate(from, { replace: true });
    })
    .catch(error => {
      setError(error.message);
        console.log(error);
    })
  }
  return (
    <>
      <div className="form__container">
        <h2 className="form__title mt-8 mb-2">Please Login</h2>
        <form onSubmit={handleLogIn}>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="email"
              name="email"
              ref={emailRef}
              id=""
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type={show ? "text" : "password"}
              placeholder="password"
              name="password"
              id=""
              required
            />
            <p onClick={() => setShow(!show)}>
              <small>
                {show ? <span>Hide Password</span> : <span>Show Password</span>}
              </small>
            </p>
          </div>
          <input className="btn__submit" type="submit" value="Login" />
        </form>
        <p>
        <small>
          Forget PassWord? Please{" "}
          <button onClick={handleResetPassword} className="btn btn-link btn-xs text-gray-600 mt-4">
            Reset Password
          </button>
        </small>
      </p>
        <p>
          <small>
            New to Tastebite?{" "}
            <Link to="/register" className="text-gray-600 font-semibold">
              Create an Account
            </Link>
          </small>
        </p>
        {error && <p className="text-red-500">{error}</p>}
      </div>
      <div className="text-center mb-4 flex justify-center items-start">
        <hr className="line"/>
      <p className="text-lg -mt-3 mx-1">Or</p>
      <hr className="line"/>
      </div>
      <div onClick={handleGoogleSignIn} className="text-center login-google flex items-center gap-2 mx-auto">
      <img className="w-6 h-6 ml-4" src={logo1} alt="" />
        <button className="ml-14">Continue with Google</button>
      </div>
      <div onClick={handleGithubSignIn} className="text-center login-google flex items-center gap-2 mx-auto my-6">
      <img className="w-6 h-6 ml-4" src={logo2} alt="" />
        <button className="ml-14">Continue with GitHub</button>
      </div>
      <ToastContainer/>
    </>
  );
};

export default Login;