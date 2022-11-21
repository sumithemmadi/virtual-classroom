import './style.css'
import React from "react";
// import Logo from "../home/images/google-classroom-icon.svg";
// import G_logo from "../home/images/icons8-google.svg";
import NavBar from '../../components/NavBar';
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';

import { UserAuth } from '../../context/AuthContext';

const JoinClassroom = () => {
    const { user } = UserAuth();
    return (
        <div className='d_main'>
            <div className='home_session'>
                <NavBar />
                <div className="App-home1">
                    <form>
                        <div class="create-classroom-form-container">
                            <div>
                                <h1>Join classroom</h1>
                            </div>
                            <div>
                                <label>Classroom ID</label>
                                <br></br>
                                <input type="text" placeholder="Enter Classroom ID" className='input-field' name="classid" />
                                <br></br>
                            </div>
                            <div>
                                <button type="submit" className='button'>Join</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JoinClassroom;

