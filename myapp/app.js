const express = require('express')
const session = require('express-session')
const port = 3000
const app = express()
app.use(express.static('myapp/public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

const MAX_NUMBER = 100
const N_DASH = '–'
const getRandomNumber = function () {
  return Math.floor(Math.random() * MAX_NUMBER + 1)
}

app.post('/guess', (request, response) => {
  let guessText = ''
  let newGuessString = request.body.value.trim()
  let newGuess = Number.parseInt(newGuessString, 10)

  if (typeof request.session.numberToGuess !== 'number') {
    request.session.numberToGuess = getRandomNumber()
  }

  if (
    !/^[0-9]+$/.test(newGuessString) || newGuess < 0 || MAX_NUMBER < newGuess
  ) {
    guessText = '(Error: Guess must be an integer between 0' + N_DASH +
      MAX_NUMBER + ' (inclusive)!)'
  } else if (newGuess === request.session.numberToGuess) {
    guessText = 'You guessed the correct number! The number has now been ' +
      'reset!'
    request.session.numberToGuess = getRandomNumber()
  } else if (newGuess < request.session.numberToGuess) {
    guessText = 'The number is bigger than ' + newGuess + '.'
  } else if (request.session.numberToGuess < newGuess) {
    guessText = 'The number is smaller than ' + newGuess + '.'
  }
  response.send(guessText)
})

app.listen(port, () => {
  console.log('App usable at: http://localhost:' + port + '/')
})
