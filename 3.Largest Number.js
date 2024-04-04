function largestNumber(num1, num2, num3) {
    // if (num1 > num2 && num1 > num3) {
    //     console.log(`The largest number is ${num1}.`);
    // } else if (num1 > num2 && num1 < num3) {
    //     console.log(`The largest number is ${num3}.`);
    // } else if (num1 > num3 && num1 < num2) {
    //     console.log(`The largest number is ${num3}.`);
    // } else if (num2 > num1 && num2 > num3) {
    //     console.log(`The largest number is ${num3}.`);
    // }
let result = Math.max(num1, num2, num3)
console.log(`The largest number is ${result}.`);
}
largestNumber(-3, -5, -22.5);