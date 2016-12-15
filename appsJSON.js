'use strict';

var imageSilo =[];
var gutter = document.getElementById('container');
var tally = document.getElementById('tally');
var currentThreeIndex;
var totClick = 0;
var allotClick = 24;
var clickArray = [];
var viewArray = [];
var percentClickArray = [];
var myChart1 = document.getElementById("myChart1").getContext("2d");
var myChart2 = document.getElementById("myChart2").getContext("2d");

var names = ['bag','banana','bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog_duck','dragon','pen','scissors','shark','sweep','tauntaun','unicorn','usb','water_can','wine_glass','pet-sweep'];

// create object
function Image(name) {
this.imageName = 'img/' + name + '.jpg';
this.repeat = false;
this.imageTally = 0;
this.imageViews = 0;
this.image = name;
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

function selectRandFoto() {
  currentThreeIndex = [];
  var trueTot = 0;
  while (currentThreeIndex.length < 3 && trueTot < imageSilo.length) {
    var temp = selectRandNum();
    if(imageSilo[temp].repeat === false) {
      imageSilo[temp].repeat = true;
      trueTot +=1;
      currentThreeIndex.push(temp);
    } //end if_imageSilo
  }//end while

  for (var z = 0; z < imageSilo.length; z++) {
    imageSilo[z].repeat = false;
  }
}//close selectRandFoto

function renderFoto() {
  selectRandFoto();
  // console.log(currentThreeIndex, 'currentThreeIndex');
  left.src = imageSilo[currentThreeIndex[0]].imageName;
  imageSilo[currentThreeIndex[0]].imageViews += 1;
  center.src = imageSilo[currentThreeIndex[1]].imageName;
  imageSilo[currentThreeIndex[1]].imageViews += 1;
  right.src = imageSilo[currentThreeIndex[2]].imageName;
  imageSilo[currentThreeIndex[2]].imageViews += 1;
}

//function handleEvent
function handleClickInput(event) {
  event.preventDefault();

  var a = event.target.id;

  if( a === 'container'){
    alert('CLICK ON A PICTURE!!!! NOT THE BACKGROUND!!!');
  }

  if (a === 'left') {
    imageSilo[currentThreeIndex[0]].imageTally +=1;
  }

  if (a === 'center') {
    imageSilo[currentThreeIndex[1]].imageTally+=1;
  }

  if (a === 'right') {
    imageSilo[currentThreeIndex[2]].imageTally+=1;
  }

  if(!localStorage.getItem('bob')) {
   //  if(!localStorage.bob)
    localStorage.setItem('bob',JSON.stringify(imageSilo));
  } else {
    var retrievedData = localStorage.getItem('bob');
    var imageSilo2 = JSON.parse(retrievedData);
    localStorage.setItem('bob',JSON.stringify(imageSilo2));
  }

  totClick += 1;

  if (totClick > allotClick) {
    alert ('Session ends.');
    tally.innerHTML='';
    chartArray();
    renderChart1();
    renderChart2();
    return;
  }

  renderFoto();
  tally.innerHTML='';
  renderList();

}//close handleClickInput


function renderList() {
  for(var i = 0; i<imageSilo.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = imageSilo[i].image + '   '+imageSilo[i].imageTally+'   '+imageSilo[i].imageViews;
    tally.appendChild(liEl);
  }
}

function chartArray() {
  for(i = 0; i < imageSilo.length; i++) {
    clickArray.push(imageSilo[i].imageTally);
  }

  for(i = 0; i < imageSilo.length; i++) {
    viewArray.push(imageSilo[i].imageViews);
  }

  for(i = 0; i < imageSilo.length; i++) {
    var temp = Math.round(imageSilo[i].imageTally * 100 / imageSilo[i].imageViews)/100;
    percentClickArray.push(temp);
  }
}

function renderChart1() {
  var myChart = new Chart(myChart1, {
    type: 'bar',
    data: {
      labels:names,

    datasets: [{
      label: 'Total Views',
      data: viewArray,
      backgroundColor: "rgba(153,255,51,0.4)"
    }, {
      label: 'Total Clicks',
      data: clickArray,
      backgroundColor: "rgba(255,153,0,0.4)"
    }]
  }
});
}

function renderChart2() {
  var myChart = new Chart(myChart2, {
    type: 'bar',
    data: {
      labels:names,

    datasets: [{
      label: 'Percentage Click When Viewed',
      data: percentClickArray,
      backgroundColor: "rgba(138,43,226,0.4)"
    }]
  }
});
}

renderFoto();
renderList();
gutter.addEventListener('click', handleClickInput);
