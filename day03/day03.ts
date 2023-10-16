
//  Find the item type that appears in both compartments of each rucksack. What is the sum of the priorities of those item types?

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

  let sharedItemTypes = ""

  // findSharedType should take in a rucksack and adds the shared item type to sharedItemTypes.

  const findSharedType = (rucksack: string) => {

    let firstCompartment = rucksack.slice(0, rucksack.length / 2)
    let secondCompartment = rucksack.slice(rucksack.length / 2, rucksack.length)

    for (let i = 0; i < firstCompartment.length; i++) {
        if (secondCompartment.includes(firstCompartment[i])) {
            sharedItemTypes = sharedItemTypes + firstCompartment[i] // string concatenation

            console.log("firstCompartment", firstCompartment)
            console.log("secondCompartment", secondCompartment)
            console.log("sharedItemTypes", sharedItemTypes)

            return firstCompartment[i]
        }
    }

    console.log("no shared item type found")
    return

  }

  lines.map(line => findSharedType(line))

  console.log("sharedItemTypes", sharedItemTypes)

  // sharedItemTypes is a string of all the shared item types.

//   sharedItemTypes.split("").map(type => {
//     switch(type) {
//         case "a": return 1;
//         case "b": return 2;
//         case "c": return 3;
//         case "d": return 4;
//    }
//   })

// ... forget it, too long.

const sortedByPriority = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

// for each char in sharedItemTypes, 
// find the indexOf that char in sortedByPriority.

let itemPriorities: number[] = sharedItemTypes.split("").map(type => {
    return sortedByPriority.indexOf(type)
})

let sumOfItemPriorities = itemPriorities.reduce((a, b) => a + b, 0)

console.log("sumOfItemPriorities", sumOfItemPriorities)
console.log("itemPriorities", itemPriorities)
console.log(`The priority of ${sharedItemTypes[0]} is ${sortedByPriority.indexOf(sharedItemTypes[0])}`)
console.log("the length of this emoji is: ", "👾".length) // 2. WOW!!!!!

return sumOfItemPriorities

// then sum them up.

}

