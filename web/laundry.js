'use strict'


var data = {};
var option = {};

var ctx = document.getElementById("myChart");
var linechart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['mon', 'tues', 'weds'],
    datasets: [{
      label: "washer",
      data: [.3, .7, .5]
    },
    {
      label: "dryers",
      data: [.4, .5, .2]
    }]
  },
  options: {
    global: {
      responsiveAnimationDuration: 2.0
    }
  }
});






//var ctx = document.getElementById("myChart");
//var myChart = new Chart(ctx, {
//  type: 'bar',
//  data: {
//    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//    datasets: [{
//      label: '# of Votes',
//      data: [12, 19, 3, 5, 2, 3]
//    }]
//  },
//  options:{
//    scales:{
//      yAxes:[{
//        ticks:{
//          beginAtZero:true
//        }
//      }]
//    }
//  }
//});
//
