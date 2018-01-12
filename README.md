number-guessing-game
====================

Main Exercise
-------------

Make a number guessing game on a webpage. The webpage randomizes a number and
the user tries to guess the number by inputting it in a text field. The webpage
should tell if the correct number is bigger or smaller than the one guessed. A
new number is randomized when the user finds the correct number. For example:
1. Number 9 is randomized
2. User inputs 5
3. The webpage prints “The number is bigger than 5”
4. User inputs 10
5. The webpage prints “The number is smaller than 10”
6. User inputs 9
7. The webpage prints “You guessed the correct number!”
8. Number 4 is randomized and the game continues


Secondary Exercises
-------------------

### Coding Conventions

Coding conventions are used to make the code clean and easy to read. In the main
exercise use ESLint to make sure your code matches our coding conventions (the
default ESLint configuration). Install ESLint in your project using `npm` and
add the `eslint` plugin to Visual Studio Code. If everything went well, you
should see errors and warnings during coding in Visual Studio Code.

### Node.js

In the number guessing game the user can read the randomized number with
browser's developer tools which makes the game unfair. Try it out yourself, hack
the game! To fix this the number should be randomized on the server, or
"backend". Node.js is a backend solution.

Create a backend with Node.js using Express.js. The backend should have one
`POST` handler, `/guess`, which takes the guessed number as an URL parameter. A
new number is randomized when `/guess` is called the first time. It should
return either "The number is bigger than x", "The number is smaller than x" or
"You guessed the correct number!" depending on the guess. When the correct
number was guessed a new number should be randomized. 

In this tutorial it is fine to do the guess request with a form action which
causes a new page to load. In the next tutorial we create a dynamic page that
shows the result without leaving the page.

Create a webpage, or "frontend", that uses the new backend by doing fetches to
`/guess`. Now the user can't cheat using developer tools.

### Fetch API

Improve the number guessing game so it shows the result without leaving the
page. You can do this using the JavaScript Fetch API.

### Hosting files with Node.js

Now the game can only be played from a local HTML file because it's not hosted
anywhere. No-one else can play the game! Let’s host the web page using the
`static-express` module. Now the game should be playable from `localhost`
`127.0.0.1:[port]` and your IP address inside the local area network.

This is also a required step for the next exercise because sessions don't work
with local files.

### Sessions

At the moment only one player can play the game. If someone else starts the
game, the player will be guessing the same number as the first player. This can
be fixed using sessions. Update the game so that each user gets a new session
and each session has its own number to guess.

Remember to use the site hosted with `static-express` because sessions don't
work with local files.
