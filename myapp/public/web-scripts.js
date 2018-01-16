/* eslint-env browser */
(function () {
  'use strict'

  var guessInput = document.querySelector('#guess-input')
  var makeAGuessButton = document.querySelector('#make-a-guess-button')
  var lastGuessOutput = document.querySelector('#last-guess-output')

  makeAGuessButton.addEventListener('click', function (event) {
    var newGuessString = guessInput.value

    fetch('/guess', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        value: newGuessString
      })
    }).then(function (response) {
      return response.text()
    }).then(function (text) {
      lastGuessOutput.value = text
    })
  })
}())
