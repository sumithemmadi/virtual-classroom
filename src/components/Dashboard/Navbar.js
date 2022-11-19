import './style.css'
import './popup.css'
import React from "react";
import Logo from "../home/images/google-classroom-icon.svg";
// import G_logo from "../home/images/icons8-google.svg";
// import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


import { UserAuth } from '../../context/AuthContext';

const NavBar = ({ handlePopupClick }) => {
    const { logOut, user } = UserAuth();

    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    };
    const handleClick = () => {
        handlePopupClick();
    };
    return (
        <nav className='nav-bar'>
            <div className='logo-container'>
                <img src={Logo} className="logo" alt="logo" height={40} width={40} />
                <h1>VIRTUAL CLASSROOM</h1>
            </div>
            <div className='buttons'>
                <button className="button login-btn1" onClick={handleClick}>+
                </button>
                <button className="button login-btn" onClick={handleSignOut}>
                    <img src={user.photoURL} alt="person logo" className='user-logo' />
                    <span>LogOut from {user.email} </span>
                </button>
            </div>
        </nav>
    );
}

export default NavBar;