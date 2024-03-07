# Match Game

This memory match game builds a 4x4 grid and challenges the user to find all eight matching pairs to win. Clicking individual cards reveals their images, with two images being compared at a time. The goal is to win with the least number of clicks.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Choose a game mode (either drinks or desserts) before starting the game.
- Reveal a card's image when the card is clicked.
- See previous matches while continuing to match remaining cards.
- Be presented with a count summary and an option to play after matching all pairs.
- See hover and focus states for all interactive elements on the page.

### Screenshots

![](./public/Match-Game_Start-Screen.png)
![](./public/Match-Game_Game-Board.png)
![](./public/Match-Game_Game-Over-Screen.png)

## My process

### Built with

- HTML5
- CSS3
- JavaScript
- React

### Continued development

I plan to create a Card component and move the handling of displaying card images when clicked into that component. Currently the whole GameBoard rerenders on every click, so I will optimize the code by only rerendering the clicked card.

Since some of the drink images are identical aside from a color change, I also plan to add card titles below the images for improved accessibility.

### Useful resources
- [Udemy: React - The Complete Guide 2024](https://www.udemy.com/course/react-the-complete-guide-incl-redux/) - This React course by Maximilian Schwarzmuller, specifically the Tic-Tac-Toe project, inspired me to try building my own game with React. This course provides many hands-on learning opportunities and emphasizes React best practices early and often.

- [Blush: The Munchies](https://blush.design/collections/the-munchies/the-munchies) - This collection of food and drink illustrations by Elsma Ramirez was used for the game's card images. There are many more, similarly-styled illustrations in this collection that could be used to expand the game with additional categories and/or difficulty levels.

## Author

- [@mjclaypool](https://github.com/mjclaypool)