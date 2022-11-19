import './style.css'
import React,{ useState } from "react";
// import Logo from "../home/images/google-classroom-icon.svg";
// import G_logo from "../home/images/icons8-google.svg";
import NavBar from './Navbar';
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
import joiningClass from './joiningClass';


import { UserAuth } from '../../context/AuthContext';

const Dashboard = () => {
    const {  user } = UserAuth();

    const [isShowPopup, setIsShowPopup] = useState(true);

    const handlePopupClick = () => {
        setIsShowPopup((isShowPopup) => !isShowPopup);
    };

    return (
        <div className='d_main'>
            <div className='home_session'>
            <NavBar handleLoginClick={handlePopupClick} />
            <joiningClass isShowLogin={isShowPopup} />
                <div className="App-home">
                    <img src={user.photoURL} alt="person logo" className='user-logo' style={{ width: 200 }} />
                    <p>Welcome, {user?.displayName}</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

