// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

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
          <div className="profile-dropdown">
            <div className="dropdown-info"> Welcome, {user.username}</div>
            <div className="dropdown-info">{user.email}</div>
            <ul>
              <button onClick={logout} className="logoutBttn">
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
              </button>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileButton;
