// find each tree's scenic score:
// for each tree, find and multiple its viewing distance from each of the 4 directions.
// viewing distance: how many trees it can "see". Line of sight stops at first tree of same height or greater in that viewing direction.

import fs from "fs";

let input: string;

type tree = [number, number];
type visible = { top: number; bottom: number; left: number; right: number };

let score: number = 0;

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading input file:", err);
    return;
  }

  part1(data);
});

function part1(input: string) {
  const rows = input.split("\n");

  // these are now the right way around
  const colLength = rows.length;
  const rowLength = rows[0].length;

  const getViewingDistance = (tree: tree): visible => {
    let [rowIndex, colIndex] = tree;

    let visible = {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    };

    // top
    for (let i = rowIndex - 1; i >= 0; i--) {
        if (i < 0) { 
            break;
        }
      if (getHeight([i, colIndex]) < getHeight(tree)) {
        visible.top++;
      } else {
        visible.top++;
        break;
      }
    }

    // bottom -- TROUBLESHOOT THIS 
    for (let i = rowIndex + 1; i < rowLength; i++) {
        if (i >= rowLength) {
            break;
        }
      if (getHeight([i, colIndex]) < getHeight(tree)) {
        visible.bottom++;
      } else {
        visible.bottom++;
        break; 
      }
    }

    // left
    for (let i = colIndex - 1; i >= 0; i--) {
        if (i < 0) {
            break;
        }
      if (getHeight([rowIndex, i]) < getHeight(tree)) {
        visible.left++;
      } else {
        visible.left++;
        break;
      }
    }

    // right
    for (let i = colIndex + 1; i < colLength; i++) {
        if (i >= colLength) {
            break;
        }
      if (getHeight([rowIndex, i]) < getHeight(tree)) {
        visible.right++;
      } else {
        visible.right++
        break;
      }
    }

    console.log(`tree at ${tree}; visible:`, visible)
    return visible;
  };

  const getScenicScore = (tree: tree): number => {
    let view = getViewingDistance(tree);
    console.log(`tree at ${tree} view`, view)
    let scenicScore = view.top * view.bottom * view.left * view.right;
    console.log(`tree at ${tree} has scenic score: ${scenicScore}`);
    return scenicScore;
  };

  const getHeight = (tree: tree): number => {
    let [rowIndex, colIndex] = tree;
    let height: number;
    height = parseInt(rows[rowIndex].charAt(colIndex));
    return height;
  };

  const checkAll = () => {
    for (let i = 0; i < rows.length; i++) {
      for (let j = 0; j < rows[0].length; j++) {
        let tree: tree = [i, j];
        if (getScenicScore(tree) > score) score = getScenicScore(tree);
        console.log(
          `Tree at ${tree} has new highest scenic score of ${score}.`
        );
      }
    }
  };

  checkAll();
}
