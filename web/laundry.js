'use strict'

var ctx = document.getElementById("myChart");

var linechart = new Chart(ctx, {
  type: 'line',
  data: {
    labels:["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    datasets: [{
      label: "Washers",
      data: [5,5,6,5,2,7,5],
      fill:false
    },
    {
      label: "Dryers",
      data: [4,4,5,4,1,6,4],
      fill:false
    }]
  },

  options: {
    responsive: true
  }
});


//TODO: axes labels


document.getElementById("weekly").onclick=function() {
  linechart.data.labels = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  linechart.data.datasets = [{
    label: "Washers",
    data: [5,5,6,5,2,7,5],
    fill:false
  },
  {
    label: "Dryers",
    data: [4,4,5,4,1,6,4],
    fill:false
  }];

  linechart.update();
  console.log("weekly");
};

document.getElementById("daily").onclick=function() {
  linechart.data.labels = [1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12];
  linechart.data.datasets = [{
    label: "Washers",
    data:[2,6,7,3,2,5,5,6,5,2,7,5,5,5,6,5,2,7,5,6,8,2,2,9],
    fill:false
  },
  {
    label: "Dryers",
    data: [2,6,2,3,2,2,5,6,5,4,7,5,4,5,6,5,2,7,5,6,8,2,2,9],
    fill:false
  }];

  linechart.update();
  console.log("daily");
};

