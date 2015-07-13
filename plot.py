import matplotlib.pyplot as plt
from datetime import datetime
import numpy as np
import csv


reader = csv.reader(open("working.csv"))

secInDay = 24 * 60 * 60
secInHour = 60 * 60
secInMin = 60

x = []
y = []

for row in reader:
  time = datetime.fromtimestamp(int(row[3]))
  #t = time.day * secInDay + time.hour * secInHour + time.minute * secInMin + time.second
  t = time.hour * secInHour + time.minute * secInMin + time.second

  x.append(t)
  load = float(row[6].strip('%')) / 100.0
  y.append(load)


print min(x)
print max(x)

plt.scatter(x,y)
plt.show()
