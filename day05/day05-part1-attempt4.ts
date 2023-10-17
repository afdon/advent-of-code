import fs from "fs";

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading input file:", err);
    return;
  }

  part1(data);
});

let state

function part1(input: string) {
  const initialState = input.split("\n").slice(0, 10);

  const stackLine = initialState[initialState.length - 2];
  // const charPositions = 
  getCharPositions(stackLine);

  const representation: string[][] = createRepresentation(initialState);
  printRepresentation(representation)
  // set the state to the representation.
  if (representation) {
    state = representation
  console.log(`initial state:`, state)
  }

  const instructions = input.split("\n").slice(10);
  console.log(`There are ${instructions.length} tasks`)

  // console.log(`First task: ${instructions[0]}`)

  let task = parseTask(instructions[0]);
  performTask(task);
}

function performTask(task: {
  move: number;
  from: number;
  to: number;
}) {
  let boxesToMove: number = task.move
  let fromStackIndex: number = task.from - 1
  let toStackIndex: number = task.to - 1

  for (let i = boxesToMove; i < 0; i--) {
    // perform the task i number of times, where i = boxesToMove.
    let removed = state[fromStackIndex].pop()
    state[toStackIndex].push(removed)
    printRepresentation(state)
    console.log("done")
  }
}

function parseTask(str: string): {
  move: number; 
  from: number; 
  to: number;
} {
  let split = str.split(" ")
  console.log("split:", split)
  let task = {
    move: parseInt(split[1]),
    from: parseInt(split[3]),
    to: parseInt(split[5]),
  }
  console.log("task:", task)
  return task
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
