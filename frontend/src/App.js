import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Layout/Navbar';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import JobDetails from './components/Jobs/JobDetails';
import JobApplication from './components/Jobs/JobApplication';
import CompanyDashboard from './components/Dashboard/CompanyDashboard';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/jobs/:jobId" element={<JobDetails />} />
          <Route path="/apply/:jobId" element={<JobApplication />} />
          <Route path="/dashboard" element={<CompanyDashboard />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
