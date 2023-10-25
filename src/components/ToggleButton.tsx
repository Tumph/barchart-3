// ToggleButton.tsx
import React from 'react';

type ToggleButtonProps = {
  toggleTheme: () => void;
  isDarkMode: boolean;
};

const ToggleButton: React.FC<ToggleButtonProps> = ({ toggleTheme, isDarkMode }) => {
  return (
    <button onClick={toggleTheme} style={{margin: '5% 20%', padding: '5px', alignItems: 'center'}}>
      Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default ToggleButton;
