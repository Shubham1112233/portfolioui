'use client';

import { useEffect } from 'react';

const InteractiveExpertise = () => {
  useEffect(() => {
    const skillDescriptions = {
      'HTML': 'HyperText Markup Language - the standard markup language for creating web pages and applications.',
      'CSS': 'Cascading Style Sheets - used for styling and layout of web pages, including responsive design.',
      'JavaScript': 'Core programming language for web development, enabling dynamic and interactive web experiences.',
      'React.js': 'Modern JavaScript library for building interactive user interfaces with component-based architecture.',
      'Redux': 'Predictable state container for JavaScript applications, commonly used with React.',
      'Angular': 'TypeScript-based web application framework for building dynamic single-page applications.',
      'Node.js': 'JavaScript runtime environment for server-side development and building scalable network applications.',
      'Next.js': 'React-based framework for production-ready applications with server-side rendering and static generation.',
      'Express.js': 'Fast, unopinionated, minimalist web framework for Node.js, perfect for APIs and web applications.',
      'SQL': 'Structured Query Language - standard language for managing and manipulating relational databases.',
      'PostgreSQL': 'Advanced open-source relational database with extensibility and SQL compliance.',
      'MongoDB': 'NoSQL document database designed for ease of development and scaling.',
      'Redis': 'In-memory data structure store used as a database, cache, and message broker.',
      'PHP': 'Server-side scripting language widely used for web development and content management systems.',
      'WordPress': 'Popular content management system built on PHP, used for websites and blogs.',
      'Git': 'Distributed version control system for tracking changes in source code during software development.',
      'JIRA': 'Project management tool used for bug tracking, issue tracking, and agile project management.',
      'CI/CD': 'Continuous Integration/Continuous Deployment - practices for automating software delivery.',
      'Docker': 'Containerization platform that packages applications and their dependencies into portable containers.',
      'DevOps': 'Set of practices combining software development and IT operations to shorten development lifecycle.',
      'AWS': 'Amazon Web Services - comprehensive cloud computing platform offering various services and tools.'
    };

    const tooltip = document.getElementById('skill-tooltip');
    const tooltipTitle = document.getElementById('tooltip-title');
    const tooltipDescription = document.getElementById('tooltip-description');
    const skillElements = document.querySelectorAll('.skill-item');

    let tooltipTimeout;
    let isHoveringSkill = false;

    const showTooltip = (event, skill) => {
      if (tooltip && tooltipTitle && tooltipDescription) {
        clearTimeout(tooltipTimeout);
        isHoveringSkill = true;
        
        tooltipTitle.textContent = skill;
        tooltipDescription.textContent = skillDescriptions[skill] || 'Professional expertise in this technology.';
        
        const rect = event.target.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        
        // Calculate position with viewport bounds checking
        let left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
        let top = rect.top - tooltipRect.height - 10;
        
        // Adjust if tooltip would go off screen
        if (left < 10) left = 10;
        if (left + tooltipRect.width > viewportWidth - 10) left = viewportWidth - tooltipRect.width - 10;
        if (top < 10) top = rect.bottom + 10; // Show below if no space above
        
        tooltip.style.left = `${left}px`;
        tooltip.style.top = `${top}px`;
        tooltip.classList.add('show');
      }
    };

    const hideTooltip = () => {
      if (tooltip) {
        isHoveringSkill = false;
        tooltip.classList.remove('show');
      }
    };

    const handleMouseEnter = (e) => {
      clearTimeout(tooltipTimeout);
      const skillName = e.target.getAttribute('data-skill');
      showTooltip(e, skillName);
    };

    const handleMouseLeave = (e) => {
      // Hide tooltip immediately when leaving any skill element
      hideTooltip();
    };

    // Add global mouse move listener to hide tooltip when hovering over non-skill elements
    const handleGlobalMouseMove = (e) => {
      if (!isHoveringSkill && !e.target.closest('.skill-item')) {
        hideTooltip();
      }
    };

    skillElements.forEach(skill => {
      skill.addEventListener('mouseenter', handleMouseEnter);
      skill.addEventListener('mouseleave', handleMouseLeave);
    });

    // Add global listener to hide tooltip when hovering outside skills
    document.addEventListener('mousemove', handleGlobalMouseMove);

    // Cleanup event listeners on component unmount
    return () => {
      clearTimeout(tooltipTimeout);
      skillElements.forEach(skill => {
        skill.removeEventListener('mouseenter', handleMouseEnter);
        skill.removeEventListener('mouseleave', handleMouseLeave);
      });
      document.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, []);

  return null; // This component only handles JavaScript functionality
};

export default InteractiveExpertise;
