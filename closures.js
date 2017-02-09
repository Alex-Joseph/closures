function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var index = -1;
  return function() {
  index ++;
  return list[index];
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6


// Exercise 2 - Countdown
var countdownGenerator = function (x) {

  return function() {
    if (x > 0) {
      console.log(`T-minus ${x}`);
      return x--;
    }
    if (x === 0) {
      console.log("Blast Off!");
      return x--;
    }
    if (x < 0) {
      console.log("Rockets already gone, bub!");
    }
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
