
//  Find the item type that appears in both compartments of each rucksack. What is the sum of the priorities of those item types?

import fs from "fs";

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading input file:", err);
    return;
  }

  part2(data);
});

function part2(input: string) {
  const lines = input.split("\n");

  // pop off each line and push into group array, until you get to group.length === 3.

  // const findBadge = (array: [string, string, string]) => {
  const findBadge = (array: any) => {

    array.sort((a, b) => a.length - b.length) // sort array by string lengths in ascending order

    for (let i = 0; i < array[0].length; i++) {
      if (array[1].includes(array[0][i]) && array[0].includes(array[0][i])) {
        // the badge is array[0][i]
        let badge = array[0][i]
        return badge
      }
    }
  }

  let findBadgePriority = (badge: "") => {
    const sortedByPriority = "0abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return sortedByPriority.indexOf(badge)
  }

  let sumOfBadges: number = 0
  let badgePrioritiesArray: number[] = []
  // let sumOfBadgePrioritiesArray = badgePrioritiesArray.reduce()

  const process = (lines: string[]) => {
    let group = lines.splice(0, 3)
    let badge = findBadge(group)
    let badgePriority = findBadgePriority(badge)
    badgePrioritiesArray.push(badgePriority)
    console.log("badgePrioritiesArray: ", badgePrioritiesArray)
    sumOfBadges = sumOfBadges + badgePriority
    return sumOfBadges
  }

  while (lines.length > 1) process(lines)

  if (lines.length === 0) {
    console.log("the sum of all badge priorities: ", sumOfBadges)
  }

}

