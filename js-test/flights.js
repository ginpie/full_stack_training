/*
1 flight stops
*/

flights = [{}];

function getStop(flights) {
  return (
    {
      1: "Direct",
      2: "1 stop",
      34: "World Trip",
    }[flights.length] || `${flights.length - 1} stops`
  );
}

console.log(getStop(flights));
