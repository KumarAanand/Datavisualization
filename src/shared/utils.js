 // Utility function to calculate the mean
 export function calculateMean(values) {
    const sum = values.reduce((acc, value) => acc + value, 0);
    return sum / values.length;
  }
  
  // Utility function to calculate the median
  export function calculateMedian(values) {
    const sortedValues = values.slice().sort((a, b) => a - b);
    const mid = Math.floor(sortedValues.length / 2);
    return sortedValues.length % 2 === 0
      ? (sortedValues[mid - 1] + sortedValues[mid]) / 2
      : sortedValues[mid];
  }
  
  // Utility function to calculate the mode
  export function calculateMode(values) {
    const counts = {};
    values.forEach((value) => {
      counts[value] = (counts[value] || 0) + 1;
    });
  
    let modeValue = null;
    let maxCount = 0;
    Object.entries(counts).forEach(([value, count]) => {
      if (count > maxCount) {
        modeValue = value;
        maxCount = count;
      }
    });
  
    return modeValue;
  }