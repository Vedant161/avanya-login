import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StudentDashboard.css';

function StudentDashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>AVANYA</h2>
        <nav>
          <ul>
            <li className="active">Dashboard</li>
            <li>Courses</li>
            <li>Attendance</li>
            <li>Exams</li>
            <li>Timetable</li>
            <li>Fees</li>
            <li>Library</li>
            <li>Support</li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <header className="top-bar">
          <div className="user-info">
            <p><strong>Nitish</strong></p>
            <span>Student</span>
          </div>
        </header>

        <section className="stats-section">
          <div className="stat-card">
            <p>Courses Enrolled</p>
            <h3>6</h3>
          </div>
          <div className="stat-card">
            <p>Attendance</p>
            <h3>92%</h3>
          </div>
          <div className="stat-card">
            <p>Assignments Due</p>
            <h3>3</h3>
          </div>
        </section>

        <section className="quick-links">
          <div className="quick-box">
            <h4>Courses</h4>
            <a href="#">My Courses</a>
            <a href="#">Assignments</a>
          </div>
          <div className="quick-box">
            <h4>Reports</h4>
            <a href="#">Attendance</a>
            <a href="#">Exam Results</a>
          </div>
          <div className="quick-box">
            <h4>Support</h4>
            <a href="#">Contact Mentor</a>
            <a href="#">Leave Request</a>
          </div>
        </section>

        <button className="logout-btn" onClick={() => navigate('/')}>Logout</button>
      </main>
    </div>
  );
}

export default StudentDashboard;
