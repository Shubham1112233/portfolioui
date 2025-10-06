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
            <a href="#home" className="navbar-logo">
              Portfolio
            </a>
            <ul className="navbar-menu">
              <li>
                <a href="#home" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#education">Education</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <div className="navbar-social">
              <a
                href="https://www.linkedin.com/in/shubham-ekkaldevi-165464197/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/Shubham1112233?tab=repositories"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
              <div className="navbar-toggle" id="navbar-toggle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25px"
                  height="25px"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="icon-open w-full h-full object-cover"
                >
                  <path
                    d="M4 18L20 18"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4 12L20 12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4 6L20 6"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25px"
                  height="25px"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="icon-close w-full h-full object-cover"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                    fill="white"
                  />
                </svg>
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
        <ErrorBoundary>{children}</ErrorBoundary>

        {/* Client behaviors */}
        <LegacyScript />
        <NavbarScript />
      </body>
    </html>
  );
}
