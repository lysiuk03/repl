// Libraries
import React from 'react';
import { Link } from "react-router-dom";

// Styles
import './Logo.css';

interface LogoProps {
  isDarkMode: boolean; // Add a prop to determine if dark mode is active
}

const Logo: React.FC<LogoProps> = ({ isDarkMode }) => {
  const logoSrc = isDarkMode ? '/images/logo-dark.png' : '/images/logo-light.png'; // Set the logo based on theme

  return (
    <Link to="/">
      <img
        src={logoSrc}
        alt="Logo"
      />
    </Link>
  );
};

export default Logo;
