require 'rubygems'
require 'nokogiri'
require 'open-uri'

buildingID = ARGV[0]
url = "http://binghamton-asi.esuds.net/RoomStatus/machineStatus.i?bottomLocationId=#{buildingID}"
page = Nokogiri::HTML(open(url))
machines = page.css('font')

puts "Washers:"
machines[0..(machines.length/2 - 1)].each do |machine|
    puts machine.text
end

puts "Dryers:"
machines[(machines.length/2)..(machines.length)].each do |machine|
    puts machine.text
end


