import './style.css'
import './Class.css'
import React from "react";
// import Logo from "../home/images/google-classroom-icon.svg";
// import G_logo from "../home/images/icons8-google.svg";
import NavBar from '../../components/NavBar';
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';

import { UserAuth } from '../../context/AuthContext';

const Class = () => {
    const { user } = UserAuth();
    return (
        <div className='d_main'>
            <div className='home_session'>
                <NavBar />
                <div className="App-home2">
                    <div className='PFLqgc'>
                        <div class="VVnuU ra2NV ee1HBc">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Class;

