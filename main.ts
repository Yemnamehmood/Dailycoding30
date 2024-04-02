//DAY 30
//TASK 1 (Rounding to the nearest integer) using functions
//this function rounds a decimal number to the nearest whole number 
function roundtonearestInteger (num: number): number {
    return Math.round(num); //rounds the number 
}
//EXAMPLE: Rounding a decimal 
console.log(roundtonearestInteger(5.10));  //Result 5
console.log(roundtonearestInteger(3.3));   //Result 3
//it shows how the function rounds number either up or down. 

//TASK 2 (Converting strings to numbers) using functions
//this function changes a string into a number 
function convertStringToNumber(str: string): number {
    return parseFloat(str); //it converting the string to a number 
}
//EXAMPLE: Turning a numeric string into a real number
console.log(convertStringToNumber("147.47")); //Result 147.47
console.log(convertStringToNumber("100"));   //Result 100
//We took strings that look like numbers and turning them into actual numbers 

//TASK 3 (Checking if a Value is NaN) using isNaN
//this function checks if value is not a number (NaN)
function isvalueNaN(value:any): boolean {
    return isNaN(value); //checks and returns true if the value is NaN, false otherwise 
}
//EXAMPLE: Checking different values
console.log(isvalueNaN("Happy Coding")); //Result true, because "Happy Coding" isn't number
console.log(isvalueNaN(1456));          //Result false because 1456 is a number
//This way, we can guard against unexpected non-numeric values in our calculations or inputs.
