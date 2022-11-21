import './NavBar.css'
import React from "react";
import Logo from "../pages/Dashboard/images/google-classroom-icon.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UserAuth } from '../context/AuthContext';

const NavBar = () => {
    // const [open, setOpen] = React.useState(false);

    // const handleOpen = () => {
    //     setOpen(!open);
    // };
    const { logOut, user } = UserAuth();

    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <nav className='navbar1'>
            <div className='logo-container'>
                <img src={Logo} className="logo" alt="logo" height={40} width={40} />
                <h1>VIRTUAL CLASSROOM</h1>
                <FontAwesomeIcon icon={["fa-solid","fa-house"]} />

            </div>
            <div className='buttons'>
                <div className="dropdown">
                    <button className="dropbtn button">+</button>
                    <div className="dropdown-content">
                        <a href='/join_classroom' >Join Classroom</a>
                        <a href='/create_classroom'>Create Classroom</a>
                    </div>
                </div>
                <button className="button login-btn" onClick={handleSignOut}>
                    <img src={user.photoURL} alt="person logo" className='user-logo' />
                    <span>LogOut from {user.email} </span>
                </button>
            </div>
        </nav>
    );
}

export default NavBar;