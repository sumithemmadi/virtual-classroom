
import React from "react";
import Home from "./components/home/home";
import Login from "./components/login/login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { useGoogleLogin } from '@react-oauth/google';


export default function App() {
  return (
    <Router>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/register" element={<SignUp />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}