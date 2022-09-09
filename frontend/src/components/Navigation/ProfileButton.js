// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const closeMenu = (e) => {
      if(e.path[0].tagName !== "I"){
        setShowMenu(false);
      }
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/')
  };

  return (
    <>
      <button onClick={openMenu} className='profileBttn'>
        <i className="fa-solid fa-user" />
      </button>
      {showMenu && (
          <div className="dropdown-content">
            <div id='pointer-arrow'> </div>
            <div className="profile-dropdown">
              <NavLink className="link-profile" to={`/${user.username}`}>
                <p> <i className="fa-regular fa-circle-user"></i> My Profile </p>
              </NavLink>
              <ul>
                <p onClick={logout} className="logoutBttn">
                  <i className="fa-solid fa-arrow-right-from-bracket"></i>
                  Logout
                </p>
              </ul>
            </div>
          </div>
      )}
    </>
  );
}

export default ProfileButton;
