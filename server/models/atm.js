const currency = require('currency.js');
const bigInt = require('big-integer');

var notes = [100, 50, 20, 10];

var billSums = function(totalStr) {

    var numberOfNotes = [0, 0, 0, 0];
    var listOfNotes = [[], [], [], []]

    if (totalStr === null) {
      return []
    }

    let totalInt = bigInt(totalStr);

    console.log('totalInt', totalInt);

    if (totalInt.isNegative()) {
      throw new Error("InvalidArgumentException")
    }

    recurseThroughNotes(0, totalInt);

    for (var i = 0; i<numberOfNotes.length; i++) {
      listOfNotes[i].fill(new Array(numberOfNotes[i]), notes[i]);
    }
    return listOfNotes.reduce((acc, val) => acc.concat(val), []);




    function recurseThroughNotes(index, remainder) {
      var note = notes[index];
      while (remainder >= 0 && remainder >= note) {
          numberOfNotes[index] += bigInt(remainder).divide(note);
          remainder = bigInt(remainder).mod(note);
      }
      if (index === notes.length-1) {
          if (remainder !== 0 && remainder % note !== 0) {
            throw new Error("NoteUnavailableException")
          }
          else return;
      }
      recurseThroughNotes(index+1, remainder);
  }
}

module.exports = billSums;
