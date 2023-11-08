// app.js
const readline = require('readline');
const fs = require('fs');
const generateGreeting = require('./greetings');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter your name: ', (name) => {
  const greeting = generateGreeting(name);

  fs.writeFile('output.txt', greeting, (err) => {
    if (err) {
      console.error('An error occurred while saving the greeting:', err);
    } else {
      console.log('Greeting saved to output.txt.');
    }

    rl.close();
  });
});
