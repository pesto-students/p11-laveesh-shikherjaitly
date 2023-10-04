// Calculator class
class Calculator {
    add(num1, num2) {
      return num1 + num2;
    }
  
    subtract(num1, num2) {
      return num1 - num2;
    }
  
    multiply(num1, num2) {
      return num1 * num2;
    }
  
    divide(num1, num2) {
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        return "Cannot divide by zero.";
      }
    }
  }
  
  // ScientificCalculator class extends Calculator
  class ScientificCalculator extends Calculator {
    square(num) {
      return num * num;
    }
  
    cube(num) {
      return num * num * num;
    }
  
    power(num, exponent) {
      return Math.pow(num, exponent);
    }
  }
  
  // Create an instance of the ScientificCalculator class
  const calc = new ScientificCalculator();
  
  // Using the "call" method, invoke the "add" method of the Calculator class with arguments 10 and 5
  const result1 = Calculator.prototype.add.call(calc, 10, 5);
  console.log("Result 1 (call):", result1);
  
  // Using the "apply" method, invoke the "subtract" method of the Calculator class with arguments 10 and 5
  const result2 = Calculator.prototype.subtract.apply(calc, [10, 5]);
  console.log("Result 2 (apply):", result2);
  
  // Using the "bind" method, create a new method named "multiplyByTwo" that multiplies a number by 2 and returns the result
  const multiplyByTwo = Calculator.prototype.multiply.bind(calc, 2);
  
  // Using the "bind" method, create a new method named "powerOfThree" that raises a number to the power of 3 and returns the result
  const powerOfThree = Calculator.prototype.power.bind(calc, 3);
  
  // Optional: Call the "multiplyByTwo" method on the instance of the ScientificCalculator class with argument 5
  const result3 = multiplyByTwo(5);
  console.log("Result 3 (multiplyByTwo):", result3);
  
  // Optional: Call the "powerOfThree" method on the instance of the ScientificCalculator class with argument 2
  const result4 = powerOfThree(2);
  console.log("Result 4 (powerOfThree):", result4);
  