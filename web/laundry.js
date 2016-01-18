'use strict'

var ctx = document.getElementById("myChart");

var linechart = new Chart(ctx, {
  type: 'line',
  data: {
    labels:["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    datasets: [{
      label: "Washers",
      data: [83.5, 85.7, 87.8, 88.0, 85.8, 84.0, 87.5],
      fill:false,
      pointBorderColor: "#00b0ff",
      backgroundColor: "#80d8ff",
      borderColor: "#80d8ff",
      pointBackgroundColor: "#80d8ff"
    },
    {
      label: "Dryers",
      data: [78.0, 81.0, 82.9, 83.3, 80.0, 78.5, 83.1],
      fill:false,
      pointBorderColor: "#d500f9",
      backgroundColor: "#ea80fc",
      borderColor: "#ea80fc",
      pointBackgroundColor: "#ea80fc"
    }]
  },

  options: {
    responsive: true,
    legend:{
      position:"bottom",
      labels: {padding: 30}
    },
    animation:{
      duration:1200
    },
    scales: { 
      yAxes: [{scaleLabel:"Percent Load"}]
    }
  }
});


//TODO: axes labels


document.getElementById("weekly").onclick=function() {
  linechart.data.labels = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  linechart.data.datasets = [{
    label: "Washers",
    data: [83.5, 85.7, 87.8, 88.0, 85.8, 84.0, 87.5],
    fill:false,
    pointBorderColor: "#00b0ff",
    backgroundColor: "#80d8ff",
    borderColor: "#80d8ff",
    pointBackgroundColor: "#80d8ff"
  },
  {
    label: "Dryers",
    data: [78.0, 81.0, 82.9, 83.3, 80.0, 78.5, 83.1],
    fill:false,
    pointBorderColor: "#d500f9",
    backgroundColor: "#ea80fc",
    borderColor: "#ea80fc",
    pointBackgroundColor: "#ea80fc"
  }];
  linechart.options.legend.display = true;

  linechart.update();
  console.log("weekly");
};


document.getElementById("daily").onclick=function() {
  linechart.data.labels = ["1a","2a","3a","4a","5a","6a","7a","8a","9a","10a","11a","12p","1p","2p","3p","4p","5p","6p","7p","8p","9p","10p","11p","12p"];
  linechart.data.datasets = [{
    label: "Sunday",
    data: [98.7, 98.3, 97.6, 96.7, 89.4, 83.4, 78.0, 75.1, 75.3, 67.6, 66.7, 65.0, 71.0, 76.7, 74.5, 68.7, 67.7, 72.4, 71.0, 76.9, 86.3, 90.9, 94.2, 97.5],
    fill:false
  },
  {
    label: "Monday",
    data: [98.5, 99.7, 99.5, 97.3, 94.1, 85.6, 78.2, 77.7, 75.4, 72.0, 74.0, 67.6, 73.3, 79.4, 79.2, 72.3, 68.8, 73.0, 78.6, 82.7, 88.3, 93.3, 93.9, 98.3],
    fill:false
  },
  {
    label: "Tuesday",
    data: [99.5, 99.4, 98.8, 97.7, 94.0, 85.6, 76.8, 74.1, 81.0, 80.0, 81.4, 79.6, 78.6, 81.1, 81.0, 76.6, 75.8, 75.1, 77.8, 83.1, 84.5, 94.6, 97.5, 98.8],
    fill:false
  },
  {
    label: "Wednesday",
    data: [99.4, 99.7, 98.0, 96.3, 96.0, 90.9, 81.0, 81.9, 80.5, 74.6, 68.9, 67.3, 72.1, 83.0, 84.8, 80.7, 79.2, 79.6, 79.4, 82.2, 90.1, 95.0, 96.7, 98.3],
    fill:false
  },
  {
    label: "Thursday",
    data: [98.1, 99.4, 97.4, 95.5, 93.6, 82.2, 72.8, 69.0, 73.1, 74.0, 72.2, 73.4, 71.7, 80.0, 77.0, 72.0, 74.6, 78.1, 81.1, 82.7, 88.6, 89.8, 95.1, 98.0],
    fill:false
  },
  {
    label: "Friday",
    data: [99.1, 100.0, 99.6, 94.8, 85.7, 77.6, 68.6, 65.8, 66.1, 63.6, 64.0, 69.2, 69.8, 70.9, 78.8, 80.4, 78.9, 82.1, 76.3, 82.6, 90.3, 91.0, 96.4, 98.3],
    fill:false
  },
  {
    label: "Saturday",
    data: [99.2, 99.3, 99.0, 96.0, 93.3, 90.1, 84.8, 80.6, 75.5, 70.6, 70.3, 73.1, 77.7, 78.2, 81.2, 82.3, 79.6, 80.7, 85.7, 83.2, 88.5, 92.6, 95.8, 97.8],
    fill:false
  }];
  linechart.options.legend.display = false;

  linechart.update();
  console.log("daily");
};

function daily(day) {
  console.log(day);
  linechart.data.datasets[day].pointBackgroundColor = "#80d8ff";
  linechart.update();
}


