
const num1 = parseInt(prompt("Enter the first number : "));
var ope = window.prompt("Type operator (+, -, *, /): ");
const num2 = parseInt(prompt("Enter the second number : "));


function add(num1, num2) {
    return (num1 + num2);
  }


function subtract(num1, num2) {
    return (num1 - num2);
  }

function Multiply(num1, num2) {
    return (num1 * num2);
  }

function divide(num1, num2) {
    return (num1/num2);
  }



if ( ope == "+") {
    window.alert(`The sum of ${num1} and ${num2} is: ${add(num1, num2)}`);
  } 
else if( ope == "-"){
    window.alert(`The difference of ${num1} and ${num2} is: ${subtract(num1, num2)}`);
  }
else if( ope == "*"){
    window.alert(`The product of ${num1} and ${num2} is: ${Multiply(num1, num2)}`);
  }
  else if( ope == "/"){
    window.alert(`The quotient of ${num1} and ${num2} is: ${divide(num1, num2)}`);
  }
