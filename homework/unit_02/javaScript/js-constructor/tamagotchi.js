console.log('tamagotchi file is loaded');

//your constructor function here
var Tamagotchi = function(name, creatureType) {
  this.name = name;
  this.creatureType = creatureType;
  this.foodInTummy = 10;
  this.restedness = 10;
  this.health = 10;
  this.cry = function() {
    this.foodInTummy--;
    console.log("WAAAH!!");
    console.log(this.name + ' has current food in tummy = ' + this.foodInTummy);
  };
//create new Tamagotchis
  this.puke = function() {
    this.health--;
    console.log('Burp!');
    console.log(this.name + ' has current health = ' + this.health);
  };
  this.yawn = function(){
    this.restedness--;
    console.log('Yawn! So tired');
    console.log(this.name + ' has current restedness = ' + this.restedness);
  };
  this.start = function(){
    console.log("Starting " + this.name);
    var self = this;
    this.hungerTimer = setInterval(function() {
      self.cry();
    }, 6000);
    this.yawnTimer = setInterval(function() {
      self.yawn();
    }, 10000);
    this.sickTimer = setInterval(function() {
      self.puke();
    }, 25000);
  };
  this.stop = function(){
    console.log("Stopping " + this.name);
    clearInterval(this.hungerTimer);
    clearInterval(this.yawnTimer);
    clearInterval(this.sickTimer);
  };
};
  };

//test out your Tamagotchies below via console.logs
