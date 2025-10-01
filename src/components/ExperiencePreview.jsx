'use client'

import { PortableText } from "@portabletext/react";

// Sample data to test experience section with multiple companies
const sampleExperience = [
  {
    _id: "1",
    role: "Senior Software Developer",
    company: "Cisco Systems India",
    location: "Bangalore, India",
    startDate: "2023",
    endDate: null,
    current: true,
    summary: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Leading development of IoT solutions and frontend applications. Working on scalable microservices architecture."
          }
        ]
      }
    ],
    highlights: ["Team Leadership", "Architecture Design", "Mentoring"],
    tech: ["React", "Node.js", "Python", "AWS", "Docker"]
  },
  {
    _id: "2", 
    role: "Software Developer",
    company: "TechCorp Solutions",
    location: "Pune, India",
    startDate: "2021",
    endDate: "2023",
    current: false,
    summary: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Developed full-stack web applications and REST APIs. Collaborated with cross-functional teams to deliver high-quality software solutions."
          }
        ]
      }
    ],
    highlights: ["Full-stack Development", "API Design", "Database Optimization"],
    tech: ["JavaScript", "React", "Express.js", "MongoDB", "PostgreSQL"]
  },
  {
    _id: "3",
    role: "Frontend Developer",
    company: "StartupXYZ",
    location: "Mumbai, India", 
    startDate: "2020",
    endDate: "2021",
    current: false,
    summary: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Built responsive web applications and mobile-first designs. Implemented modern UI/UX patterns and optimized performance."
          }
        ]
      }
    ],
    highlights: ["UI/UX Design", "Performance Optimization", "Mobile Development"],
    tech: ["React", "Vue.js", "CSS3", "SASS", "Webpack"]
  }
];

export default function ExperiencePreview() {
  return (
    <div className="experience-section">
      <div className="experience-container">
        <div className="experience-title">
          <h2>Professional Experience</h2>
        </div>
        <div className="experience-timeline">
          {sampleExperience.map((e, idx) => (
            <div key={e._id} className="experience-card">
              <div className="experience-content card-hover">
                <div className="experience-header">
                  <h3 className="experience-title-text">{e.role}</h3>
                  <div className="experience-company">{e.company}</div>
                  <div className="experience-dates">
                    {e.startDate} {e.endDate ? `→ ${e.endDate}` : e.current ? "→ Present" : null}
                  </div>
                </div>
                {e.summary && (
                  <div className="experience-text">
                    <PortableText value={e.summary} />
                  </div>
                )}
                {Array.isArray(e.tech) && e.tech.length > 0 && (
                  <div className="experience-tags">
                    {e.tech.map((t, i) => (
                      <span key={i} className="experience-tag">{t}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
