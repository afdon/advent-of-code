
//  Find the item type that appears in both compartments of each rucksack. What is the sum of the priorities of those item types?

import fs from "fs";

// Read the input file asynchronously

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading input file:", err);
    return;
  }

  part2(data);
});

function part2(input: string) {
  const lines = input.split("\n");

  // split the lines up into groups of 3.

  // each group of 3 should be...

  // 

  
    //   [
    //     [], [], []
    //   ]

      let groups: string[][] = []
    
      let j = 0
      
  for (let i = 0; i < lines.length - 1; i++) {

    // if (!groups[j]) { groups[j] = [] } // appease typescript

    // push lines[i] into groups[j] while groups[j].length < 3

    console.log("groups[j].length: ", groups[j].length)

    while (groups[j].length < 3) {
        groups[j].push(lines[i])
        
        console.log("before incrementing j, groups[j].length: ", groups[j].length)

        j++

        console.log("after incrementing j, groups[j].length: ", groups[j].length)

    }
  }

  console.log(`This is groups: `, groups)

}

