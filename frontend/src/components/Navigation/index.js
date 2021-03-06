// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';


function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/signup">
          <button id='signUp'>Sign Up</button>
        </NavLink>
        <LoginFormModal />
      </>
    );
  }

  return (
    <ul className='navBar'>
        <NavLink exact to="/" id="logo">
            <img src='https://i.postimg.cc/cCj31P7X/avatars-zw-Nz-H3c8szb-ZEmg-D-h-APmvw-t500x500.jpg' alt="logoImg" id="logoImg"></img>
        </NavLink>
        {isLoaded && sessionLinks}
        <NavLink to="/beaches">
          <button id="beachesLink">
            Beaches
          </button>
        </NavLink>
    </ul>
  );
}

export default Navigation;
