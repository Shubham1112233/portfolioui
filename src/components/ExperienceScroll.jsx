'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { PortableText } from '@portabletext/react';

// ScrollTrigger will be imported dynamically to avoid SSR issues
let ScrollTrigger;

const ExperienceScroll = ({ experience }) => {
  const containerRef = useRef(null);
  const scrollContentRef = useRef(null);
  const progressFillRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !scrollContentRef.current || !experience?.length) return;

    const container = containerRef.current;
    const scrollContent = scrollContentRef.current;
    const progressFill = progressFillRef.current;

    // Debounce function to prevent excessive resize handling
    let resizeTimeout;
    const debounce = (func, delay) => {
      return (...args) => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => func.apply(this, args), delay);
      };
    };

    // Check if we're on mobile (below 768px) - moved inside useEffect to avoid SSR issues
    const isDesktop = window.innerWidth > 768;
    const isMobile = !isDesktop;
    
    if (isMobile) {
      // On mobile, just show a simple vertical stack without GSAP
      return;
    }

    // Wait for ScrollTrigger to be loaded
    const initScrollTrigger = async () => {
      if (!ScrollTrigger) {
        const module = await import('gsap/ScrollTrigger');
        ScrollTrigger = module.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);
      }

      // Enhanced resize handler with proper cleanup and re-initialization
      const handleResize = debounce(() => {
        const newIsMobile = window.innerWidth <= 768;
        
        // If switching to mobile, clean up GSAP animations
        if (newIsMobile) {
          if (container._horizontalScroll) {
            container._horizontalScroll.kill();
            container._horizontalScroll = null;
          }
          // Refresh ScrollTrigger to handle layout changes
          ScrollTrigger.refresh();
          return;
        }
        
        // If switching to desktop, reinitialize if needed
        if (!newIsMobile && !container._horizontalScroll) {
          // Small delay to ensure layout has settled
          setTimeout(() => {
            initHorizontalScroll();
          }, 100);
        } else if (!newIsMobile && container._horizontalScroll) {
          // Just refresh ScrollTrigger for existing animations
          ScrollTrigger.refresh();
        }
      }, 150);

      window.addEventListener('resize', handleResize);

      // Function to initialize horizontal scroll
      const initHorizontalScroll = () => {
        // Get the width of the scrollable content
        const scrollWidth = scrollContent.scrollWidth - container.offsetWidth;

        if (scrollWidth > 0) {
          // Create horizontal scroll animation
          const horizontalScroll = gsap.to(scrollContent, {
            x: -scrollWidth,
            ease: 'none',
            scrollTrigger: {
              trigger: container,
              start: 'top top',
              end: `+=${scrollWidth}`,
              scrub: 1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                // Update progress bar
                if (progressFill) {
                  gsap.to(progressFill, {
                    width: `${self.progress * 100}%`,
                    duration: 0.3,
                    ease: 'power2.out'
                  });
                }
                
                // Update progress dots
                const dots = container.querySelectorAll('.progress-dot');
                const currentIndex = Math.round(self.progress * (dots.length - 1));
                dots.forEach((dot, index) => {
                  dot.classList.toggle('active', index === currentIndex);
                });
              }
            }
          });

          // Store reference for cleanup
          container._horizontalScroll = horizontalScroll;
        }
      };

      // Wait for content to be rendered, then initialize
      const timer = setTimeout(() => {
        initHorizontalScroll();
      }, 100);

      // Cleanup function
      return () => {
        clearTimeout(timer);
        clearTimeout(resizeTimeout);
        window.removeEventListener('resize', handleResize);
        if (container._horizontalScroll) {
          container._horizontalScroll.kill();
          container._horizontalScroll = null;
        }
        if (ScrollTrigger) {
          ScrollTrigger.getAll().forEach(trigger => {
            if (trigger.trigger === container) {
              trigger.kill();
            }
          });
        }
      };
    };

    // Initialize ScrollTrigger
    initScrollTrigger();
  }, [experience]);

  if (!experience?.length) return null;

  return (
    <div className="experience-scroll-container" ref={containerRef}>
      <div className="experience-scroll-content" ref={scrollContentRef}>
        {experience.map((e, idx) => (
          <div key={e._id} className="experience-card-horizontal">
            <div className="experience-content-horizontal card-hover">
              <div className="experience-header">
                <h3 className="experience-title-text">{e.role}</h3>
                <div className="experience-company">{e.company}</div>
                <div className="experience-dates">
                  {e.startDate}{" "}
                  {e.endDate
                    ? `→ ${e.endDate}`
                    : e.current
                      ? "→ Present"
                      : null}
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
                    <span key={i} className="experience-tag">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* Progress indicator */}
      <div className="experience-progress">
        <div className="progress-bar">
          <div className="progress-fill" ref={progressFillRef}></div>
        </div>
        <div className="progress-dots">
          {experience.map((_, idx) => (
            <div key={idx} className="progress-dot"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceScroll;
