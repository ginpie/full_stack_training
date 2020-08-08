"use strict";

for (var i = 1; i <= 9; i++) {
  var str = "";
  for (var j = i; j <= 9; j++) {
    var ans = i * j;
    str += `${i}${j}${"="}${ans}\t`;
  }
  console.log(str);
}
