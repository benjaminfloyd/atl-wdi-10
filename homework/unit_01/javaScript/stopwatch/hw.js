// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

/// Data & Core Business Logic ///
const Stopwatch = {
  tickClock: function(){
    if (Stopwatch.isRunning) {
      setTimeout(Stopwatch.tickClock, 10); // trigger next clock tick
      Stopwatch.advanceTenMillisecs();
      AppController.handleClockTick();
    }
  },
  isRunning: false,
  mins: 0,
  secs: 0,
  millisecs: 0,
  laps: [],
  // DO NOT EDIT ABOVE THIS LINE
  advanceTenMillisecs: function(){
    // Your Code Here
  },
  reset: function(){
    // Your Code Here
  },
  start: function(){
    // Your Code Here

  },
  stop: function(){
    // Your Code Here
  },
  lap: function(){
    // Your Code Here
  }
};

/// User Interface ///
const ViewEngine = {
  updateTimeDisplay: function(mins, secs, millisecs){
    // Your Code Here
  },
  updateLapListDisplay: function(laps){
    // Your Code Here
  },
};
const ViewHelpers = {
  zeroFill: function(number, length){
    // Your Code Here
  },
};

/// Top-Level Application Code ///
const AppController = {
  handleClockTick: function(){
    // Your Code Here
  ViewEngine.updateTimeDisplay(Stopwatch.mins, Stopwatch.secs, Stopwatch.millisecs);

  },
  handleClickStart: function() {
    if (!Stopwatch.isRunning) { Stopwatch.start();
  },

  handleClickStopReset: function(){
    // Your Codes Here
    if (Stopwatch.isRunning) {
      Stopwatch.lap();
      ViewEngine.updateLapListDisplay(Stopwatch.laps);
    }
  },
  handleClickLap: function(){
    // Your Code Here
    Stopwatch.lap();
  }
};

window.onload = function(){
  // Attach AppController methods to the DOM as event handlers here.
$('#start').click((AppController.handleClickStart));
$('lap').click(AppController.handleClickLap);
$('stop').click(AppController.handleClickStopReset)
}


