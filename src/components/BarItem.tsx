import React, { useState, useEffect } from 'react';
import './BarItem.css';

export type Props = {
  legend: string;
  barPercentage: string;
  theme: {
    barColor: string;
    hoveredBarColor: string;
    background: string;
  };
  value: number;
  darkMode: boolean;
};


export default function BarItem(props: Props) {
  const [isHovered, setHovered] = useState(false);
  const [isAnimated, setAnimated] = useState(false);

 
  const barStyles = {
    height: props.barPercentage,
    backgroundColor: props.darkMode
      ? props.theme.background
      : props.theme.barColor,
  };

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setAnimated(true);
    }, 300);

    return () => {
      clearTimeout(animationTimeout);
    };
  }, []);

  return (
    <div
      className={`bar-item ${isHovered ? 'hovered' : ''} ${
        isAnimated ? 'animated' : ''
      } ${props.darkMode ? 'darkmode' : ''}`}
      style={barStyles} // Apply the styles
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {isHovered && (
        <div className="bar-item-tooltip">
          {props.value}
        </div>
      )}
      <div className="bar-item-legend">{props.legend}</div>
    </div>
  );
}

