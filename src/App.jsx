import React from 'react';
import './App.css';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Service from './pages/Service';
import Project from './pages/Project';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
