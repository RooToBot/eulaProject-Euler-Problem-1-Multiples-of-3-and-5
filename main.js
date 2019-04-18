function multiplesOf3and5(number) {
  var three = 3;
  var five = 5;
  var same = 15;
  var output = 0;

  for (three = 3; three < number; three = three + 3) {
    output = output + three;
  }

  for (five = 5; five < number; five = five + 5) {
    output = output + five;
  }

  for (same = 15; same < number; same = same + 15) {
    output = output - same;
  }

  return output;
}

multiplesOf3and5(49);
