
import React from "react";
import Home from "./pages/home/home";
import Dashboard from "./pages/Dashboard/dashboard";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Protected from './components/Protected';
import { AuthContextProvider } from './context/AuthContext';

export default function App() {
  return (
    <Router>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <AuthContextProvider>
            {/* <Navbar /> */}
            <Routes>
              <Route exact path="/" element={<Home />} />
              {/* <Route path="/login" element={<Dashboard />} /> */}
              <Route
                path='/dashboard'
                element={
                  <Protected>
                    <Dashboard />
                  </Protected>
                }
              />
              <Route
                path='/create_classroom'
                element={
                  <Protected>
                    <Dashboard />
                  </Protected>
                }
              />
            </Routes>
          </AuthContextProvider>
        </div>
      </div>
    </Router >
  );
}


