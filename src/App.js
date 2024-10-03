import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import LoginModal from "./Components/LoginModal"; 
import About from "./Components/About"; 
import './Css/navbar.css';

const App = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const handleLoginClick = () => {
    setLoginModalOpen(true);
  };

  return (
    <Router>
      <Navbar onLoginClick={handleLoginClick} />
      <div>
        <section className='hero'>
          <h1>Welcome To Fixme</h1>
          <p>Learn and Play with our Interactive Game!</p>
        </section>
        <Routes>
          <Route path="/about" element={<About />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
      {isLoginModalOpen && <LoginModal onClose={() => setLoginModalOpen(false)} />}
    </Router>
  );
};

export default App;
