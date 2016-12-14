var ClockNumber = (function () {

  var numberSeq = [
    { t: 1, tl: 1, tr: 1, m: 0, bl: 1, br: 1, b: 1 },
    { t: 0, tl: 0, tr: 1, m: 0, bl: 0, br: 1, b: 0 },
    { t: 1, tl: 0, tr: 1, m: 1, bl: 1, br: 0, b: 1 },
    { t: 1, tl: 0, tr: 1, m: 1, bl: 0, br: 1, b: 1 },
    { t: 0, tl: 1, tr: 1, m: 1, bl: 0, br: 1, b: 0 },
    { t: 1, tl: 1, tr: 0, m: 1, bl: 0, br: 1, b: 1 },
    { t: 1, tl: 1, tr: 0, m: 1, bl: 1, br: 1, b: 1 },
    { t: 1, tl: 0, tr: 1, m: 0, bl: 0, br: 1, b: 0 },
    { t: 1, tl: 1, tr: 1, m: 1, bl: 1, br: 1, b: 1 },
    { t: 1, tl: 1, tr: 1, m: 1, bl: 0, br: 1, b: 1 }
  ];

  return {
    turnOnNumber: function (elementID, number) {
      var element = document.getElementById(elementID),
        numberToTurnOn = numberSeq[number],
        numberNodes = document.querySelectorAll('#' + elementID + ' span');
      for (var i = 0; i < numberNodes.length; i++) {
        for(var n in numberToTurnOn) {
          if(numberNodes[i].classList.contains(n)) {
            if(numberToTurnOn[n]) {
              numberNodes[i].classList.add('on');
            }
          }
        }
      }
    },
    clearNumbers: function () {
      var number = document.querySelectorAll('.number span');
      for (var n = 0; n < number.length; n++) {
        if (number[n].classList.contains('on')) {
          number[n].classList.remove('on');
        }
      }
    }
  };

} ());