import './style.css'
import React from "react";
import Logo from "../home/images/google-classroom-icon.svg";
// import G_logo from "../home/images/icons8-google.svg";

export default function home() {
    return (
        <div className='main'>
            <div className='home_session'>
                <nav className='nav-bar'>
                    <div className='logo-container'>
                        <img src={Logo} className="logo" alt="logo" height={40} width={40} />
                        <h1>VIRTUAL CLASSROOM</h1>
                    </div>
                    <a href="/login" target="_self" rel="noreferrer" className='btn-anchor'>
                        <button className="button">Sign in</button>
                    </a>
                </nav>
                <div className="App-home">

                </div>
            </div>
        </div>
    );
}