const express = require('express')
const app = express()
app.use(express.static('myapp/public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const MAX_NUMBER = 100
const N_DASH = '–'
const getRandomNumber = function () {
  return Math.floor(Math.random() * MAX_NUMBER + 1)
}
let numberToGuess = getRandomNumber()

app.post('/guess', (request, response) => {
  let guessText = ''
  let newGuessString = request.body.value.trim()
  let newGuess = Number.parseInt(newGuessString, 10)

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
  response.send(guessText)
})

app.listen(3000, () => console.log('Listening on port 3000.'))
