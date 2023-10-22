import "./css/styles.css";
import "./css/component.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Choosing from "./components/Register/Choosing";
import Dashboard from "./components/Teacher/Dashboard";
import English from "./components/Student/English";
import Login from "./components/Login/Login";
import Navigation from "./components/Dev/Navigation";
import Otpverification from "./components/Register/Otpverification";
import Question from "./components/Teacher/Question";
import Register from "./components/Register/Register";
import StudentSubjects from "./components/Student/Subjects";
import TeacherSubjects from "./components/Teacher/Subjects";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <TeacherSubjects/>
      <Question/>
      <StudentSubjects/>
      <English/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register-otp" element={<Otpverification />} />
        <Route path="/register-choice" element={<Choosing />} />
        <Route path="/teacher/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
