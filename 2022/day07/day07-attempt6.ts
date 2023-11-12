// Find all of the directories with a total size of at most 100000. What is the sum of the total sizes of those directories?

// if the children contains any directories, find their children.
// If the children do not contain any directories, print their file size
// add the file size to each of its parents, up the chain.
// else (it's a file), add its filesize to the total.

import fs from "fs";

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading input file:", err);
    return;
  }
  part1(data);
});

let directories: string[] = [];
let storage: {} = {};

function part1(input: string) {
  const lines = input.split("\n");

  // get root contents
  let rootContents = listRootContents(lines);
  console.log(rootContents);

  // get all directories
  directories = findAllDirectories(lines);
  console.log(`directories: ${directories}`);

//   console.log("storage", storage); // not working
}

function findAllDirectories(lines: string[]): string[] {
  let directories: string[] = [];
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].charAt(0) === "d") {
      directories.push(lines[i]);
    }
  }
  return directories;
}

function tallyFilesWithin(dir: string, lines: string[]) {
  if (dir.charAt(0) !== "d") {
  }
}

function grabNumber(line: string): number {
  let number = parseInt(line);
  return number;
}

function hasNoChildren() {}

// given a directory, find its children

function findChildDirs(dir: string, lines: string[]): any {
  let children: string[] = []; // todo
  let dirName = dir;
  // get the dir name, if the whole input is supplied
  if (/^dir\s*/.test(dir)) {
    dirName = dir.slice(4);
  }
  console.log(`The directory name is ${dirName}`);

  // find where we cd into that dir, and ls. Start grabbing from the next line
  for (let i = 0; i < lines.length; i++) {
    if (lines[i] === `$ cd ${dirName}` && lines[i + 1] === `$ ls`) {
      console.log("found");
      // get all the non-commands (doesn't start with $) after the cd and ls lines
      let j = i + 2;
      while (j < lines.length && lines[j].charAt(0) !== "$") {
        if (i > lines.length - 1) return; // didn't stop the loop
        if (lines[j].charAt(0) === "d") {
          children.push(lines[j]);
        } else if (typeof parseInt(lines[j].charAt(0)) === "number") {
          console.log(`lines[j] ${lines[j]}`);
          if (!storage[dirName]) {
            storage[dirName] = 0;
          }
          console.log("adding", parseInt(lines[j]));
          storage[dirName] += parseInt(lines[j]);
          // filesizes.push(parseInt(lines[j])) // push the number into filesize array÷sdd
          // total = total + parseInt(lines[j]) // add the filesize to the total
        } else {
          console.log("oops", j);
        }
        j++;
      }
    }
    console.log(`children is typeof ${typeof children}: ${children}`, children);
    return children;
  }
  return null;
}

function printFolderContents(contents: string[]): void {
  let list = contents.map((content, i) => {
    // add padded index for pretty printing
    console.log(
      `Content #${padIndex(i)} at index ${padIndex(i + 1)}: ${content}`
    );
  });
}

// padStart for single digit indices
function padIndex(index: number): string {
  return index.toString().padStart(2, "0");
}

// find the contents of the parent folder.

function getContents(lines: string[]): string[] {
  let rootContents: string[] = [];
  // just assume there's a "$ cd /" command somewhere, followed by "$ ls" on the next line
  for (let i = 0; i < lines.length; i++) {
    if (
      lines[i].charAt(0) === "$" &&
      lines[i].charAt(2) === "c" &&
      lines[i].charAt(3) === "d" &&
      lines[i].charAt(4) === " "
    ) {
      console.log("cd command");
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
