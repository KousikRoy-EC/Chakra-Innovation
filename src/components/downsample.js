// downsample.js
function downsample(data, windowSize) {
    const downsampledData = [];
  
    for (let i = 0; i < data.length; i += windowSize) {
      const windowData = data.slice(i, i + windowSize);
  
      // Check if windowData is an array and not empty before performing reduce
      if (Array.isArray(windowData) && windowData.length > 0) {
        const avgProfit = windowData.reduce((sum, point) => sum + point.profit, 0) / windowSize;
        downsampledData.push({ timestamp: windowData[0].timestamp, profit: avgProfit });
      }
    }
  
    return downsampledData;
  }
  
  export default downsample;
  