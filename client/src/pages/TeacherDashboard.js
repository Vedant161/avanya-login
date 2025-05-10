import React from 'react';
import './TeacherDashboard.css';
import { useNavigate } from 'react-router-dom';

function TeacherDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="teacher-dashboard-container">
      <aside className="sidebar">
        <h2 className="logo">AVANYA</h2>
        <ul className="sidebar-menu">
          <li className="active">Dashboard</li>
          <li>Students</li>
          <li>Courses</li>
          <li>Attendance</li>
          <li>Exams</li>
          <li>Reports</li>
          <li>Profile</li>
        </ul>
      </aside>
      <main className="main-content">
        <header className="dashboard-header">
          <h1>Teacher Dashboard</h1>
          <div className="user-info">
            <span className="username">Nikita</span>
            <br></br>
            <span className="role">Teacher</span>
          </div>
        </header>

        <div className="stats-cards">
          <div className="card">
            <h4>Students</h4>
            <p><strong>1200</strong></p>
          </div>
          <div className="card">
            <h4>Courses</h4>
            <p><strong>20</strong></p>
          </div>
          <div className="card">
            <h4>Attendance</h4>
            <p><strong>95%</strong></p>
          </div>
        </div>

        <div className="quick-links">
          <div className="link-card">
            <h4>Courses</h4>
            <p>Course Builder</p>
            <p>Assignments</p>
          </div>
          <div className="link-card">
            <h4>Attendance</h4>
            <p>Mark Today's Attendance</p>
            <p>Reports</p>
          </div>
          <div className="link-card">
            <h4>Documents</h4>
            <p>Class Notes</p>
            <p>Lecture Slides</p>
          </div>
        </div>

        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </main>
    </div>
  );
}

export default TeacherDashboard;
