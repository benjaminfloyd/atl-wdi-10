//*************************
// Problem 1:
// Barrels O' RUM

var barrels = function(small, large, total){
  var smallBarrel = 60;
  var largeBarrel = (total - (small * smallBarrel)) / large;

return largeBarrel;
};

//*************************
// Problem 2:
// Sailing the Seas

var shipFuelCost = function(fuelPrice, milesPerGallon){
  ar shipFuelCost = function(fuel, miles){
  var circumference = 24901;
  var mpg = miles;

  var totalGallons = circumference / mpg;
  var totalCost = totalGallons * fuel;

  return totalCost;
};

//*************************
// Problem 3:
// GROG

 var calcFruitJuice = function(a,b,c,d){
  var costco = (b / 100) * a;
  var kirkland = (d / 100) * c;
  var totalJuice = a + c;
  var totalPFJ = costco + kirkland;

  var finalAnswer = totalPFJ / totalJuice;
  return finalAnswer;
};

//DO NOT EDIT BELOW THIS LINE//
module.exports = {
  barrels: barrels,
  shipFuelCost: shipFuelCost,
  calcFruitJuice: calcFruitJuice
};
