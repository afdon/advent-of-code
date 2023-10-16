import fs from "fs";

// Read the input file asynchronously

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading input file:", err);
    return;
  }

  part1(data);
});

function part1(input: string) {
  const lines = input.split("\n");

  const compartments = lines.map((line) => {

    // each rucksack has an EVEN number of items
    
   let firstCompartment = line.slice(0, line.length / 2)

    // line.split(" ").join("") // need to remove whitespace if doing it this way
    return line[0] + line[2];
  });

  console.log(compartments);

//  Find the item type that appears in both compartments of each rucksack. What is the sum of the priorities of those item types?

  let scores = compartments.map((move) => {
    switch (move) {
      case "AX": return 1 + 3  // you play rock, opponent plays rock
      case "BX": return 1 + 0  // you play rock, opponent plays paper
      case "CX": return 1 + 6  // you play rock, opponent plays scissors
      case "AY": return 2 + 6  // you play paper, opponent plays rock
      case "BY": return 2 + 3  // you play paper, opponent plays paper
      case "CY": return 2 + 0  // you play paper, opponent plays scissors
      case "AZ": return 3 + 0  // you play scissors, 
      case "BZ": return 3 + 6
      case "CZ": return 3 + 3
      default: console.log("error")
    }
  });

  console.log(scores)

  let scoreTotal = scores.reduce((a, b) => a + b, 0)

  console.log(scoreTotal)

}
