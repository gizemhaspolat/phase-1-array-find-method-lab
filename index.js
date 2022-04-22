const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
  //...
];

function superbowlWin(record) {
  let bowl = 0;
  if ((bowl = record.find((element) => element.result === "W"))) {
    return bowl.year;
  } else if ((bowl = record.find((element) => element.result === "N/A"))) {
    return undefined;
  }
}

console.log(superbowlWin(record));
