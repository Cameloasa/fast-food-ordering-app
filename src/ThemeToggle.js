//rafe
import React, {useState} from 'react';

const ThemeToggle = ({ toggleTheme }) => {
  return (
    <button className="btn btn-secondary" onClick={toggleTheme}>
      Toggle Theme
    </button>

    
  );
};

export default ThemeToggle;