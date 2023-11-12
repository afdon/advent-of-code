import fs from "fs";

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading input file:", err);
    return;
  }

  part1(data);
});

let store: any = []

function part1(input: string) {
  const chars = input.split("");

  let marker: any
  let markerReady: boolean = false
  let charsProcessed: number = 0

}

// function checkUnique(string) {
//   let chars = string.split("");
//   for (let i = 0; i < chars.length; i++) {}
// }

function isUnique(str: string) {
  return new Set(str).size == str.length;
}

// function stringIsUnique(input: string) {
//   for (let i = 0; i < input.length; i++) {
//     if (input.indexOf(input[i]) !== input.lastIndexOf(input[i])) {
//       return false;
//     }
//   }
//   return true;
// }

