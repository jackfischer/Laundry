//'use strict'

var ctx = document.getElementById("myChart");

var linechart = new Chart(ctx, {
  type: 'line',
  data: daily_data,
  options: {
    responsive: false
  }
});




document.getElementById("weekly").onclick=function() {
  console.log("weekly");
  linechart.data.labels = weekly_data.labels;
  linechart.data.datasets = weekly_data.datasets;
  linechart.update();
};

document.getElementById("daily").onclick=function() {
  console.log("daily");
  linechart.data.labels = daily_data.labels;
  linechart.data.datasets = daily_data.datasets;
  linechart.update();
};
