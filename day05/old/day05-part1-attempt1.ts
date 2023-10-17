

import fs from "fs";

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading input file:", err);
    return;
  }

  part1(data);
});

function part1(input: string) {
//   const lines = input.split("\n");

    const initialState = input.split("\n").slice(0, 10);
    // console.log("initial state: ", initialState)

    const instructions = input.split("\n").slice(10)
    // console.log("instructions: ", instructions)

    // console.log("initialState's type is:", typeof initialState)
    const numOfStacks = getNumberOfStacks(initialState)
    // console.log ("number of stacks:", numOfStacks)

    let task = {
        "number of stacks": numOfStacks,
        "initialState": initialState,
        "instructions": instructions
    }

    console.log("task:", task)
}

function getNumberOfStacks(initial) {
    const stacksArray = initial[initial.length - 2].trim().split("   ") // trim; split by 3 spaces
    console.log("stacks array", stacksArray)
    return stacksArray.length
}

function createRepresentation(initial) {
    // const numOfStacks = getNumberOfStacks(initial)

    const linesToProcess = initial.slice(0, -2) // exclude the stack line and the empty line

    // go through each line, starting from the end.

    let boxesArray = new Array(getNumberOfStacks(initial))

    for (let i = linesToProcess.length - 1; i <= 0; i--) {
        // clean the line
        let chars = linesToProcess[i].split("").map(char => {
            if (isLetter(char)) return char
        })

        // push the cleaned line into boxesArray
        for (let j = 0; j < boxesArray.length; j++) {
            boxesArray[j].push(chars[])
        }
    }
}

function isLetter(str) {
    if (str.match(/[a-z]/i)) return str
}

// function cleanLine(line) {
//     let chars = line.split("")
//     let clean = chars.map(char => {
//         if (isLetter(char)) return char
//     })
//     // i need an array with every letter only.
// }