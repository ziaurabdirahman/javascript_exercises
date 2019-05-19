// Winner chicken dinner

var isRunning = true

while (isRunning) {
  var randomNumber = Math.floor(Math.random() * 10 + 1);
  if (randomNumber === 9) {
    console.log('Winner Winner Chicken Dinner')
    isRunning = false
  } else {
    console.log('You got ' + randomNumber)
  }
}