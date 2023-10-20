import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Choosing from "./components/Register/Choosing";
import Dashboard from "./components/Teacher/Dashboard";
import Login from "./components/Login/Login";
import Navigation from "./components/Dev/Navigation";
import Otpverification from "./components/Register/Otpverification";
import Register from "./components/Register/Register";

function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register-otp" element={<Otpverification />} />
        <Route path="/register-choice" element={<Choosing />} />
        <Route path="/teacher/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
