'use strict';

// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++
// DATA SETUP
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++

// DOM variables
// -----------------
var picContainer = document.getElementById('pic-container');
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');
var names = ['bag','banana','bathroom','boots','breakfast','bubblegum','chair','cthulthu','dog-duct','dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass'];//step one set up global variables
var allProducts =[];
var newArray = [];
var oldArray = [];
// Global variables
// -----------------
var allProducts = [];

// Constructor
// -----------------
function Product(name) {
  this.name=name;
  this.filepath = 'img/'+name+'.jpg';
  this.clicks = 0;
  this.views = 0;
  allProducts.push(this);
}

// Instances
// -----------------

for(var i=0; i<names.length; i++) {
new Product(names[i]);
}
// console.table(allProducts);//step two object constructor and instances
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++
// DECLARE FUNCTIONS
// (DEFINE ACTIONS)
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++

function rand() {
  // generate a random number between 0 and allProducts.length
  return Math.floor(Math.random() * allProducts.length);
  // console.log(allProducts[rand()]);
}

function preventDupes() {
  // logic to prevent duplicates
  // duplicates with prior set of images
  // duplicates within the current set of images
}

function showThreePics() {
  makeArrayOfThreeNumbers();
  left.src = allProducts[newArray[0]].filepath;
  allProducts[newArray[0]].view+=1;
  center.src = allProducts[newArray[1]].filepath;
  allProducts[newArray[1]].view+=1;
  right.src = allProducts[newArray[2]].filepath;
  allProducts[newArray[2]].view+=1;
}

function renderList() {
  // display a list of items and total clicks/views
}

function handleClick(event) {
  event.preventDefault();
  // identify who was clicked
  console.log(event.target, 'was clicked');
  // tally the click
  // display 3 new images
  // prevent duplicates
  // alert for clicks not on images
  // clear old images
  // check whether total clicks <25
  // after 25, remove event listeners on picNames
  // after 25, show "Results" button
}
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++
// CODE THAT RUNS ON PAGE LOAD
// (EXECUTE ACTIONS)
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++

showThreePics();
// picContainer.addEventListener('click', handleClick);
