/*
Name: Matthew Pearce
Filename: index.html
Date: Mar 18, 2025
Description: A webpage that contains images and JavaScript
*/

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic4.jpg']

/* Declaring the alternative text for each image file */

const alternativeText = {'pic1.jpg':'A picture of a human eye', 
    'pic2.jpg':'An image of a rock with a wavey texture', 
    'pic3.jpg':'An image of white a purple flowers', 
    'pic4.jpg':'An image of drawings on a wall of a tomb in ancient Egypt', 
    'pic4.jpg':'A moth sitting on a leaf'}

/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
