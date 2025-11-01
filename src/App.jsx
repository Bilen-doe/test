import React from "react";
import "./App.css"; // Make sure this CSS file exists

function App() {
  return (
    <div className="homepage">
      <header className="header">
        <h1 className="logo">MyBrand</h1>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <h2>Welcome to Your Dream Website</h2>
        <p>
          Build beautiful web experiences effortlessly with React and simple CSS.
        </p>
        <button className="cta">Get Started</button>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} MyBrand. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
