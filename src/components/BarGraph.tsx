import React, { useMemo } from 'react';
import BarItem from './BarItem';
import './BarGraph.css';





export type Props = {
  dataArray: Array<{
    value: number;
    legend: string;
  }>;
  theme: {
    barColor: string;
    hoveredBarColor: string;
    background: string;
  };
};


export default function BarGraph({dataArray, theme}: Props) {
  const barItems = useMemo(() => {
    let highestValue = 0;

    // get the highest value
    dataArray.forEach(({ value }) => {
      highestValue = Math.max(highestValue, value);
    });


    // calculate "barPercentage" using the "highestValue" to construct the bar items
    return dataArray.map((item) => ({
      legend: item.legend,
      barPercentage: `${Math.round((item.value / highestValue) * 100)}%`,
      value: item.value,
    }));
  }, [dataArray]);

  return (
    <div className={`bar-graph `}  style={{ backgroundColor: theme.hoveredBarColor }}>
      <div className={`bars-list`}>
      {barItems.map((barItem, idx) => (
      <BarItem
        key={idx}
        legend={barItem.legend}
        barPercentage={barItem.barPercentage}
        theme={theme}
        value={barItem.value}
        darkMode={true}
      />
      ))}
      </div>
      <div className="bars-line" />
    </div>
  );
}
