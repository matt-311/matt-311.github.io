/*
Name: Matthew Pearce
Filename: index.html
Date: Mar 18, 2025
Description: A webpage that contains bouncing balls (using JavaScript!) with an evil circle
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
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }
  // Updating ball data
  update() {
    if ((this.x + this.size) >=width) {
      this.velX = -(this.velX)
    }
    if ((this.x - this.size) <=0) {
      this.velX = -(this.velX)
    }
    if ((this.y + this.size) >=height) {
      this.velY = -(this.velY)
    }
    if ((this.y - this.size) <=0) {
      this.velY = -(this.velY)
    }
    this.x += this.velX;
    this.y += this.velY;
  }
  collisionDetect() {
    for (const ball of balls) {
      if (this !== ball) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < this.size + ball.size) {
          ball.colour = this.colour = randomRGB();
        }
      }
    }
  }
}

// Animating the ball
const balls = []

while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size,
  );
  balls.push(ball);
}

function loop() {
  ctx.fillStyle = "rgb(0 0 0 / 25%)";
  ctx.fillRect(0, 0, width, height);
  for (const ball of balls) {
    ball.draw();
    ball.update();
    ball.collisionDetect();
  }
  requestAnimationFrame(loop);
}

loop();