const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// let sum=0;
// for (let n of batteryBatches)
// sum +=n;
// console.log(sum)

const totalBatteries = batteryBatches.reduce(
    (accumulator, currentValue) => accumulator + currentValue);
console.log(totalBatteries)