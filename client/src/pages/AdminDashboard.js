import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {

    // Redirect to login
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>AVANYA</h2>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/students">Students</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/attendance">Attendance</Link>
        <Link to="/exams">Exams</Link>
        <Link to="/e-office">E-Office</Link>
        <Link to="/timetable">Timetable</Link>
        <Link to="/fees">Fees</Link>
        <Link to="/hr-payroll">HR & Payroll</Link>
        <Link to="/library">Library</Link>
        <Link to="/transport">Transport</Link>
        <Link to="/ai-analytics">AI & Analytics</Link>
      </div>

      <div className="main-content">
        <div className="header">
          <div>
            <h2>Dashboard</h2>
            <p>Welcome, Rahul</p>
          </div>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
        <div className="info-box">
          <div className="info-card">
            <h3>Students</h3>
            <p>1000</p>
          </div>
          <div className="info-card">
            <h3>Teachers</h3>
            <p>100</p>
          </div>
          <div className="info-card">
            <h3>Attendance</h3>
            <p>95%</p>
          </div>
        </div>

        <div className="info-box">
          <div className="info-card">
            <h3>Courses</h3>
            <p><Link to="/course-builder">Course Builder</Link></p>
            <p><Link to="/assignments">Assignments</Link></p>
          </div>
          <div className="info-card">
            <h3>Attendance</h3>
            <p><Link to="/todays-attendance">Today's Attendance</Link></p>
            <p><Link to="/attendance-reports">Reports</Link></p>
          </div>
          <div className="info-card">
            <h3>E-Office</h3>
            <p><Link to="/documents">Documents</Link></p>
            <p><Link to="/leave-requests">Leave Requests</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
