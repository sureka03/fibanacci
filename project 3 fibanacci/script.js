// Function to generate Fibonacci sequence
function generateFibonacci(limit) {
    let fibonacci = [0, 1];
    
    for (let i = 2; i < limit; i++) {
      fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    
    return fibonacci;
  }
  
  // Display Fibonacci sequence in the HTML
  const fibonacciContainer = document.getElementById('fibonacci-container');
  const fibonacciSequence = generateFibonacci(10); // Change limit as needed
  
  fibonacciSequence.forEach(number => {
    const fibonacciNumber = document.createElement('div');
    fibonacciNumber.classList.add('fibonacci-number');
    fibonacciNumber.textContent = number;
    fibonacciContainer.appendChild(fibonacciNumber);
  });
  