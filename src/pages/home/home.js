import './style.css'
import React, { useEffect } from 'react';
import Logo from "./images/google-classroom-icon.svg";
import G_logo from "./images/icons8-google.svg";
// import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const Signin = () => {
    const { googleSignIn, user } = UserAuth();
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (user != null) {
            navigate('/dashboard');
        }
    }, [navigate, user]);
    return (
        <div className='main'>
            <div className='home_session'>
                <nav className='nav-bar'>
                    <div className='logo-container'>
                        <img src={Logo} className="logo" alt="logo" height={40} width={40} />
                        <h1>VIRTUAL CLASSROOM</h1>
                    </div>
                    <button className="button" onClick={handleGoogleSignIn}>Sign in</button>
                </nav>

                <div className="App-home">
                    <div className="home-message">
                        <h1>
                            Where teaching and learning come together
                        </h1>
                        <p>Virtual Classroom is your all-in-one place for teaching and learning. Our easy-to-use and secure tool helps educators manage, measure, and enrich learning experiences.</p>
                        <div className='btn-class'>
                            <button className="button" onClick={handleGoogleSignIn}>Get Started</button>
                            <button className="button login-btn" onClick={handleGoogleSignIn}>
                                <img src={G_logo} alt="google logo" className='google-logo' />
                                <span>Sign in to Classroom</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;

