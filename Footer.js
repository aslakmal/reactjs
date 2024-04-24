import React, { useEffect } from 'react';

function Footer() {
  useEffect(() => {
    // Define handle variable
    const handleScript = document.createElement('script');
    handleScript.innerHTML = `
      var handle = {"0":"https:\/\/hashtank.io\/wp-content\/themes\/HashTank","icon":"https:\/\/hashtank.io\/wp-content\/themes\/HashTank"};
    `;
    document.body.appendChild(handleScript);

    // Load JavaScript files
    const scripts = [
      './js/jquery.min.js',
      './js/owl.carousel.min.js',
      './js/jquery-migrate.min.js',
      './js/gsap.min.js',
      './js/ScrollTrigger.min.js',
      './js/lightbox.min.js',
      './js/main.js'
    ];

    scripts.forEach(src => {
      const script = document.createElement('script');
      script.src = src;
      document.body.appendChild(script);
    });

    // Cleanup
    return () => {
      document.body.removeChild(handleScript);
      scripts.forEach(src => {
        const script = document.createElement('script');
        script.src = src;
        document.body.removeChild(script);
      });
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <footer>
      <p>&copy; 2024 Your Website</p>
    </footer>
  );
}

export default Footer;
