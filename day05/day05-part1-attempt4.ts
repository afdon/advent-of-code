import fs from "fs";

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading input file:", err);
    return;
  }

  part1(data);
});

function part1(input: string) {
  const initialState = input.split("\n").slice(0, 10);

  const stackLine = initialState[initialState.length - 2];
  // const charPositions = 
  getCharPositions(stackLine);

  const representation: string[][] = createRepresentation(initialState);
  printRepresentation(representation)

  const instructions = input.split("\n").slice(10);
  console.log(`There are ${instructions.length} lines of instructions`)

  console.log(`First task: ${instructions[0]}`)
}


//// wip



//// helper functions

function printRepresentation(rep: string[][]) {
    rep.map((e: string[], i: number) => {
        console.log(`this is index ${i}, stack #${i + 1}:`, e)
    })
}


function createRepresentation(initial) {
  const linesToProcess = initial.slice(0, -2); // exclude stack line and empty line

  let boxesArray: any[][] = [];
  for (let i = 0; i < getNumberOfStacks(initial); i++) {
    boxesArray.push([]);
  } 

  for (let i = linesToProcess.length - 1; i >= 0; i--) { // iterate from the end
    let clean = cleanLine(linesToProcess[i]);
    for (let j = 0; j < clean.length; j++) {
      boxesArray[j].push(clean[j]);
    }
  }
  return boxesArray
}

function cleanLine(line: string) {
  let cleanedLine = line
    .split("")
    .map((char, i) => {
      if (charPositions.includes(i)) {
        return char;
      }
    })
    .filter((char) => char !== undefined);
  return cleanedLine;
}

let charPositions: number[];

function getCharPositions(line: string) {
  let charIndices: number[] = [];

  line.split("").map((char) => {
    if (isNaN(parseInt(char))) {
    } else {
      let index: number = line.indexOf(char);
      charIndices.push(index);
    }
  });
  charPositions = charIndices;
  return charPositions;
}

function isLetter(str) {
  if (str.match(/[a-z]/i)) return str;
}

function getNumberOfStacks(initial) {
  const stacksArray = initial[initial.length - 2].trim().split("   "); // trim; split by 3 spaces
  return stacksArray.length;
}
