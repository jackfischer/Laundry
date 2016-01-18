import csv, copy
from datetime import datetime

#Building,Time,ExcelTime,UnixTime,Available,Total,Load
data = csv.reader(open("working.csv"))

#first take to calculate week view data
washers = [ [] for _ in range(7)] #mon = 0, sun = 6
dryers = [ [] for _ in range(7)]

#second take for hour data
single_day = [ [] for _ in range(24)]
days = [ copy.deepcopy(single_day) for _ in range(7)]

for row in data:
  dt = datetime.fromtimestamp(int(row[3]))
  day = dt.weekday()
  load = int(row[4])

  #week data
  if ("Washers" in row[0]):
    washers[day].append(load)
  else:
    dryers[day].append(load)

  #daily data
  hour = dt.hour
  days[day][hour].append(load)




#weekly data
for i, day in enumerate(washers):
  avg = (sum(day) / float(len(day))) * 100 / 14.0
  print "washer average day %d: %s" % (i, str(round(avg,1)))
for i, day in enumerate(dryers):
  avg = (sum(day) / float(len(day))) * 100 / 14.0
  print "dryer average day %d: %s" % (i, str(round(avg,1)))

#calculate averages for daily data
for day in range(len(days)):
  for hour in range(len(days[day])):
    avg = sum(days[day][hour]) / float(len(days[day][hour])) * 100 / 14.0
    days[day][hour] = round(avg,1)
#output daily data
for i, day in enumerate(days):
  print "day %d: " % (i) + str(day)
