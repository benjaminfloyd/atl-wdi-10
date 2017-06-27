# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Fridge.delete_all

ga_fridge = Fridge.create(location: 'General Assembly', brand: 'LG', size: '32')

home_fridge = Fridge.create(location: 'Home', brand: 'Samsung', size:'33')