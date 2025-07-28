window.addEventListener('DOMContentLoaded', () => {
    const calculatorOutputVisor = document.querySelector('#calc-output');
    let calculatorText = '';
  
    function processInput(event) {
      const input = event.target.value;
  
      switch (input) {
        case 'C':
          calculatorText = '0';
          break;
        case '=':
          calculatorText = eval(calculatorText);
          break;
        case "+":
        case "-":
        case "/":
        case "*":
          const lastCharacterIsOperation =
            calculatorText.endsWith('+') ||
            calculatorText.endsWith('-') ||
            calculatorText.endsWith('*') ||
            calculatorText.endsWith('/');
  
          if (lastCharacterIsOperation) {
            calculatorText = calculatorText.slice(0, -1).concat(input);
          } else {
            calculatorText += input;
          }
          break;
        default:
          if (calculatorText === '0') {
            calculatorText = input;
          } else {
            calculatorText += input;
          }
      }
  
      calculatorOutputVisor.textContent = calculatorText;
    }
  
    const buttons = document.querySelectorAll('input[type=button]');
    buttons.forEach((button) =>
      button.addEventListener('click', processInput)
    );
  });
  