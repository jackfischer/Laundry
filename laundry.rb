
require 'rubygems'
require 'nokogiri'
require 'open-uri'
require 'csv'

#buildingID = ARGV[0]


CSV.open("log.csv", "ab")
buildings = { "BroomeDryers" => "1040623",
              "BroomeWashers" => "1040603",
              "EndicottDryers" => "1040646",
              "EndicottWashers" => "1040624" }

buildings.each do |building, id|
   machinesAvail = 0
   url = "http://binghamton-asi.esuds.net/RoomStatus/machineStatus.i?bottomLocationId=#{id}"
   page = Nokogiri::HTML(open(url))
   machines = page.css('font')

   machines.each do |machine|
      if (machine.text == "Available" or machine.text == "Cycle Complete") then machinesAvail+=1 end
      #puts machine.text
   end

   puts "#{building}: #{machinesAvail}/#{machines.length} are available"

   CSV.open("log.csv", "ab") do |csv|
      csv << [building, Time.new, machinesAvail, machines.length]
   end
end


