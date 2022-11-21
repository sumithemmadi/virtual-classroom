
import React from "react";
import Home from "./pages/home/home";
import Dashboard from "./pages/Dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Protected from './components/Protected';
import CreateClassroom from "./pages/Dashboard/CreateClassroom";
import JoinClassroom from "./pages/Dashboard/JoinClassroom";
import { AuthContextProvider } from './context/AuthContext';

export default function App() {
  return (
    <Router>
      <AuthContextProvider>
        {/* <Navbar /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="/login" element={<Signin1 />} /> */}
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
                <CreateClassroom />
              </Protected>
            }
          />
          <Route
            path='/join_classroom'
            element={
              <Protected>
                <JoinClassroom />
              </Protected>
            }
          />
        </Routes>
      </AuthContextProvider>
    </Router >
  );
}


