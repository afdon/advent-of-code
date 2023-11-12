import fs from "fs";

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading input file:", err);
    return;
  }

  part1(data);
});

type coord = [number, number]

function part1(input: string) {
  const instructions = input.split("\n");

  let head: coord = [0, 0];
  let tail: coord = [0, 0];
  let tailPositions: coord[] = [];

  for (let i = 0; i < instructions.length; i++) {
    let numberOfSteps: number = parseInt(instructions[i].slice(2));
    let direction: string = instructions[i][0];

    console.log(numberOfSteps, direction);

    for (let j = 0; j < numberOfSteps; j++) {
      let [newHead, newTail] = move(direction, head, tail);
      head = newHead;
      tail = newTail;
      tailPositions.push(newTail);
    }
  }

  let uniquePositions: any[] = [];
  for (let pos of tailPositions) {
    if (uniquePositions.every(up => up[0] !== pos[0] || up[1] !== pos[1])) {
        uniquePositions.push(pos)
    }
  }

  console.log(`Unique Tail Positions:\n`, uniquePositions.length);
  // console.log(uniquePositions);
}

const move = (
  direction: string,
  headPosition: coord,
  tailPosition: coord
): [coord, coord] => {
  let newHead: coord = [...headPosition];
  let [x, y] = newHead;

  // console.log(x, y, direction)

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

//   const xDiff = Math.abs(newHead[0] - tailPosition[0]);
//   const yDiff = Math.abs(newHead[1] - tailPosition[1]);

//   let newTail: coord = [...tailPosition];

//   if (xDiff > 1 || yDiff > 1) {
//     newTail = [...headPosition];
//   }

  let newCoords: [coord, coord] = moveTail(headPosition, newHead, tailPosition)

  return newCoords
};

const moveTail = (headPosition: coord, newHead: coord, tailPosition: coord): [coord, coord] => {
    const xDiff = Math.abs(newHead[0] - tailPosition[0]);
  const yDiff = Math.abs(newHead[1] - tailPosition[1]);

  let newTail: coord = [...tailPosition];

  if (xDiff > 1 || yDiff > 1) {
    newTail = [...headPosition];
  }

  return [newHead, newTail]
}