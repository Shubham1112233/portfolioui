import { getHomepageData } from "@/lib/data-fetching";
import { PortableText } from "@portabletext/react";
import OptimizedImage from "@/components/OptimizedImage";
import ScrollReveal from "@/components/ScrollReveal";
import InteractiveExpertise from "@/components/InteractiveExpertise";
import ExperienceScroll from "@/components/ExperienceScroll";
import "@/styles/projects.css";
import "@/styles/experience.css";
import "@/styles/components.css";
import "@/styles/banner.css";
import "@/styles/contact.css";
import "@/styles/education.css";

export default async function Home() {
  const { projects, experience, posts } = await getHomepageData();

  // Handle case where data fetching fails
  if (!projects || !experience || !posts) {
    console.warn("Some data is missing, using fallback values");
  }

  return (
    <main className="min-h-screen">
      {/* Banner with Sliding Text Animation */}
      <section className="banner-section" id="home">
        <div className="banner-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        <div className="banner-content">
          <div className="sliding-text-container">
            <div className="sliding-text">Hi,</div>
            <div className="sliding-text">I am Shubham Ekkaldevi</div>
            <div className="sliding-text">A Software Developer</div>
            <div className="sliding-text">With 2.5+ Years of Experience</div>
          </div>
          <p className="banner-description">
            Searching for a skilled partner to handle your next big challenge in
            web and backend development? 🤝 You've found the one. I'm a Software
            Engineer dedicated to turning complex ideas into scalable reality.
            Whether it's a tight-knit startup team or a large enterprise
            project,Ready to solve them all with me?{" "}
          </p>
          <div className="banner-buttons">
            <a href="#experience" className="banner-button">
              <i className="fas fa-code"></i>Experience
            </a>
            <a href="#contact" className="banner-button primary">
              <i className="fas fa-user"></i>Work With Me
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="content-wrapper">
        {/* About (static) */}
        <section className="about" id="about">
          <div className="content">
            <div className="title">
              <span>About Me</span>
            </div>
            <div className="about-details">
              <div className="left">
                <img src="/assets/shubh_Linkedin.png" alt="My image" />
              </div>
              <div className="right">
                {/* Interactive opening statement */}
                <div className="topic">
                  Let's Talk About Your Next Digital Solution.
                </div>
                <p>
                  I'm a Software Engineer with 2.5+ years of experience
                  dedicated to bringing ambitious projects to life. I specialize
                  in the full lifecycle of development, focusing on robust
                  Front-End Web Development and high-performance Backend
                  Systems.
                </p>

                {/* List format for key skills */}
                <div className="sub-heading">My Commitment to You</div>
                <ul>
                  <li>
                    <strong>Seamless Experiences:</strong> Crafting solutions
                    that prioritize user-centric design.
                  </li>
                  <li>
                    <strong>Technical Excellence:</strong> Ensuring the backend
                    engine is as solid as the front-end interface is beautiful.
                  </li>
                  <li>
                    <strong>Driven by Passion:</strong> For me, coding is a
                    constant challenge and a joy. I take immense satisfaction in
                    turning complex problems into elegant, working solutions.
                  </li>
                </ul>

                <div className="topic" style={{ marginTop: 30 }}>
                  Ready to collaborate?
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section - Skill Grid */}
        <ScrollReveal>
          <section className="expertise-section" id="expertise">
            <div className="expertise-container">
              <div className="expertise-title">
                <h2>My Expertise</h2>
                <p>Technologies and tools I work with</p>
              </div>
              <div className="skills-grid">
                <div className="skill-category">
                  <h3>Frontend Fundamentals</h3>
                  <div className="skill-items">
                    <span className="skill-item" data-skill="HTML">
                      HTML
                    </span>
                    <span className="skill-item" data-skill="CSS">
                      CSS
                    </span>
                    <span className="skill-item" data-skill="JavaScript">
                      JavaScript
                    </span>
                  </div>
                </div>

                <div className="skill-category">
                  <h3>Frontend Frameworks</h3>
                  <div className="skill-items">
                    <span className="skill-item" data-skill="React.js">
                      React.js
                    </span>
                    <span className="skill-item" data-skill="Redux">
                      Redux
                    </span>
                    <span className="skill-item" data-skill="Angular">
                      Angular
                    </span>
                  </div>
                </div>

                <div className="skill-category">
                  <h3>Backend Development</h3>
                  <div className="skill-items">
                    <span className="skill-item" data-skill="Node.js">
                      Node.js
                    </span>
                    <span className="skill-item" data-skill="Next.js">
                      Next.js
                    </span>
                    <span className="skill-item" data-skill="Express.js">
                      Express.js
                    </span>
                  </div>
                </div>

                <div className="skill-category">
                  <h3>Databases</h3>
                  <div className="skill-items">
                    <span className="skill-item" data-skill="SQL">
                      SQL
                    </span>
                    <span className="skill-item" data-skill="PostgreSQL">
                      PostgreSQL
                    </span>
                    <span className="skill-item" data-skill="MongoDB">
                      MongoDB
                    </span>
                    <span className="skill-item" data-skill="Redis">
                      Redis
                    </span>
                  </div>
                </div>

                <div className="skill-category">
                  <h3>CMS & PHP</h3>
                  <div className="skill-items">
                    <span className="skill-item" data-skill="PHP">
                      PHP
                    </span>
                    <span className="skill-item" data-skill="WordPress">
                      WordPress
                    </span>
                  </div>
                </div>

                <div className="skill-category">
                  <h3>DevOps & Tools</h3>
                  <div className="skill-items">
                    <span className="skill-item" data-skill="Git">
                      Git
                    </span>
                    <span className="skill-item" data-skill="JIRA">
                      JIRA
                    </span>
                    <span className="skill-item" data-skill="CI/CD">
                      CI/CD
                    </span>
                    <span className="skill-item" data-skill="Docker">
                      Docker
                    </span>
                    <span className="skill-item" data-skill="DevOps">
                      DevOps
                    </span>
                    <span className="skill-item" data-skill="AWS">
                      AWS
                    </span>
                  </div>
                </div>
              </div>
              <div className="skill-tooltip" id="skill-tooltip">
                <div className="tooltip-content">
                  <h4 id="tooltip-title">Skill</h4>
                  <p id="tooltip-description">
                    Hover over skills to learn more
                  </p>
                </div>
              </div>
            </div>
            <InteractiveExpertise />
          </section>
        </ScrollReveal>

        {/* Experience (dynamic) - Horizontal Scroll Design */}
        <section id="experience" className="experience-section">
          <div className="experience-container">
            <div className="experience-title">
              <h2>Professional Experience</h2>
            </div>
            <ExperienceScroll experience={experience} />
          </div>
        </section>

        {/* Projects (dynamic) - Modern Glassmorphism Design */}
        <ScrollReveal>
          <section id="projects" className="projects-section">
            <div className="projects-container">
              <div className="projects-title">
                <h2 className="gradient-text">Personal Projects</h2>
              </div>
              <div className="projects-grid">
                {projects?.map((p, idx) => (
                  <ScrollReveal key={p._id} delay={idx * 100}>
                    <div className="project-card card-hover magnetic">
                      {p.mainImage && (
                        <div className="project-image-container">
                          <OptimizedImage
                            src={p.mainImage.url}
                            alt={`${p.title} project screenshot`}
                            width={300}
                            height={200}
                            className="project-image"
                            priority={idx < 2}
                          />
                          <div className="project-overlay">
                            <div className="project-overlay-content">
                              <span className="project-overlay-text">
                                View Details
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                      <div className="project-content">
                        <h3 className="project-title">{p.title}</h3>
                        {p.summary && (
                          <p className="project-summary">{p.summary}</p>
                        )}
                        {Array.isArray(p.tech) && p.tech.length > 0 && (
                          <div className="project-badges">
                            {p.tech.map((t, i) => (
                              <span key={i} className="project-badge">
                                {t}
                              </span>
                            ))}
                          </div>
                        )}
                        <div className="project-links">
                          {p.repoUrl && (
                            <a
                              href={p.repoUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="glass-button"
                            >
                              <i className="fab fa-github"></i> Code
                            </a>
                          )}
                          {p.liveUrl && (
                            <a
                              href={p.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="glass-button"
                            >
                              <i className="fas fa-external-link-alt"></i> Live
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Education - Modern Timeline Design */}
        <ScrollReveal>
          <section className="education-section" id="education">
            <div className="education-container">
              <div className="education-title">
                <h2>Education & Qualifications</h2>
              </div>
              <div className="education-timeline">
                <div className="education-item">
                  <div className="education-content">
                    <div className="education-institute">
                      Qspider's Institute
                    </div>
                    <div className="education-course">
                      Full Stack Software Development Training
                    </div>
                    <div className="education-score">
                      Professional Certification
                    </div>
                    <div className="education-year">2023</div>
                  </div>
                </div>
                <div className="education-item">
                  <div className="education-content">
                    <div className="education-institute">NIIT Pune</div>
                    <div className="education-course">
                      Advanced Diploma in Web Development
                    </div>
                    <div className="education-score">Specialized Training</div>
                    <div className="education-year">2022</div>
                  </div>
                </div>
                <div className="education-item">
                  <div className="education-content">
                    <div className="education-institute">Pune University</div>
                    <div className="education-course">
                      B.E Mechanical Engineering
                    </div>
                    <div className="education-score">9.3 CGPA</div>
                    <div className="education-year">2022</div>
                  </div>
                </div>
                <div className="education-item">
                  <div className="education-content">
                    <div className="education-institute">
                      Government Polytechnic Pune
                    </div>
                    <div className="education-course">
                      Diploma in Mechanical Engineering
                    </div>
                    <div className="education-score">83 Percent</div>
                    <div className="education-year">2019</div>
                  </div>
                </div>
                <div className="education-item">
                  <div className="education-content">
                    <div className="education-institute">Vidya Niketan</div>
                    <div className="education-course">Secondary Education</div>
                    <div className="education-score">93 Percent</div>
                    <div className="education-year">2016</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Certifications Section - Separate */}
        <ScrollReveal>
          <section className="certifications-section" id="certifications">
            <div className="certifications-container">
              <div className="certifications-title">
                <h2>Certifications</h2>
              </div>
              <div className="certifications-grid">
                <div className="certification-card">
                  <div className="certification-card-header">
                    <div className="certification-logo">CCNA</div>
                    <div>
                      <div className="certification-card-title">
                        Cisco Certified Networking Associate
                      </div>
                      <div className="certification-card-subtitle">
                        Cisco Systems
                      </div>
                    </div>
                  </div>
                  <div className="certification-card-description">
                    Professional certification in networking fundamentals,
                    routing, and switching technologies.
                  </div>
                  <div className="certification-tags">
                    <span className="certification-tag">Networking</span>
                    <span className="certification-tag">Routing</span>
                    <span className="certification-tag">Switching</span>
                  </div>
                </div>

                <div className="certification-card">
                  <div className="certification-card-header">
                    <div className="certification-logo">Java</div>
                    <div>
                      <div className="certification-card-title">
                        Complete Java Full Stack Development
                      </div>
                      <div className="certification-card-subtitle">
                        Simplilearn
                      </div>
                    </div>
                  </div>
                  <div className="certification-card-description">
                    Comprehensive full-stack development with Java, Spring Boot,
                    and modern web technologies.
                  </div>
                  <div className="certification-tags">
                    <span className="certification-tag">Java</span>
                    <span className="certification-tag">Spring Boot</span>
                    <span className="certification-tag">Full Stack</span>
                  </div>
                </div>

                <div className="certification-card">
                  <div className="certification-card-header">
                    <div className="certification-logo">Python</div>
                    <div>
                      <div className="certification-card-title">
                        Python Programming
                      </div>
                      <div className="certification-card-subtitle">
                        Simplilearn
                      </div>
                    </div>
                  </div>
                  <div className="certification-card-description">
                    Advanced Python programming with data structures,
                    algorithms, and web development frameworks.
                  </div>
                  <div className="certification-tags">
                    <span className="certification-tag">Python</span>
                    <span className="certification-tag">Django</span>
                    <span className="certification-tag">Flask</span>
                  </div>
                </div>

                <div className="certification-card">
                  <div className="certification-card-header">
                    <div className="certification-logo">Backend</div>
                    <div>
                      <div className="certification-card-title">
                        Backend Development Expert
                      </div>
                      <div className="certification-card-subtitle">
                        Simplilearn
                      </div>
                    </div>
                  </div>
                  <div className="certification-card-description">
                    Specialized in backend architecture, API development, and
                    database optimization.
                  </div>
                  <div className="certification-tags">
                    <span className="certification-tag">Node.js</span>
                    <span className="certification-tag">Express</span>
                    <span className="certification-tag">MongoDB</span>
                  </div>
                </div>

                <div className="certification-card">
                  <div className="certification-card-header">
                    <div className="certification-logo">DevOps</div>
                    <div>
                      <div className="certification-card-title">
                        DevOps Frameworks
                      </div>
                      <div className="certification-card-subtitle">
                        Simplilearn
                      </div>
                    </div>
                  </div>
                  <div className="certification-card-description">
                    Implementation of DevOps practices, CI/CD pipelines, and
                    containerization technologies.
                  </div>
                  <div className="certification-tags">
                    <span className="certification-tag">Docker</span>
                    <span className="certification-tag">Kubernetes</span>
                    <span className="certification-tag">CI/CD</span>
                  </div>
                </div>

                <div className="certification-card">
                  <div className="certification-card-header">
                    <div className="certification-logo">Frontend</div>
                    <div>
                      <div className="certification-card-title">
                        Frontend Development
                      </div>
                      <div className="certification-card-subtitle">
                        Simplilearn
                      </div>
                    </div>
                  </div>
                  <div className="certification-card-description">
                    Modern frontend development with React, Vue.js, and
                    responsive web design principles.
                  </div>
                  <div className="certification-tags">
                    <span className="certification-tag">React</span>
                    <span className="certification-tag">Vue.js</span>
                    <span className="certification-tag">JavaScript</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Contact - Modern Design */}
        <ScrollReveal>
          <section className="contact-section" id="contact">
            <div className="contact-container">
              <div className="contact-title">
                <h2>Get In Touch</h2>
              </div>
              <div className="contact-grid">
                <div className="contact-card">
                  <div className="contact-icon">
                    <i className="fas fa-mobile-alt"></i>
                  </div>
                  <h3>Phone</h3>
                  <p>+91 9156802283</p>
                  <a href="tel:+919156802283">Call Now</a>
                </div>
                <div className="contact-card">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <h3>Email</h3>
                  <p>shubhamind722@gmail.com</p>
                  <a href="mailto:shubhamind722@gmail.com">Send Email</a>
                </div>
                <div className="contact-card">
                  <div className="contact-icon">
                    <i className="fab fa-linkedin"></i>
                  </div>
                  <h3>LinkedIn</h3>
                  <p>Professional Profile</p>
                  <a
                    href="https://www.linkedin.com/in/shubham-ekkaldevi-165464197/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </main>
  );
}
