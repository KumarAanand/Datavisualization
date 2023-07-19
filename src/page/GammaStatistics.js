import React from 'react';
import {calculateMean,calculateMode,calculateMedian} from '../shared/utils'
import '../Styles/table.css';
class GammaStatistics extends React.Component {
    render() {

        // Assuming 'data' is the dataset in the format { Alcohol: 'Class', Ash: value, Hue: value, Magnesium: value }
        const data = [
            { Alcohol: 'Gamma Mean', Ash: 1.2, Hue: 0.8, Magnesium: 2.5 },
            { Alcohol: 'Gamma Median', Ash: 1.8, Hue: 1.2, Magnesium: 3.2 },
            { Alcohol: 'Gamma Mode', Ash: 1.5, Hue: 0.9, Magnesium: 2.8 },
            // Add more data points as needed
        ];

        function calculateGamma(data) {
            return data.map((item) => {
                const gamma = (item.Ash * item.Hue) / item.Magnesium;
                return { ...item, Gamma: gamma };
            });
        }

        function calculateClasswiseStatistics(data) {
            const groupedData = {};
            data.forEach((item) => {
                const className = item.Alcohol;
                if (!groupedData[className]) {
                    groupedData[className] = [];
                }
                groupedData[className].push(item.Gamma);
            });

            const statistics = Object.entries(groupedData).map(([className, values]) => {
                const mean = calculateMean(values);
                const median = calculateMedian(values);
                const mode = calculateMode(values);

                return { className, mean, median, mode };
            });

            return statistics;
        }

        // Assuming 'data' is the dataset with the Gamma property added
        const dataWithGamma = calculateGamma(data);
        const statistics = calculateClasswiseStatistics(dataWithGamma);

        const statisticsRows = statistics.map(({ className, mean, median, mode }) => (
            <tr key={className}>
                <td>{className}</td>
                <td>{mean.toFixed(2)}</td>
                <td>{median.toFixed(2)}</td>
                <td>{mode}</td>
            </tr>
        ));

        return (
            <table className="table-container">
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

export default GammaStatistics;
