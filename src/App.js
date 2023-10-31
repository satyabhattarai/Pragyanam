import "./css/styles.css";
import "./css/component.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Choosing from "./components/Register/Choosing";
import Dashboard from "./components/Teacher/Dashboard";
import English from "./components/Student/English"
import Grammar from "./components/Student/Grammar";
import Login from "./components/Login/Login";
import Modal from "./components/Student/Modal";
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
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register-otp" element={<Otpverification />} />
        <Route path="/register-choice" element={<Choosing />} />
        <Route path="/teacher/dashboard" element={<Dashboard />} />
        <Route path="/teacher/subjects" element={<TeacherSubjects />} />
        <Route path="/student/subjects" element={<StudentSubjects />} />
        <Route path="*" element={<Dashboard />} />
        <Route path="/english" element={<English />} />
        <Route path="/grammar" element={<Grammar />} />
        <Route path="/teacher/questions" element={<Question />} />
        <Route path="/modal" element={<Modal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
