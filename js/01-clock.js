var ClockJS = (function(){

  'use strict';

  var colorRand = false;
  var colors = [
    'blue',
    'lightblue',
    'yellow',
    'orangeyellow',
    'orange',
    'orangered',
    'green',
    'limegreen',
    'red',
    'pink'
  ];
  return {
    randomizeColors: function() {
      var index = Math.floor(Math.random() * 10);
      return ClockJS.changeColor(colors[index]);
    },
    getRandColor: function() {
      return colorRand;
    },
    setRandColorStatus: function(bool) {
      colorRand = bool;
      return this;
    },
    toggleRandomColorStatus: function() {
      colorRand = !colorRand;
      if(colorRand) {
        document.getElementById('randomStatus').textContent = "On";
      }else{
        document.getElementById('randomStatus').textContent = "Off";
      }
    },
    getTime: function() {
      ClockNumber.clearNumbers();
      var time = new Date(),
        hour = time.getHours(),
        min = time.getMinutes(),
        sec = time.getSeconds();
      var hours = function() {
        if(hour > 12) {
          hour = hour - 12;
          if(hour < 10) {
            return "0" + hour;
          }
          return hour; 
        }
        return hour;
      };
      var mins = function() {
        if(min < 10) {
          return "0" + min;
        }
        return min; 
      };
      var secs = function() {
        if(sec < 10) {
          return "0" + sec;
        }
        return sec;
      };
      time = hours() + mins() + secs();
      time = time.split('');
      var sections = ['one','two','three','four','five','six'];
      for(var i = 0; i < time.length; i++) {
        ClockNumber.turnOnNumber(sections[i],time[i]);
      }
      if(colorRand) {
        ClockJS.randomizeColors();
      }
    },
    changeColor: function(color) {
      var clock = document.querySelector('#clock');
      var numberSpan = document.querySelectorAll('.number span');
      var numberOff = document.querySelectorAll('.number span');
      var colon = document.querySelectorAll('.colon span');
      clock.style.borderColor = color;
      for(var col=0; col < colon.length; col++) {
        colon[col].style.backgroundColor = color;
      }
      for(var nSpan=0; nSpan < numberSpan.length; nSpan++) {
        numberSpan[nSpan].style.backgroundColor = color;
        numberSpan[nSpan].pseudoStyle('before','border-bottom-color',color + ' !important');
        numberSpan[nSpan].pseudoStyle('after','border-top-color',color + ' !important');
      }
      return this;
    },
    startClock: function() {
      setInterval(ClockJS.getTime,1000);
      return this;
    }
  };

}());
