//'use strict'

var laundry = {
  "weekly": {
    "labels":["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "washers":[.5,.5,.6,.5,.2,.7,.5],
    "dryers":[.4,.4,.5,.4,.1,.6,.4]
  },
  "daily": {
    "labels":[1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12],
    "washers":[.2,.6,.7,.3,.2,.5,.5,.6,.5,.2,.7,.5,.5,.5,.6,.5,.2,.7,.5,.6,.8,.2,.2,.9],
    "dryers": [.2,.6,.2,.3,.2,.2,.5,.6,.5,.4,.7,.5,.4,.5,.6,.5,.2,.7,.5,.6,.8,.2,.2,.9]
  }
}


var weekly_data = {
  labels: laundry.weekly.labels,
  datasets: [{
    label: "Washers",
    data: laundry.weekly.washers
  },
  {
    label: "Dryers",
    data: laundry.weekly.dryers
  }]
}

var daily_data = {
  labels: laundry.daily.labels,
  datasets: [{
    label: "Washers",
    data: laundry.daily.washers
  },
  {
    label: "Dryers",
    data: laundry.daily.dryers
  }]
}
