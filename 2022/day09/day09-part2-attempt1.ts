import fs from "fs";

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading input file:", err);
    return;
  }

  part1(data);
});

type coord = [number, number];

function part1(input: string) {
  const instructions = input.split("\n");

  let rope: coord[] = [
    [0, 0],
    [0, 0],
    [0, 0],
    // [0, 0],
    // [0, 0],
    // [0, 0],
    // [0, 0],
    // [0, 0],
    // [0, 0],
    // [0, 0],
  ];

  let tailPositions: coord[] = [];

  for (let i = 0; i < instructions.length; i++) {
    let numberOfSteps: number = parseInt(instructions[i].slice(2));
    let direction: string = instructions[i][0];

    for (let j = 0; j < numberOfSteps; j++) {
      let [x, y] = rope[0];
      let newHead;

      switch (direction) {
        case "U":
          newHead = [x, y + 1];
          break;
        case "D":
          newHead = [x, y - 1];
          break;
        case "L":
          newHead = [x - 1, y];
          break;
        case "R":
          newHead = [x + 1, y];
          break;
        default:
          console.log("error", direction);
      }

      rope[0] = newHead;

      for (let k = 0; k < rope.length - 1; k++) {
        rope[k + 1] = moveTrailingKnot(rope[k], rope[k + 1]);
      }

      tailPositions.push(rope[rope.length - 1]);
    }
  }

  let uniquePositions: any[] = [];
  for (let pos of tailPositions) {
    if (uniquePositions.every((up) => up[0] !== pos[0] || up[1] !== pos[1])) {
      uniquePositions.push(pos);
    }
  }

  console.log(uniquePositions);
  console.log(`\n\n\nUnique Tail Positions:\n`, uniquePositions.length);
}

const moveTrailingKnot = (curKnot: coord, nextKnot: coord): coord => {
  let newHead: coord = [...curKnot];
  const xDiff = Math.abs(newHead[0] - nextKnot[0]);
  const yDiff = Math.abs(newHead[1] - nextKnot[1]);

  let newNextKnot: coord = [...nextKnot];

  if (xDiff > 1 || yDiff > 1) {
    newNextKnot = [...curKnot];
  }

  return newNextKnot;
};
