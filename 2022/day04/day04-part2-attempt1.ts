import fs from "fs";

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading input file:", err);
    return;
  }

  part1(data);
});

let counter = 0;

function checkOverlap(range1: string, range2: string): boolean {

    const range1start = parseInt(range1.split("-")[0])
    const range1end = parseInt(range1.split("-")[1])
    const range2start = parseInt(range2.split("-")[0])
    // const range2end = parseInt(range2.split("-")[1])

    return range1start <= range2start && range1end >= range2start

}

function part1(input: string) {
  const lines = input.split("\n");

  lines.map(line => {
    const pair = line.split(",");

    if (pair.length === 2) {
      if (checkOverlap(pair[0], pair[1]) || checkOverlap(pair[1], pair[0])) {
        console.log("pair", pair)
        console.log("overlap detected")
        counter++;
      } else {
        console.log("no overlap")
      }
    }
  });

  console.log("counter: ", counter);
}
