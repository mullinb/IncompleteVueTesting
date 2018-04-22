const currency = require('currency.js');
const bigInt = require('big-integer');

module.export = function (amountRequested) {
}

var notes = [100, 50, 20, 10];

var billSums = function(totalStr) {

    var numberOfNotes = [0, 0, 0, 0];
    var totalInt = bigInt(totalStr);

    recurseThroughNotes(0, totalInt);
    return numberOfNotes;

    function recurseThroughNotes(index, remainder) {
      var note = notes[index];
      while (remainder >= 0 && remainder >= note) {
          numberOfNotes[index] += bigInt(remainder).divide(note);
          remainder = bigInt(remainder).mod(note);
      }
      if (index === notes.length-1) {
          if (remainder !== 0 && remainder % note !== 0) {
              console.log("ERROR")
              // throw new Error("NoteUnavailableException");
          }
          else return;
      }
      console.log(remainder);
      recurseThroughNotes(index+1, remainder);
  }

}

module.exports = billSums;
