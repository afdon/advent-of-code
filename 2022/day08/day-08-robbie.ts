import fs from "fs";

let inputFile;
const expectedTestResult = 8;

if (process.argv.includes("t")) {
  console.log("USING DAY 8 **TEST** FILE");
  inputFile = "test_input.txt";
} else {
  console.log("********\nRUNNING DAY 8 - PART 2\n********");
  inputFile = "input.txt";
}

fs.readFile(inputFile, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading input file:", err);
    return;
  }

  const result = part2(data);
  console.log(result);

  if (process.argv.includes("t")) {
    // part 2 test
    console.log(`EXPECTING ${expectedTestResult}, but got ${result}`);
    inputFile = "test_input.txt";

    // find score for spot test
    let treeMat = parseInput(data);
    console.log( `Testing function findScoreForSpot\nEXPECTING 4, but got ${findScoreForSpot(1, 2, treeMat)}`);
    console.log( `Testing function findScoreForSpot\nEXPECTING 8, but got ${findScoreForSpot(2, 3, treeMat)}`);
  }
});

type tree = [number, number];
type visible = { top: number; bottom: number; left: number; right: number };

let score: number = 0;

function part2(data): number {
  const treeMatrix = parseInput(data);
  const highestScore = findHighestScoreSpot(treeMatrix);

  return highestScore;
}

function findHighestScoreSpot(treeMat: number[][]): number {
  let highest = 0;

  for (let i = 0; i < treeMat.length; i++) {
    for (let j = 0; j < treeMat[0].length; j++) {
      const spotScore = findScoreForSpot(j, i, treeMat);
      if (spotScore > highest) {
        console.log("\t possible score", highest, j, i);
        highest = spotScore;
      }
    }
  }

  console.log("highest possible score", highest);

  return highest;
}

function findScoreForSpot(
  x: number,
  y: number,
  treeMatrix: number[][]
): number {
  const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  const spotHeight = treeMatrix[y][x];
  let spotScore = 1;

  for (let d in dirs) {
    let i = 0;
    let dirScore = 0;
    let curDir = dirs[d];

    while (true) {
      let maxY = treeMatrix.length;
      let maxX = treeMatrix[0].length;
      let newPos = [x + curDir[1] * i, y + curDir[0] * i];
      if (
        newPos[0] < 0 ||
        newPos[1] < 0 ||
        newPos[0] > maxX ||
        newPos[1] > maxY
      ) {
        spotScore *= Math.max(dirScore, 1);
        break;
      }

      if (spotHeight > treeMatrix[newPos[1]][newPos[0]]) {
        dirScore++;
      } else if (spotHeight === treeMatrix[newPos[1]][newPos[0]]) {
        dirScore++;
        spotScore *= Math.max(dirScore, 1);
        break;
      } else {
        spotScore *= Math.max(dirScore, 1);
        break;
      }

      i++;
    }
  }

  return spotScore;
}

function parseInput(data): number[][] {
  const lines = data.split("\n");
  const treeMatrix = new Array(lines.length).fill([]);

  for (let i = 0; i < lines.length; i++) {
    treeMatrix[i] = lines[i].split("").map((char) => parseInt(char));
  }

  return treeMatrix;
}
