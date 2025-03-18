/*
Name: Matthew Pearce
Filename: index.html
Date: Mar 18, 2025
Description: A webpage that contains bouncing balls (using JavaScript!)
*/

// setup canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

// Creating a ball class

class Ball {
  constructor(x, y, velX, velY, colour, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.colour = colour;
    this.size = size;
  }
  // Ball drawing method
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.colour;
    ctx.arc(this.x, this.y, 0, 2 * Math.PI);
    ctx.fill();
  }  
}