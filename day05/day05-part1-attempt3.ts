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

  const instructions = input.split("\n").slice(10);

  const stackLine = initialState[initialState.length - 2];
  console.log("stackLine:", stackLine);
  const charPositions = getCharPositions(stackLine);
  console.log(`charPositions:`, charPositions);

  const numOfStacks = getNumberOfStacks(initialState);

  let cleaned = cleanLine(initialState[0]);
  console.log("cleaned:", cleaned);

  const representation = createRepresentation(initialState);
  console.log("representation", representation)
}







//// wip

//// helper functions

function createRepresentation(initial) {
  const linesToProcess = initial.slice(0, -2); // exclude the stack line and the empty line

  // boxesArray is an array with length = numStacks = an array with 9 elements
  let boxesArray: any[][] = [];
  for (let i = 0; i < getNumberOfStacks(initial); i++) {
    boxesArray.push([]);
  } 
  // console.log("boxesArray", boxesArray)

  // go through each line, starting from the end.
  for (let i = linesToProcess.length - 1; i >= 0; i--) {
    // clean the line
    let clean = cleanLine(linesToProcess[i]);
    // iterate through its length
    // at each index = j, push the char into boxesArray[j]
    for (let j = 0; j < clean.length; j++) {
      boxesArray[j].push(clean[j]);
      // console.log("boxesArray[j]:", boxesArray[j])
      // console.log("boxesArray", boxesArray)
    }
  }
//   console.log(`Done! boxesArray has a length of ${boxesArray.length}:`, boxesArray);
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
  console.log("cleanedLine:", cleanedLine);
  return cleanedLine;
}

let charPositions: number[];
function getCharPositions(line: string) {
  let charIndices: number[] = [];

  line.split("").map((char) => {
    if (isNaN(parseInt(char))) {
      console.log(`This char: ${char} is not a number.`);
    } else {
      console.log("char:", char);
      let index: number = line.indexOf(char);
      console.log("position:", index);
      charIndices.push(index);
    }
  });
  console.log(charIndices);
  charPositions = charIndices;
  return charIndices;
}

function isLetter(str) {
  if (str.match(/[a-z]/i)) return str;
}

function getNumberOfStacks(initial) {
  const stacksArray = initial[initial.length - 2].trim().split("   "); // trim; split by 3 spaces
  console.log("stacks array", stacksArray);
  return stacksArray.length;
}
