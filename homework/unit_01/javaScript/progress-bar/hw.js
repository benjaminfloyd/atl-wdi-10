// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = {
  drawNumericDisplay: function(timerValue){
  document.getElementById('numeric-display')
  var numericDisplay = document.getElementById('numeric-display');
  numericDisplay.innerHTML = timerValue;


  },
  drawProgressBars: function(timerValue){

$('.progress-bar').css("width:" "+" (100 - timerValue) + '%' );
},
  drawLitFuses: function(timerValue){
    var percentUnburnt = timerValue/100;
    document.getElementsByClassName('unburnt')[0].style.width = percentUnburnt*98 + '%';
    document.getElementsByClassName('burnt')[0].style.width = (1 - percentUnburnt)*98 + '%';
  },
  drawCrawlers: function(timerValue){
    // Your Code Here
  }
};
