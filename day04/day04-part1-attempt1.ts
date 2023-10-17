// In how many assignment pairs does one range fully contain the other?

import fs from "fs";

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading input file:", err);
    return;
  }

  part1(data);
});

let counter = 0

function part1(input: string) {
  const lines = input.split("\n");

  lines.forEach(line => {
    let pair = line.split(",")

    console.log("pair", pair)

    // for each pair, 

    if (pair[0].split("-")[0] <= pair[1].split("-")[0] && pair[0].split("-")[1] >= pair[1].split("-")[1]) { 
        counter++ 
    } else if (pair[1].split("-")[0] <= pair[0].split("-")[0] && pair[1].split("-")[1] >= pair[0].split("-")[1]) { 
        counter++ 
    } 

    console.log("counter: ", counter)

})


}

function checkContained (a, b) {
    // if a's first number is smaller than or equal to than b's first number, and if a's second number is greater than or equal to b's second number, then a fully contains b; return true
    // or if b's first number is smaller than or equal to a's first number, and if b's second number is greater than or equal to a's second number, then b fully contains a; return true
    // else return false
}

