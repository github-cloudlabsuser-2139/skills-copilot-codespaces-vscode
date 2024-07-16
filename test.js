// Calculator constructor function
function Calculator() {
    this.currentValue = 0;
}

// Method to add a number to the current value
Calculator.prototype.add = function (number) {
    this.currentValue += number;
};

// Method to subtract a number from the current value
Calculator.prototype.subtract = function (number) {
    this.currentValue -= number;
};

// Method to multiply the current value by a number
Calculator.prototype.multiply = function (number) {
    this.currentValue *= number;
};

// Method to divide the current value by a number
Calculator.prototype.divide = function (number) {
    if (number !== 0) {
        this.currentValue /= number;
    } else {
        console.log("Error: Division by zero is not allowed.");
    }
};

// Method to get the current value
Calculator.prototype.getValue = function () {
    return this.currentValue;
};

// Create a new calculator object
const calculator = new Calculator();

// Example usage
calculator.add(5);
calculator.multiply(2);
calculator.subtract(3);
calculator.divide(2);

console.log("Current value:", calculator.getValue());

calculator.add(5);
console.log("Current value:", calculator.getValue()); // Expected output: 5

// Test case 2: Subtracting a number
calculator.subtract(3);
console.log("Current value:", calculator.getValue()); // Expected output: 2

// Test case 3: Multiplying by a number
calculator.multiply(2);
console.log("Current value:", calculator.getValue()); // Expected output: 4

// Test case 4: Dividing by a non-zero number
calculator.divide(2);
console.log("Current value:", calculator.getValue()); // Expected output: 2

// Test case 5: Dividing by zero
calculator.divide(0); // Expected output: Error: Division by zero is not allowed.
console.log("Current value:", calculator.getValue()); // Expected output: 2// Test case 1: Adding a number