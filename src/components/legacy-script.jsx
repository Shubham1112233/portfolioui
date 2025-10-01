"use client";

import {useEffect} from "react";

export default function LegacyScript() {
  useEffect(() => {
    const nav = document.querySelector("nav");
    const scrollBtn = document.querySelector(".scroll-button a");
    const body = document.querySelector("body");
    const navBar = document.querySelector(".navbar");
    const menuBtn = document.querySelector(".menu-btn");
    const cancelBtn = document.querySelector(".cancel-btn");

    // Sticky nav & scroll-to-top
    const onScroll = () => {
      if (document.documentElement.scrollTop > 20) {
        nav?.classList.add("sticky");
        if (scrollBtn) scrollBtn.style.display = "block";
      } else {
        nav?.classList.remove("sticky");
        if (scrollBtn) scrollBtn.style.display = "none";
      }
    };
    window.addEventListener("scroll", onScroll);

    // Side nav open/close
    const openMenu = () => {
      navBar?.classList.add("active");
      if (menuBtn) {
        menuBtn.style.opacity = "0";
        menuBtn.style.pointerEvents = "none";
      }
      if (body) body.style.overflow = "hidden";
      if (scrollBtn) scrollBtn.style.pointerEvents = "none";
    };
    const closeMenu = () => {
      navBar?.classList.remove("active");
      if (menuBtn) {
        menuBtn.style.opacity = "1";
        menuBtn.style.pointerEvents = "auto";
      }
      if (body) body.style.overflow = "auto";
      if (scrollBtn) scrollBtn.style.pointerEvents = "auto";
    };
    menuBtn?.addEventListener("click", openMenu);
    cancelBtn?.addEventListener("click", closeMenu);

    // Close side nav on link click
    document.querySelectorAll(".menu li a").forEach((a) => {
      a.addEventListener("click", closeMenu);
    });

    // Rainbow text setup (from legacy)
    const nbStops = 10;
    const dir = "left"; // left, right, top, bottom
    const getRainbowString = (stops, saturation, luminosity) => {
      const gap = 360 / stops;
      const colors = [];
      for (let i = 0; i < stops; i++) {
        colors.push(`hsl(${i * gap},${saturation}%,${luminosity}%)`);
      }
      return colors.join();
    };
    const setupRainbow = () => {
      const rainbowStr = getRainbowString(nbStops, 80, 50);
      const oppositeDir = dir === "left" ? "right" : dir === "right" ? "left" : dir === "top" ? "bottom" : "top";
      const css = `.rainbowText {background-clip:text;color:transparent;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-image:-webkit-linear-gradient(${dir},${rainbowStr});background-image:linear-gradient(to ${oppositeDir},${rainbowStr})}`;
      const style = document.createElement("style");
      style.type = "text/css";
      style.appendChild(document.createTextNode(css));
      document.head.appendChild(style);
    };
    setupRainbow();

    // No GSAP: keep only sticky + menu + scroll to top behaviors

    return () => {
      window.removeEventListener("scroll", onScroll);
      menuBtn?.removeEventListener("click", openMenu);
      cancelBtn?.removeEventListener("click", closeMenu);
    };
  }, []);

  return null;
}


