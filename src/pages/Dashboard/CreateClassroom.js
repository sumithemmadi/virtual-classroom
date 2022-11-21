import './style.css'
import React from "react";
// import Logo from "../home/images/google-classroom-icon.svg";
// import G_logo from "../home/images/icons8-google.svg";
import NavBar from '../../components/NavBar';
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';

import { UserAuth } from '../../context/AuthContext';

const CreateClassroom = () => {
    const { user } = UserAuth();
    return (
        <div className='d_main'>
            <div className='home_session'>
                <NavBar />
                <div className="App-home1">
                    <form>
                        <div class="create-classroom-form-container">
                            <div>
                                <h1>Create classroom</h1>
                            </div>
                            <div>
                                <label>Classroom Name</label>
                                <br></br>
                                <input type="text" placeholder="Enter Classroom Name" className='input-field' name="classname" />
                            </div>
                            <div>
                                <label>Section</label>
                                <br></br>
                                <input type="text" placeholder="Section" className='input-field' name="section" />
                            </div>
                            <div>
                                <label>Subject</label>
                                <br></br>
                                <input type="text" placeholder="Enter Subject Name" className='input-field' name="subject" />
                                <br></br>
                                <br></br>
                            </div>
                            <div>
                                <button type="submit" className='button'>Submit</button>
                                <a type="submit" href='/' style={{"background-color":"red","text-decoration":"none"}} className='button'>Cancel</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateClassroom;

