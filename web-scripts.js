(function () {
  'use strict'

  var MAX_NUMBER = 100
  var N_DASH = '–'
  var getRandomNumber = function () {
    return Math.floor(Math.random() * MAX_NUMBER + 1)
  }
  var guessInput = document.querySelector('#guess-input')
  var makeAGuessButton = document.querySelector('#make-a-guess-button')
  var lastGuessOutput = document.querySelector('#last-guess-output')
  var numberToGuess = getRandomNumber()

  makeAGuessButton.addEventListener('click', function (event) {
    var newGuessString = guessInput.value.trim()
    var newGuess = parseInt(newGuessString, 10)
    var guessText = ''

    if (
      !/^[0-9]+$/.test(newGuessString) || newGuess < 0 || MAX_NUMBER < newGuess
    ) {
      guessText = '(Error: Guess must be an integer between 0' + N_DASH +
        MAX_NUMBER + ' (inclusive)!)'
    } else if (newGuess === numberToGuess) {
      guessText = 'You guessed the correct number! The number has now been ' +
        'reset!'
      numberToGuess = getRandomNumber()
    } else if (newGuess < numberToGuess) {
      guessText = 'The number is bigger than ' + newGuess + '.'
    } else if (numberToGuess < newGuess) {
      guessText = 'The number is smaller than ' + newGuess + '.'
    }
    lastGuessOutput.value = guessText
  })
}())
