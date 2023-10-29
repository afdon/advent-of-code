import fs from "fs";

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading input file:", err);
    return;
  }

  part1(data);
});

function part1(input: string) {
  const rows = input.split("\n");

  type position = [number, number]
  type direction = [number, number]

  let start: position = [0, 0]

  let up: direction = [0, 1]
  let down: direction = [0, -1]
  let left: direction = [-1, 0]
  let right: direction = [1, 0]

console.log(typeof rows[0].charAt(3))
}

