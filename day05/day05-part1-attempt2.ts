

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

    const instructions = input.split("\n").slice(10)

    const stackLine = initialState[initialState.length - 2]
    console.log("stackLine:", stackLine)
    const charPositions = getCharPositions(stackLine)
    console.log(`charPositions:`, charPositions)

    const numOfStacks = getNumberOfStacks(initialState)

    // const representation = createRepresentation(initialState)
    // console.log("representation", representation)

}

function createRepresentation(initial) {
    // const numOfStacks = getNumberOfStacks(initial)

    // const linesToProcess = initial.slice(0, -2) // exclude the stack line and the empty line

    // go through each line, starting from the end.

    // let boxesArray = new Array(getNumberOfStacks(initial))

//     for (let i = linesToProcess.length - 1; i <= 0; i--) {

// }
}

//// wip

//// helper functions

function cleanLine(line: string) {
    let cleanedLine = line.split("").map((char, i) => {
        if (charPositions.includes(i)) {
            return char
        }
    }).filter(char => char !== undefined)
    console.log("cleanedLine:", cleanedLine)
    return cleanedLine
}

let charPositions: number[]
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
    charPositions = charIndices
    return charIndices
}

function isLetter(str) {
    if (str.match(/[a-z]/i)) return str
}

function getNumberOfStacks(initial) {
    const stacksArray = initial[initial.length - 2].trim().split("   ") // trim; split by 3 spaces
    console.log("stacks array", stacksArray)
    return stacksArray.length
}