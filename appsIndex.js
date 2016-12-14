'use strict';

var imageSilo =[];
var dir = '/Users/owy1/codefellows/201/Bus-Mall/images/';
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');
var gutter = document.getElementById('container');
var tally = document.getElementById('tally');
var currentThreeIndex = [];
var totClick = 0;
var allotClick = 5;

var names = ['bag','banana','bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass'];

// create object
function Image(name) {
this.imageName = dir + name + '.jpg';
this.repeat = false;
this.imageTally = 0;
this.imageViews = 0;
this.image = name
imageSilo.push(this);
}

// new instances
for(var i=0; i<names.length; i++) {
new Image(names[i]);
}
// console.log(imageSilo);
// generate random index
function selectRandNum() {
return Math.floor(Math.random()*imageSilo.length);
}

function SelectRandFoto() {

    var trueTot = 0;
    // var currentThreeIndex = [];
while (currentThreeIndex.length < 3 && trueTot < 20) {
 var temp = selectRandNum();
  if(imageSilo[temp].repeat === false) {
     imageSilo[temp].repeat = true;
        trueTot +=1;
    currentThreeIndex.push(temp);
      } //end if_imageSilo
    }//end while

  // console.log(currentThreeIndex);
   for (var z = 0; z < imageSilo.length; z++) {
      imageSilo[z].repeat = false;
      }


}//close acctRandFoto

function renderFoto() {
  SelectRandFoto();
  left.src = imageSilo[currentThreeIndex[0]].imageName;
  imageSilo[currentThreeIndex[0]].imageViews += 1;
  center.src = imageSilo[currentThreeIndex[1]].imageName;
  imageSilo[currentThreeIndex[1]].imageViews += 1;
  right.src = imageSilo[currentThreeIndex[2]].imageName;
  imageSilo[currentThreeIndex[2]].imageViews += 1;
}

function renderList() {
  for(var i = 0; i<imageSilo.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = imageSilo[i].image + '   '+imageSilo[i].imageTally+'   '+imageSilo[i].imageViews;
    tally.appendChild(liEl);
  }
}


//function handleEvent
function handleClickInput(event) {
  event.preventDefault();

  var a = event.target.id;
 console.log(a);

  if( a === 'container'){
    alert('CLICK ON A PICTURE!!!! NOT THE BACKGROUND!!!');

  }

  if (a === 'left') {
    imageSilo[currentThreeIndex[0]].imageTally +=1;
    renderFoto();
  }

  if (a === 'center') {
    imageSilo[currentThreeIndex[1]].imageTally+=1;
    renderFoto();
  }

  if (a === 'right') {
    imageSilo[currentThreeIndex[2]].imageTally+=1;
    renderFoto();
  }
   totClick += 1;

 if (totClick > allotClick) {
   return alert ('Session ends.');
 }
 tally.innerHTML="";
 renderList();
}//close handleClickInput
renderFoto();
renderList();

gutter.addEventListener('click', handleClickInput);
