'use strict';

var imageSilo =[];
var dir = '/Users/owy1/codefellows/201/Bus-Mall/images/';
var left = document.getElementById('foto1');
var right = document.getElementById('foto2');
var center = document.getElementById('foto3');
var imageList = document.getElementById('Tally Table');

// function createObject
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

console.log(imageSilo);


function renderList() {
  left.src = imageSilo[0].imageName;
  right.src = imageSilo[1].imageName;
  center.src = imageSilo[2].imageName;
  document.getElementById('Tally Table').innerHTML= imageSilo[1].image+imageSilo[1].imageTally+imageSilo[1].imageViews;
}

renderList();

// function handleEvent
// function handleClickInput(event) {
//   event.preventDefault();
//   var totClick = 0;
//
// function selectRandomFoto() {
//   var randomIndex = Math.floor(Math.random()*imageSilo.length);
//   console.log(imageSilo[randomIndex]);
// }
//
//
//     for (var i=0; i<3; i++) {
//       productFoto = selectRandomFoto();
//       previousThree.push(productFoto);
//       document.getElementById('foto').innerHTML= ;
//     }
  //
  //
  // }

  //if total click > 25, remove eventListener
  //else show 3 images, prevent duplicates in set, prevent duplicates between sets, tally clicks

// }


// addEventListener
