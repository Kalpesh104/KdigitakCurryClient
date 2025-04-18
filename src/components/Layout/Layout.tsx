import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Layout.css';

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <aside className="sidebar">
        <h2 className="logo">EduDash</h2>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/instructors">Instructor List</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/lectures">Lectures</Link></li>
          </ul>
        </nav>
        <button className="logout">Logout</button>
      </aside>
      <main className="main">
        <header className="navbar">
          <div className="profile">Mr. Mark ▼</div>
        </header>
        <section className="content">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default Layout;
