
//  Find the item type that appears in both compartments of each rucksack. What is the sum of the priorities of those item types?

import fs from "fs";

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading input file:", err);
    return;
  }

  part2(data);
});

const alpha = "0abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

function part2(input: string) {
  const lines = input.split("\n");
  let sum = 0  
  
    for (let i = 0; i < lines.length / 3; i++) {
      let sack1 = findGroupBadge(lines[i * 3])    
      let sack2 = findGroupBadge(lines[(i * 3) + 1])    
      let sack3 = findGroupBadge(lines[(i * 3) + 2])    

      for (let char of Object.keys(sack1)) {
        if (sack2[char] && sack3[char]) {
          sum += alpha.indexOf(char)
        }
      }
    }

    console.log(sum)
}

function findGroupBadge(group: string) {
  let groupHash = {}
  for (let char of group.split("")) {
    // console.log("group, char", group, char)
    if (groupHash[char]) {
      groupHash[char]++
    } else {
      groupHash[char] = 1
    }
  }
  return groupHash
}