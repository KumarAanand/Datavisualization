import React from 'react';
import '../Styles/table.css';
import {calculateMean,calculateMode,calculateMedian} from '../shared/utils'

// Assuming 'data' is the dataset in the format { Alcohol: 'Class', Flavanoids: value }
const data = [
  { Alcohol: 'Flavanoids Mean', Flavanoids: 3.5 },
  { Alcohol: 'Flavanoids Median', Flavanoids: 2.8 },
  { Alcohol: 'Flavanoids Mode', Flavanoids: 4.2 },
  // Add more data points as needed
];

class FlavanoidsStatistics extends React.Component {
  render() {
    // Group the data by 'Alcohol' class
    const groupedData = {};
    data.forEach((item) => {
      const className = item.Alcohol;
      if (!groupedData[className]) {
        groupedData[className] = [];
      }
      groupedData[className].push(item.Flavanoids);
    });

       // Calculate mean, median, and mode for each class
    const statisticsRows = Object.entries(groupedData).map(([className, values]) => {
      const mean = calculateMean(values);
      const median = calculateMedian(values);
      const mode = calculateMode(values);

      return (
        <tr key={className}>
          <td>{className}</td>
          <td>{mean.toFixed(2)}</td>
          <td>{median.toFixed(2)}</td>
          <td>{mode}</td>
        </tr>
      );
    });

    return (
      <table  className="table-container">
        <thead>
          <tr>
            <th>Measure</th>
            <th>Mean</th>
            <th>Median</th>
            <th>Mode</th>
          </tr>
        </thead>
        <tbody>{statisticsRows}</tbody>
      </table>
    );
  }
}

export default FlavanoidsStatistics;
