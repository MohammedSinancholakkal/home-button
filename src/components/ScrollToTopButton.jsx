import React, { useState, useEffect } from "react";
import "../styles/ScrollToTopButton.css"; 

const ScrollToTopButton = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showScroll && (
      <button
        className="scroll-to-top"
        onClick={scrollToTop}
        aria-label="Scroll to Top"
      >
        ↑
      </button>
    )
  );
};

export default ScrollToTopButton;
