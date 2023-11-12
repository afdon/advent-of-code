// find each tree's scenic score:
// for each tree, find and multiple its viewing distance from each of the 4 directions.
// viewing distance: how many trees it can "see". Line of sight stops at first tree of same height or greater in that viewing direction.

import fs from "fs";

let input: string;

type tree = [number, number];
type visible = { top: number; bottom: number; left: number; right: number };

let score: number = 0;

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading input file:", err);
    return;
  }

  part1(data);
});

function part1(input: string) {
  const rows = input.split("\n");

  const rowLength = rows.length;
  const colLength = rows[0].length;

  const getViewingDistance = (tree: tree): any => {
    let [rowIndex, colIndex] = tree;

    let visible = {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    };

    for (let i = rowIndex - 1; i >= 0; i--) {
        // if (i < 0) { visible.top = 0; break }
      if (getHeight([i, colIndex]) < getHeight(tree)) {
        visible.top++;
      } else {
        visible.top++;
        break;
      }
    }

    for (let i = rowIndex + 1; i < rowLength; i++) {
        // if (i >= rowLength) { visible.bottom = 0; break }
      if (getHeight([i, colIndex]) <= getHeight(tree)) {
        visible.bottom++;
      } else {
        visible.bottom++;
        break;
      }
    }

    for (let i = colIndex - 1; i >= 0; i--) {
        // if (i < 0) { visible.left = 0; break }
      if (getHeight([rowIndex, i]) <= getHeight(tree)) {
        visible.left++;
      } else {
        visible.left++;
        break;
      }
    }

    for (let i = colIndex + 1; i < colLength; i++) {
        // if (i >= colLength) { visible.bottom = 0; break }
      if (getHeight([rowIndex, i]) <= getHeight(tree)) {
        visible.right++;
      } else {
        visible.right++
        break;
      }
    }

    // console.log(`visible:`, visible)
    let scenicScoreForTree = visible.top * visible.bottom * visible.left * visible.right
    // return visible;
    return scenicScoreForTree
  };

  const getScenicScore = (tree: tree): number => {
    let view = getViewingDistance(tree);
    let scenicScore = view.top * view.bottom * view.left * view.right;
    console.log(`Scenic score: ${scenicScore}`);
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
        // if (getScenicScore(tree) > score) score = getScenicScore(tree);
        // console.log(
        //   `Tree at ${tree} has new highest scenic score of ${score}.`
        // );
        let scenicScoreForTree = getViewingDistance(tree)
        if (scenicScoreForTree > score) {
            score = scenicScoreForTree
            console.log(`scenic score:`, score)
        }
      }
    }
  };

  checkAll();
}
