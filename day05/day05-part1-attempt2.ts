

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

    const stackLine = initialState[initialState.length - 2]
    console.log("stackLine:", stackLine)
    const charPositions = getCharPositions(stackLine)
    console.log(`charPositions:`, charPositions)

    // console.log("initialState's type is:", typeof initialState)
    const numOfStacks = getNumberOfStacks(initialState)
    // console.log ("number of stacks:", numOfStacks)

    const representation = createRepresentation(initialState)
    console.log("representation", representation)

    // let task = {
    //     "number of stacks": numOfStacks,
    //     "initialState": initialState,
    //     "instructions": instructions
    // }

    // console.log("task:", task)
}

function createRepresentation(initial) {
    // const numOfStacks = getNumberOfStacks(initial)

    const linesToProcess = initial.slice(0, -2) // exclude the stack line and the empty line

    // go through each line, starting from the end.

    let boxesArray = new Array(getNumberOfStacks(initial))

//     for (let i = linesToProcess.length - 1; i <= 0; i--) {

// }
}

//// wip

function getCharPositions(line: string) {

    let charIndices: number[] = []
    line.split("").map(char => {
        if (isNaN(parseInt(char))) {
            console.log(`This char: ${char} is not a number.`, char)
        } else {
            console.log("char:", char)
            let index: number = line.indexOf(char)
            console.log("position:", index)
            charIndices.push(index)
        }
    })
    console.log(charIndices)
    return charIndices
}

//// helper functions

function isLetter(str) {
    if (str.match(/[a-z]/i)) return str
}

function getNumberOfStacks(initial) {
    const stacksArray = initial[initial.length - 2].trim().split("   ") // trim; split by 3 spaces
    console.log("stacks array", stacksArray)
    return stacksArray.length
}