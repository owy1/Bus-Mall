'use strict';

var imageSilo =[];
var dir = '/Users/owy1/codefellows/201/Bus-Mall/images/';
var left = document.getElementById('foto1');
var center = document.getElementById('foto2');
var right = document.getElementById('foto3');
var gutter = document.getElementById('outside');
var imageList = document.getElementById('tally');
var currentThree = [];
var currentThreeIndex = [];

// create object
function Image(name) {
this.imageName = dir+name+'.jpg';
this.used = false;
this.imageTally = 0;
this.imageViews = 0;
this.image = name;
imageSilo.push(this);
}

// new instances
new Image('bag');
new Image('banana');
new Image('bathroom');
new Image('boots');
new Image('breakfast');
new Image('bubblegum');
new Image('chair');
new Image('cthulhu');
new Image('dog-duck');
new Image('dragon');
new Image('pen');
new Image('pet-sweep');
new Image('scissors');
new Image('shark');
new Image('sweep');
new Image('tauntaun');
new Image('unicorn');
new Image('usb');
new Image('water-can');
new Image('wine-glass');
// console.log(imageSilo);
// generate random index
function selectRandomFoto() {
 var randomIndex = Math.floor(Math.random()*imageSilo.length);
return(randomIndex);
}

function acctRandomFoto() {
// var currentThree = [];
// var currentThreeIndex = [];

for (var i = 0; i<3; i++) {
  var temp = selectRandomFoto();
  currentThree.push(imageSilo[temp].image);
  currentThreeIndex.push(temp);
  imageSilo[temp].used = true;
  imageSilo[temp].imageViews +=1;

var trueTot = 3;

for (var j = 0; j < 24; j++) {
  currentThree = [];
  currentThreeIndex = [];
  if (trueTot > 17) {
    for (var k = 0; k < 20; k++){
      imageSilo[k].used = false;
    }
  }
while (currentThree.length < 3) {
  var temp = selectRandomFoto();
  if(imageSilo[temp].used == false) {
    currentThree.push(imageSilo[temp].image);
    currentThreeIndex.push(temp);
    for (var i = 0; i < 20; i++) {
      if(imageSilo[temp].image==imageSilo[i].image){
        imageSilo[i].used = true;
        imageSilo[i].imageViews +=1;
        trueTot +=1;
        break;
      }
    }
  }//end if
}//end while
}//end for_j
// console.log(currentThreeIndex);
}//end for_i
}//close acctRandomFoto

function renderFoto() {
  left.src = imageSilo[currentThreeIndex[0]].imageName;
  center.src = imageSilo[currentThreeIndex[1]].imageName;
  right.src = imageSilo[currentThreeIndex[2]].imageName;
}

function renderList() {
  for(var i = 0; i<imageSilo.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = imageSilo[i].image + '   '+imageSilo[i].imageTally+'   '+imageSilo[i].imageViews;
    tally.appendChild(liEl);
  }
}

acctRandomFoto();
renderFoto();
renderList();

//function handleEvent
function handleClickInput(event) {
  event.preventDefault();

  var totClick = 0;
  var allotClick = 5;
alert('eventhandler_input');
 if (totClick > allotClick) {
   event.target.removeEventListener();
 }

}//close handleClickInput


left.addEventListener('click',handleClickInput);
center.addEventListener('click',handleClickInput);
right.addEventListener('click',handleClickInput);
gutter.addEventListener('click',handleClickInput);
