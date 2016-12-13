'use strict';

var imageSilo =[];
var dir = '/Users/owy1/codefellows/201/Bus-Mall/images/';
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');
var gutter = document.getElementById('container');
// var imageList = document.getElementById('tally');
var currentThree = [];
var currentThreeIndex = [];
var names = ['bag','banana','bathroom','boots','breakfast','bubblegum','chair','cthulthu','dog-duct','dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass'];

// create object
function Image(name) {
this.imageName = dir+name+'.jpg';
this.repeat = false;
this.imageTally = 0;
this.imageViews = 0;
this.image = name
imageSilo.push(this);
}

// new instances
for(var i=0; i<names.length; i++) {
new Image(names[i]);
// console.log(imageSilo);
// generate random index
function selectRandNum() {
return Math.floor(Math.random()*imageSilo.length);
}

function SelectRandFoto() {

for (var i = 0; i<3; i++) {
  var temp = selectRandomNum();
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
