import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-void text-slate-100 flex flex-col font-sans">
        {/* Global Navbar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
