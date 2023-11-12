import fs from "fs";

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading input file:", err);
    return;
  }

  part1(data);
});

let state;

function part1(input: string) {
  const initialState = input.split("\n").slice(0, 10);

  const stackLine = initialState[initialState.length - 2];
  // const charPositions =
  getCharPositions(stackLine);

  const representation: string[][] = createRepresentation(initialState);
  printRepresentation(representation);
  // set the state to the representation.
  if (representation) {
    state = representation.map(line => trimEmpty(line));
    console.log(`initial state:`, state);
  }

  const instructions = input.split("\n").slice(10);
  console.log(`There are ${instructions.length} tasks`);

  // loop through the instructions; parse and perform each task
  for (let i = 0; i < instructions.length; i++) {
    let task = parseTask(instructions[i]);
    performTask(task);
  }

  let answer = getTopBoxes(state)
  console.log("answer:", answer)
}

function getTopBoxes(state) {
    let result = state.map((arr, i) => {
        console.log(`At index ${i}, the array length is ${arr.length} and the top box is ${arr[arr.length - 1]} The array is ${arr}`)
        return arr[arr.length - 1]
    })
    result = result.reduce((a: string, b: string) => a + b)
    // console.log("boxes at the top:", result)
    return result
}

function performTask(task: { move: number; from: number; to: number }) {
  let boxesToMove: number = task.move;
  let fromStackIndex: number = task.from - 1;
  let toStackIndex: number = task.to - 1;

  // print instructions to console
  console.log(`move ${boxesToMove} from ${fromStackIndex} to ${toStackIndex}`);

//   for (let i = boxesToMove; i > 0; i--) {
//     // perform the task i number of times, where i = boxesToMove.
//     let removed = state[fromStackIndex].pop();
//     state[toStackIndex].push(removed);
//     printRepresentation(state);
//     console.log(
//       `done printing. index 3 has ${state[3].length} boxes; index 4 has ${state[4].length} boxes.`
//     );
//   }

// slice the last {boxesToMove} number of elements from the {fromStackIndex} stack. Then move it to the {toStackIndex} array.
let removed = state[fromStackIndex].splice(state[fromStackIndex].length - boxesToMove)
// add removed to state[toStackIndex]
state[toStackIndex] = [...state[toStackIndex], ...removed]

console.log("removed:", removed)

}

function parseTask(str: string): {
  move: number;
  from: number;
  to: number;
} {
  let split = str.split(" ");
  console.log("split:", split);
  let task = {
    move: parseInt(split[1]),
    from: parseInt(split[3]),
    to: parseInt(split[5]),
  };
  console.log("task:", task);
  return task;
}

//// wip

//// helper functions

function trimEmpty(arr: any) {
    let trimmed = arr.filter((e) => e !== " ");
    return trimmed
}

function printRepresentation(rep: string[][]) {
  rep.map((e: string[], i: number) => {
    // e = e.filter((e, i) => {
    //     if (e[i] !== " ") {return e[i]}
    // })

    e = e.filter((e) => e !== " ");

    console.log(`this is index ${i}, stack #${i + 1}:`, e);
  });
}

function createRepresentation(initial) {
  const linesToProcess = initial.slice(0, -2); // exclude stack line and empty line

  let boxesArray: any[][] = [];
  for (let i = 0; i < getNumberOfStacks(initial); i++) {
    boxesArray.push([]);
  }

  for (let i = linesToProcess.length - 1; i >= 0; i--) {
    // iterate from the end
    let clean = cleanLine(linesToProcess[i]);
    for (let j = 0; j < clean.length; j++) {
      boxesArray[j].push(clean[j]);
    }
  }
  return boxesArray;
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
