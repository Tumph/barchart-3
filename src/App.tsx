// App.tsx
import React, { useState } from 'react';
import './App.css';
import BarGraph from './components/BarGraph';
import ToggleButton from './components/ToggleButton'; // Import the ToggleButton component

export default function App() {
  const [isDarkMode, setDarkMode] = useState(false); // State to manage the current mode

  // Themes for light and dark modes
  const lightMode = {
    barColor: '#ffffff',
    hoveredBarColor: '#ebebeb',
    background: '#59a4ff',
  };

  const darkMode = {
    barColor: '#858585',
    hoveredBarColor: '#0a0a0a',
    background: '#8c8c8c',
  };

  const theme = isDarkMode ? darkMode : lightMode; // Use the selected theme

  const dataArray1 = [
    {
      value: 400,
      legend: 'Jan',
    },
    {
      value: 900,
      legend: 'Feb',
    },
    {
      value: 700,
      legend: 'March',
    },
    {
      value: 500,
      legend: 'April',
    },
  ];

  // Function to toggle between light and dark mode
  const toggleTheme = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div className="container" style={{ backgroundColor: theme.barColor }}>
      <h1>React TypeScript Bar Graph</h1>
      <br></br>
      <ToggleButton toggleTheme={toggleTheme} isDarkMode={isDarkMode}/> {/* Include the ToggleButton */}
      <br></br>
      <BarGraph dataArray={dataArray1} theme={theme} />
      <br></br>
    </div>
  );
}
