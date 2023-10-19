// Find all of the directories with a total size of at most 100000. What is the sum of the total sizes of those directories?

import fs from "fs";

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading input file:", err);
    return;
  }
  part1(data);
});

let filesizes: number[] = []
let total: number = 0

function part1(input: string) {
  const lines = input.split("\n");

  let rootContents = listRootContents(lines);
  console.log(rootContents);

  printFolderContents(rootContents);

  let children: string[] = findChildren("/", lines)
  printFolderContents(children)

  // if the children contains any directories, find their children.
  // else (it's a file), add its filesize to the total.

  // need recursion?

    recurse(children, lines)

    console.log(`filesizes: ${filesizes}`)
    console.log(`total: ${total}`)

    // for (let i = 0; i < children.length; i++) {
        
    // }

}

function findAllDirectories() {
    
}

function findDirectoriesUnder100k() {

}

function grabNumber(line: string): number {
    let number = parseInt(line)
    return number
}

function recurse(list: string[], lines: string[]) {
    for (let i = 0; i < list.length; i++) {
        let children = findChildren(list[i], lines)
        if (!children || children.length === 0) {
            console.log("no children")
        }
        if (children) recurse(children, lines)
    }
}

// given a directory, find its children

function findChildren(dir: string, lines: string[]): any {
    let children: string[] = []
  let dirName = dir;
  // get the dir name, if the whole input is supplied
  if (/^dir\s*/.test(dir)) {
    dirName = dir.slice(4);
  }
  console.log(`The directory name is ${dirName}`)
  // find where we cd into that dir, and ls. Start grabbing from the next line
  for (let i = 0; i < lines.length; i++) {
    if (
        lines[i] === `$ cd ${dirName}` 
        && lines[i + 1] === `$ ls`
        ) {
        console.log("found")
          // get all the non-commands (doesn't start with $) after the cd and ls lines
        let j = i + 2
        while (lines[j].charAt(0) !== "$") {
            if (lines[j].charAt(0) === "d") {
                children.push(lines[j])
            } else if (typeof parseInt(lines[j].charAt(0)) === "number") {
                console.log(`lines[j] ${lines[j]}`)
                filesizes.push(parseInt(lines[j])) // push the number into filesize array
                total = total + parseInt(lines[j]) // add the filesize to the total
            } 
            j++
        }
    }
    console.log(`children is typeof ${typeof children}: ${children}`, children)
    return children
  }
  return null
}

function printFolderContents(contents: string[]): void {
  let list = contents.map((content, i) => {
    // add padded index for pretty printing
    console.log(
      `Content #${padIndex(i)} at index ${padIndex(i + 1)}: ${content}`
    );
  });
}

// padStart for sigle digit indices
function padIndex(index: number): string {
  return index.toString().padStart(2, "0");
}

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



function validate(string: string): string {
    let command: string | undefined;
    switch (true) {
      case /^\$\scd\s\S+/.test(string):
        if (/^\$\scd\s\//) {
          console.log("cd /");
          command = "cd root";
          return command
          // break;
        } else if (/^\$\scd\s\.\./) {
          console.log("cd ..");
          command = "cd up";
          return command
          // break;
        } else {
          console.log("cd into");
          command = "cd into";
          return command
          // break;
        }
      case /^\$\sls/.test(string):
        console.log("ls.");
        command = "ls";
        return command
      //   break;
      default:
        console.log("Unknown");
        command = "unknown";
        return command
    }
  }