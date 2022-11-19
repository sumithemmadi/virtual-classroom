import './style.css'
import React from "react";
import Logo from "./images/google-classroom-icon.svg";
import G_logo from "./images/icons8-google.svg";

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
                    <div className="home-message">
                        <h1>
                            Where teaching and learning come together
                        </h1>
                        <p>Virtual Classroom is your all-in-one place for teaching and learning. Our easy-to-use and secure tool helps educators manage, measure, and enrich learning experiences.</p>
                        <div className='btn-class'>
                            <a href="/login" target="_self" rel="noreferrer" className='btn-anchor'>
                                <button className="button">Get Started</button>
                            </a>
                            <a href="/login" target="_self" rel="noreferrer" className='btn-anchor'>
                                <button className="button login-btn">
                                    <img src={G_logo} alt="google logo" className='google-logo' />
                                    <span>Sign in to Classroom</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}