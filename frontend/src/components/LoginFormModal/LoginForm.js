import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import './loginForm.css'

function LoginForm(props) {
  const history = useHistory()
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  const demoSubmit = (e) => {
    e.preventDefault();
    dispatch(sessionActions.login({credential: 'Guest', password:'password'}))
  }

  const signUp = (e) => {
    e.preventDefault();
    history.push('/signup')
    props.setTrigger(false)
  }

  return (
    <form onSubmit={handleSubmit} className='loginForm'>
      <div id='loginGif'>
        <img id='loginGif' src="https://i.pinimg.com/originals/02/86/c9/0286c975356200b960862134bfc666e3.gif" alt="loginGif"/>
        <h2 className="loginTitle">Log in to Waveyy</h2>
      </div>
      <label id='signUpRed'>New to Waveyy?
        <Link id='signUpLink' to="/signup" onClick={signUp}>
          <label>Sign Up</label>
        </Link>
      </label>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <label>
        Username or Email
        <input
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <div className="logInBttn">
        <button id='loginFormBttn' type="submit">Log In</button>
        <button id='loginGuestBttn' onClick={demoSubmit}>Continue as Guest</button>
      </div>
    </form>
  );
}

export default LoginForm;
