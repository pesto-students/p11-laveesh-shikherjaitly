function playGuessingGame(numToGuess, totalGuesses = 10) {
    let guessCount = 0;
  
    while (guessCount < totalGuesses) {
      let userInput = prompt(getPromptText(guessCount));
  
      if (userInput === null) {
        // User pressed Cancel
        return 0;
      }
  
      if (userInput.trim() === '' || isNaN(userInput)) {
        alert('Please enter a number.');
        continue;
      }
  
      let guess = parseInt(userInput);
  
      if (guess === numToGuess) {
        guessCount++;
        return guessCount;
      } else if (guess < numToGuess) {
        alert(guess + ' is too small. Guess a larger number.');
      } else {
        alert(guess + ' is too large. Guess a smaller number.');
      }
  
      guessCount++;
    }
  
    return 0;
  }
  
  function getPromptText(guessCount) {
    if (guessCount === 0) {
      return 'Enter a number between 1 and 100.';
    } else {
      return 'Enter another number:';
    }
  }
  