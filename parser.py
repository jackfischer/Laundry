import time, json, csv, sys

j = []
csvfile = open("working.csv")
try:
  reader = csv.reader(csvfile)
  for row in reader:
    t = time.gmtime(int(row[3]))
    a = [t.tm_year, row[6]]
    a.year = t.tm_year
    a.load = row[6]
    j.append(a)
    
  print json.dumps(j)

finally:
  csvfile.close()
