// Find all of the directories with a total size of at most 100000. What is the sum of the total sizes of those directories?

import fs from "fs";

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading input file:", err);
    return;
  }
  part1(data);
});

function part1(input: string) {
  const lines = input.split("\n");

  let rootContents = listRootContents(lines);
  console.log(rootContents);

  validate(lines[0])

//   printFolderContents(rootContents)

}

// const root = {
//   child1: {}
//   child2: {}
// }

// const root = {
//   name: "/",
//   children: [child1, child2]
// }

// const child1 = {
//   name: "child1",
//   children: []
// }

// find the contents of the parent folder.

function listRootContents(lines: string[]): string[] {
  let rootContents: string[] = [];
  // just assume there's a "$ cd /" command somewhere, followed by "$ ls" on the next line
  for (let i = 0; i < lines.length; i++) {
    if (
      lines[i].charAt(0) === "$" &&
      lines[i].charAt(2) === "c" &&
      lines[i].charAt(3) === "d" &&
      lines[i].charAt(5) === "/"
    ) {
      if (
        lines[i + 1].charAt(0) === "$" &&
        lines[i + 1].charAt(2) === "l" &&
        lines[i + 1].charAt(3) === "s"
      ) {
        // while the next line begins with "dir" or a number, push that line into an array.
        let j = i + 2;
        console.log(
          `lines[j] is: ${lines[j]} and its type is:`,
          typeof lines[j]
        );
        while (lines[j].charAt(0) !== "$") {
          console.log(
            `typeof lines[j]: ${typeof lines[j]}; lines[j]: ${lines[j]}`
          );
          rootContents.push(lines[j]);
          j++;
          console.log(`j:`, j);
        }
      }
    }
  }
  return rootContents;
}

// function printFolderContents(contents: string[]): void {
//     let list = contents.map((content, i) => {
//         console.log(`Content #${i + 1} at index ${i}: ${content[i]}`)
//     })
// }

function validate(string: string) {
    let command: string | undefined
  switch (true) {
    case /^\$\scd\s\S+/.test(string):
        if (/^\$\scd\s\//) {
            console.log("cd /")
            command = "cd root"
            break
        } else if (/^\$\scd\s\.\./) {
            console.log("cd ..")
            command = "cd up"
            break
        } else {
            console.log("cd into")
            command = "cd into"
            break;
        }
    case /^\$\sls/.test(string):
      console.log("ls.");
      command = "ls"
      break;
    default:
      console.log("Unknown");
      command = "unknown"
  }
}
