import React, { useEffect } from 'react';
import './App.css';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Service from './pages/Service';
import Project from './pages/Project';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Service />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
