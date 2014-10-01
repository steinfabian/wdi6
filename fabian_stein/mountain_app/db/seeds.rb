Mountain.destroy_all

Mountain.create(:name => 'Mont Blanc', :height => 4810, :country => 'France', :first_ascent => 1786)
Mountain.create(:name => 'Mount Everest', :height => 8848, :country => 'Nepal', :first_ascent => 1953)
Mountain.create(:name => 'Kilimandjaro', :height => 5895, :country => 'Tanzania', :first_ascent => 1889)
Mountain.create(:name => 'Zugspitze', :height => 2962, :country => 'Germany', :first_ascent => 1820)



# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
