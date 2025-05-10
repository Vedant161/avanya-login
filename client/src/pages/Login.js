import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("English");

  return (
    <div className="login-container">
      {/* Header */}
      <div className="login-header">
        <div className="logo">
          <img
            src="https://img.icons8.com/ios-filled/100/ffffff/brain.png"
            alt="Avanya AI"
            className="logo-icon"
          />
        </div>
        <h1 className="app-title">AVANYA AI</h1>
        <p className="app-subtitle">Empowering Education with Intelligence</p>
      </div>

      {/* Login Buttons */}
      <div className="login-buttons">
        <button className="login-btn admin" onClick={() => navigate("/admin")}>
          Login as Admin
        </button>
        <button
          className="login-btn teacher"
          onClick={() => navigate("/teacher")}
        >
          Login as Teacher
        </button>
        <button
          className="login-btn student"
          onClick={() => navigate("/student")}
        >
          Login as Student
        </button>
        <button
          className="login-btn parent"
          onClick={() => navigate("/parent")}
        >
          Login as Parent
        </button>
      </div>

      {/* Language Selector */}
      <div className="language-selector">
        <label htmlFor="language">🌐 Language: </label>
        <select
          id="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
        </select>
      </div>
    </div>
  );
}

export default Login;
