import "./globals.css";
import "../styles/global-theme.css";
import "../styles/navbar.css";

// Client script for sticky nav / scroll-to-top / gsap init
import LegacyScript from "@/components/legacy-script";
import NavbarScript from "@/components/NavbarScript";
import { ErrorBoundary } from "@/components/ErrorBoundary";

export const metadata = {
  title: "Portfolio",
  description: "Personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </head>
      <body>
        {/* Modern Navbar */}
        <nav className="navbar" id="navbar">
          <div className="navbar-container">
            <a href="#home" className="navbar-logo">Portfolio</a>
            <ul className="navbar-menu">
              <li><a href="#home" className="active">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="navbar-social">
              <a href="https://www.linkedin.com/in/shubham-ekkaldevi-165464197/" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-github"></i>
              </a>
            </div>
            <div className="navbar-toggle" id="navbar-toggle">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="navbar-mobile-menu" id="navbar-mobile-menu">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
        
        {/* Scroll to Top Button */}
        <button className="scroll-to-top" id="scroll-to-top">
          <i className="fas fa-arrow-up"></i>
        </button>

        {/* Page content */}
        <ErrorBoundary>
          {children}
        </ErrorBoundary>

        {/* Client behaviors */}
        <LegacyScript />
        <NavbarScript />
      </body>
    </html>
  );
}


