const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer1) => {
  rl.question('What is your name? Nicknames are also acceptable :) ', (answer2) => {
    rl.question('What is an activity you like doing? ', (answer3) => {
      rl.question('What do you listen to while doing that?', (answer4) => {
        rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer5) => {
          rl.question('What is your favourite thing to eat for that meal? ', (answer6) => {
            rl.question('Which sport is your absolute favourite? ', (answer7) => {
              rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer8) => {
var result = answer1 + " ," + answer2 + " ," + answer3 + " ," + answer4 + " ," + answer5 + " ," + answer6 + " ," + answer7 + " ," + answer8;
  console.log(`Thank you for your valuable feedback: ${result}`);

  rl.close();
});
});
});
});
});
});
});
});