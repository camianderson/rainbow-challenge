# Rainbow Challenge
by [Cami Anderson](https://github.com/camianderson).

## Table of Contents
  - [Introduction](#introduction)
  - [Technologies](#technologies)
  - [Features](#features)
  - [Illustrations](#illustrations)
  - [Possible Future Extensions](#possible-future-extensions)
  - [Set Up](#set-up)
  - [Organizational Resources](#organizational-resources)
  - [Sources](#sources)
  - [Project Specs](#project-specs)

## Introduction

 The Rainbow Challenge is a tic-tac-toe game where the players can chose the rainbow or the unicorn token to play with. It is build as a user interactive front-end application using JavaScript, HTML, and CSS.

## Technologies
  - Javascript
  - HTML
  - CSS

## Features

- The top sentence displays which player’s turn it is;
- The player can only place their token in an empty square, attempting to place their token on a square that’s already occupied will not work, and it remains their turn;
- Once they place their token, it becomes the other player’s turn (the top sentence updates to communicate this);
- A player can win by connecting 3 horizontally, vertically, or diagonally; 
- When a win occurs:
  - The top sentence changes to declare the winner;
  - The DOM updates to state how many wins the player has total;
  - The game RESTARTS ITSELF after a brief pause, (long enough that the winner message can be read before resetting);
  - The player who didn’t begin the previous game now is the first player to go in the new game.
- When a draw occurs the top sentence declares a draw, neither player’s win count increases or decreases. The game restarts after a brief pause, with the opposite player beginning the game (just like when a game restarts after a player wins).

## Illustrations



https://user-images.githubusercontent.com/98124157/165319557-b5b28534-ccb7-482d-8c1a-6e3575bf4171.mp4




## Possible Future Extensions

  - Implement LocalStorage to save the results after refresh;
  - Integrate an AI to play againist a single player;
  - User ability to choose their tokens.

## Set Up

1. Fork this repo;
2. Clone the repo to your local machine;
3. View the project in the browser by running open index.html in your terminal.

## Organizational Resources
- [Notion Agenda](https://www.notion.so/Tic-Tac-Toe-Agenda-e3e62e136cfa4865a7258eeac7e46750)

## Sources
  - [MDN](http://developer.mozilla.org/en-US/)
  - [W3Schools](https://www.w3schools.com/)
  - [CSS-TRICKS](https://css-tricks.com/)
  - [Stack Overflow](https://stackoverflow.com/questions/4457506/set-the-table-column-width-constant-regardless-of-the-amount-of-text-in-its-cell) 
  - [Font](https://www.fontspace.com/hearts-font-f24854) 
  - [Background Image](https://4kwallpaper.wiki/wp-content/uploads/2019/07/361378.jpg)
  - [Favicon](https://www.flaticon.com/free-icon/rainbow_458842?term=rainbow&page=1&position=1&page=1&position=1&related_id=458842&origin=tag)

## Project Specs
  - The project spec & rubric can be found [here](https://frontend.turing.edu/projects/module-1/tic-tac-toe-solo-v2.html).
