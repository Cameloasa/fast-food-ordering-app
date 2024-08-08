import React from 'react';


const ThemeToggle = ({ toggleTheme }) => {
  
  return (
    <button className="btn btn-secondary"
    style={{textAlign: 'center'}}
     onClick={toggleTheme}>
     🍕🍔🥗 Fast food menu
    </button>

    
  );
};

export default ThemeToggle;