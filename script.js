document.addEventListener('DOMContentLoaded', function() {
    let display = document.getElementById('display');
    let buttons = Array.from(document.getElementsByTagName('button'));
    let currentOperand = '';
    let previousOperand = '';
    let operation = null;
  
    // Function to handle button clicks
    function handleButtonClick(e) {
      const value = e.target.innerText;
  
      if (value === 'AC') {
        // Clear the display and reset operands
        currentOperand = '';
        previousOperand = '';
        operation = null;
        display.innerText = '0';
      } else if (value === '=') {
        // Calculate the result
        if (operation !== null) {
          try {
            currentOperand = eval(`${previousOperand}${operation}${currentOperand}`);
            display.innerText = currentOperand;
            operation = null;
          } catch {
            display.innerText = 'Error';
          }
        }
      } else if (value === 'x²') {
        // Calculate the square
        currentOperand = (parseFloat(currentOperand) ** 2).toString();
        display.innerText = currentOperand;
      } else if (['+', '-', '*', '/', '%'].includes(value)) {
        // Set the operation
        if (currentOperand === '') return;
        if (previousOperand !== '') {
          currentOperand = eval(`${previousOperand}${operation}${currentOperand}`);
        }
        operation = value;
        previousOperand = currentOperand;
        currentOperand = '';
      } else {
        // Append number or decimal point to current operand
        currentOperand += value;
        display.innerText = currentOperand;
      }
    }
  
    // Add event listeners to buttons
    buttons.forEach(button => {
      button.addEventListener('click', handleButtonClick);
    });
  });
  