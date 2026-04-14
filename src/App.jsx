import { useState } from 'react';
import './App.css';

function App() {
  // This state keeps track of which tab is currently active
  const [activeTab, setActiveTab] = useState('home');

  // A helper function to render the correct section based on the state
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="fade-in section-container">
            <h1 className="hero-text">Hi, I'm Kyle.</h1>
            <h2 className="sub-hero-text">Software Engineering Student & Full-Stack Developer.</h2>
            <p className="bio-text">
              I build seamless web applications, deploy resilient infrastructure, and occasionally push hardware to its limits.
            </p>
            <button className="cta-button" onClick={() => setActiveTab('portfolio')}>
              View My Work
            </button>
          </div>
        );
      case 'about':
        return (
          <div className="fade-in section-container">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
              <p>
                I'm a software engineering student who loves bridging the gap between hardware and software. 
                When I'm not writing code, I'm usually managing my Proxmox and MicroK8s homelab, tuning my Anycubic Kobra 3 Combo, or diving deep into network forensics.
              </p>
              <div className="skills-grid">
                <div className="skill-category">
                  <h3>Languages</h3>
                  <p>Python, JavaScript (React), C/C++</p>
                </div>
                <div className="skill-category">
                  <h3>Infrastructure</h3>
                  <p>Kubernetes, Docker, Linux, Proxmox</p>
                </div>
                <div className="skill-category">
                  <h3>Databases</h3>
                  <p>MongoDB, DynamoDB, SQL</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'portfolio':
        return (
          <div className="fade-in section-container">
            <h2 className="section-title">Featured Projects</h2>
            <div className="project-grid">
              
              <div className="project-card">
                <div className="project-header">
                  <h3>GridSAFE</h3>
                  <span className="tech-badge">Python / ML</span>
                </div>
                <p>A machine learning application designed to detect anomalies in system logs, utilizing advanced regression metrics to parse complex data streams.</p>
              </div>

              <div className="project-card">
                <div className="project-header">
                  <h3>LED-Flux</h3>
                  <span className="tech-badge">React / IoT</span>
                </div>
                <p>A full-stack hardware-interfacing project featuring a React frontend and a custom backend engine to seamlessly control WS2812B LEDs via a Raspberry Pi.</p>
              </div>

              <div className="project-card">
                <div className="project-header">
                  <h3>Enterprise Homelab</h3>
                  <span className="tech-badge">Kubernetes / CI/CD</span>
                </div>
                <p>A fully automated, GitOps-driven micro-cloud environment featuring Cloudflare Zero Trust integration, LVM storage, and custom containerized deployments.</p>
              </div>

            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app-wrapper">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-brand" onClick={() => setActiveTab('home')}>
          Kyle<span className="accent">.dev</span>
        </div>
        <div className="nav-links">
          <button 
            className={`nav-btn ${activeTab === 'home' ? 'active' : ''}`} 
            onClick={() => setActiveTab('home')}
          >
            Home
          </button>
          <button 
            className={`nav-btn ${activeTab === 'about' ? 'active' : ''}`} 
            onClick={() => setActiveTab('about')}
          >
            About
          </button>
          <button 
            className={`nav-btn ${activeTab === 'portfolio' ? 'active' : ''}`} 
            onClick={() => setActiveTab('portfolio')}
          >
            Portfolio
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;