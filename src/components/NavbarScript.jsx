'use client'

import { useEffect } from 'react'

export default function NavbarScript() {
  useEffect(() => {
    // Navbar scroll effect
    const navbar = document.getElementById('navbar')
    const scrollToTop = document.getElementById('scroll-to-top')
    
    const handleScroll = () => {
      const scrolled = window.scrollY > 100
      
      if (navbar) {
        if (scrolled) {
          navbar.classList.add('scrolled')
        } else {
          navbar.classList.remove('scrolled')
        }
      }
      
      if (scrollToTop) {
        if (scrolled) {
          scrollToTop.classList.add('visible')
        } else {
          scrollToTop.classList.remove('visible')
        }
      }
    }
    
    // Mobile menu toggle
    const navbarToggle = document.getElementById('navbar-toggle')
    const mobileMenu = document.getElementById('navbar-mobile-menu')
    
    const toggleMobileMenu = () => {
      if (navbarToggle && mobileMenu) {
        navbarToggle.classList.toggle('active')
        mobileMenu.classList.toggle('active')
      }
    }
    
    // Close mobile menu when clicking on links
    const mobileMenuLinks = mobileMenu?.querySelectorAll('a')
    mobileMenuLinks?.forEach(link => {
      link.addEventListener('click', () => {
        if (navbarToggle && mobileMenu) {
          navbarToggle.classList.remove('active')
          mobileMenu.classList.remove('active')
        }
      })
    })
    
    // Active link highlighting
    const navLinks = document.querySelectorAll('.navbar-menu a, .navbar-mobile-menu a')
    
    const updateActiveLink = () => {
      const sections = document.querySelectorAll('section[id]')
      const scrollPos = window.scrollY + 100 // Adjusted offset for better detection
      
      let currentSection = ''
      let closestSection = ''
      let minDistance = Infinity
      
      // Debug logging
      console.log('Scroll position:', scrollPos)
      console.log('Available sections:', Array.from(sections).map(s => ({
        id: s.getAttribute('id'),
        top: s.offsetTop,
        height: s.offsetHeight,
        bottom: s.offsetTop + s.offsetHeight
      })))
      
      // Handle home section (banner) - check if we're at the very top
      if (scrollPos < 300) {
        currentSection = 'home'
      } else {
        // Find the section that's currently in view or closest to viewport
        sections.forEach(section => {
          const sectionTop = section.offsetTop
          const sectionHeight = section.offsetHeight
          const sectionId = section.getAttribute('id')
          const sectionBottom = sectionTop + sectionHeight
          
          // Check if section is currently in view (with some tolerance)
          if (scrollPos >= sectionTop - 50 && scrollPos < sectionBottom - 50) {
            currentSection = sectionId
            console.log(`Section in view: ${sectionId} (${sectionTop} <= ${scrollPos} < ${sectionBottom})`)
          }
          
          // Also track the closest section for better fallback
          const distance = Math.abs(scrollPos - sectionTop)
          if (distance < minDistance) {
            minDistance = distance
            closestSection = sectionId
          }
        })
        
        // If no section is in view, use the closest one
        if (!currentSection) {
          currentSection = closestSection
          console.log(`No section in view, using closest: ${closestSection}`)
        }
      }
      
      console.log('Current section:', currentSection)
      
      // Update active states
      navLinks.forEach(link => {
        link.classList.remove('active')
        const linkHref = link.getAttribute('href')
        if (linkHref === `#${currentSection}`) {
          link.classList.add('active')
        }
      })
    }
    
    // Scroll to top functionality
    const scrollToTopHandler = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
    
    // Event listeners
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('scroll', updateActiveLink)
    navbarToggle?.addEventListener('click', toggleMobileMenu)
    scrollToTop?.addEventListener('click', scrollToTopHandler)
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]')
    anchorLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        const targetId = link.getAttribute('href').substring(1)
        let targetElement = document.getElementById(targetId)
        
        // Handle home section (banner)
        if (targetId === 'home') {
          targetElement = document.querySelector('.banner-section')
        }
        
        // Debug: Log all sections to see what's available
        if (targetId === 'projects') {
          console.log('Available sections:', document.querySelectorAll('section[id]'))
          console.log('Projects section specifically:', document.getElementById('projects'))
        }
        
        if (targetElement) {
          // Wait a bit to ensure ScrollReveal animations don't interfere
          setTimeout(() => {
            let offsetTop = targetElement.offsetTop - 80 // Account for navbar height
            
            // Special handling for ScrollReveal wrapped sections
            if (targetElement.closest('.reveal')) {
              const revealWrapper = targetElement.closest('.reveal')
              offsetTop = revealWrapper.offsetTop - 80
            }
            
            // Debug logging
            console.log(`Scrolling to ${targetId}:`, {
              targetElement,
              offsetTop,
              elementTop: targetElement.offsetTop,
              elementHeight: targetElement.offsetHeight,
              hasRevealWrapper: !!targetElement.closest('.reveal')
            })
            
            // Use native smooth scroll for better performance
            window.scrollTo({
              top: Math.max(0, offsetTop),
              behavior: 'smooth'
            })
          }, 100)
        } else {
          console.log(`Element not found for ID: ${targetId}`)
        }
      })
    })
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('scroll', updateActiveLink)
      navbarToggle?.removeEventListener('click', toggleMobileMenu)
      scrollToTop?.removeEventListener('click', scrollToTopHandler)
    }
  }, [])
  
  return null
}
