'use strict';

var imageSilo =[];
var dir = '/Users/owy1/codefellows/201/Bus-Mall/images/';
var gutter = document.getElementById('container');
var tally = document.getElementById('tally');
var currentThreeIndex = [];
var totClick = 0;
var allotClick = 25;
var ctx = document.getElementById("myChart").getContext("2d");

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

function selectRandFoto() {
  currentThreeIndex = [];
    var trueTot = 0;
    while (currentThreeIndex.length < 3 && trueTot < 20) {
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
}//close acctRandFoto

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

// function renderList() {
//   for(var i = 0; i<imageSilo.length; i++) {
//     var liEl = document.createElement('li');
//     liEl.textContent = imageSilo[i].image + '   '+imageSilo[i].imageTally+'   '+imageSilo[i].imageViews;
//     tally.appendChild(liEl);
//   }
// }

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
  }

  if (a === 'center') {
    imageSilo[currentThreeIndex[1]].imageTally+=1;
  }

  if (a === 'right') {
    imageSilo[currentThreeIndex[2]].imageTally+=1;
  }
totClick += 1;

 if (totClick > allotClick) {
   alert ('Session ends.');
   tally.innerHTML='';
   return renderChart();
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
function renderChart() {
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels:names,
    //  ['bag','banana','bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass'],
    datasets: [{
      label: 'Total Views',
      data: [
                imageSilo[0].imageTally,
                imageSilo[1].imageTally,
                imageSilo[2].imageTally,
                imageSilo[3].imageTally,
                imageSilo[4].imageTally,
                imageSilo[5].imageTally,
                imageSilo[6].imageTally,
                imageSilo[7].imageTally,
                imageSilo[8].imageTally,
                imageSilo[9].imageTally,
                imageSilo[10].imageTally,
                imageSilo[11].imageTally,
                imageSilo[12].imageTally,
                imageSilo[13].imageTally,
                imageSilo[14].imageTally,
                imageSilo[15].imageTally,
                imageSilo[16].imageTally,
                imageSilo[17].imageTally,
                imageSilo[18].imageTally,
                imageSilo[19].imageTally,
            ],
      backgroundColor: "rgba(153,255,51,0.4)"
    }, {
      label: 'Total Clicks',
      // data: [2, 29, 5, 5, 2, 3, 10,2, 29, 5, 5, 2, 3, 10,2, 29, 5, 5, 2, 3],
      data: [
                imageSilo[0].imageViews,
                imageSilo[1].imageViews,
                imageSilo[2].imageViews,
                imageSilo[3].imageViews,
                imageSilo[4].imageViews,
                imageSilo[5].imageViews,
                imageSilo[6].imageViews,
                imageSilo[7].imageViews,
                imageSilo[8].imageViews,
                imageSilo[9].imageViews,
                imageSilo[10].imageViews,
                imageSilo[11].imageViews,
                imageSilo[12].imageViews,
                imageSilo[13].imageViews,
                imageSilo[14].imageViews,
                imageSilo[15].imageViews,
                imageSilo[16].imageViews,
                imageSilo[17].imageViews,
                imageSilo[18].imageViews,
                imageSilo[19].imageViews,
            ],
      backgroundColor: "rgba(255,153,0,0.4)"
    }]
  }
});
}

renderFoto();
renderList();
gutter.addEventListener('click', handleClickInput);
