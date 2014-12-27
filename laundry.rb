require 'rubygems'
require 'nokogiri'
require 'open-uri'
require 'csv'

#buildingID = ARGV[0]



CSV.open("log.csv", "ab")
buildings = { "Mohawk" => "1008720" }

dryerAvail = 0
washerAvail = 0
buildings.each do |building, id|
    url = "http://binghamton-asi.esuds.net/RoomStatus/machineStatus.i?bottomLocationId=#{id}"
    page = Nokogiri::HTML(open(url))
    machines = page.css('font')

    machines[0..(machines.length/2 - 1)].each do |machine|
        if (machine.text == "Available" or machine.text == "Cycle Complete") then washerAvail+=1 end
        #puts machine.text
    end

    machines[(machines.length/2)..(machines.length)].each do |machine|
        if (machine.text == "Available" or machine.text == "Cycle Complete") then dryerAvail+=1 end
        #puts machine.text
    end

    puts "Washers avail: #{washerAvail} / #{machines[0..(machines.length/2 - 1)].length}"
    puts "Dryers avail: #{dryerAvail} / #{machines[(machines.length/2)..(machines.length)].length}"

    CSV.open("log.csv", "ab") do |csv|
       csv << [building, Time.new, washerAvail, dryerAvail, machines[0..(machines.length/2 - 1)].length]
    end
end




