const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const totalBatteries = batteryBatches.reduce((allBatteriesCombined, batch) => allBatteriesCombined + batch, 0);

// the output sum of all the assembled batteries equal to 31
console.log(batteryBatches);