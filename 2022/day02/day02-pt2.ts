import fs from "fs";

// Read the input file asynchronously

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading input file:", err);
    return;
  }

  part2(data);
});

function part2(input: string) {
  const lines = input.split("\n");

  const moves = lines.map((line) => {
    return line[0] + line[2];
  });

  console.log(moves);

//   Your total score is the sum of your scores for each round. The score for a single round is the score for the shape you selected (1 for Rock, 2 for Paper, and 3 for Scissors) plus the score for the outcome of the round (0 if you lost, 3 if the round was a draw, and 6 if you won).

  let scores = moves.map((move) => {
    switch (move) {
      case "AX": return 3 + 0  // opponent plays rock. you need to lose. you play scissors.
      case "BX": return 1 + 0  // opponent plays paper. you need to lose. you play rock.
      case "CX": return 2 + 0  // opponent plays scissors. you need to lose. you play paper.
      case "AY": return 1 + 3  // opponent plays rock. you need to draw. you play rock.
      case "BY": return 2 + 3  // opponent plays paper. you need to draw. you play paper.
      case "CY": return 3 + 3  // opponent plays scissors. you need to draw. you play scissors.
      case "AZ": return 2 + 6  // opponent plays rock. you need to win. you play paper.
      case "BZ": return 3 + 6  // opponent plays paper. you need to win. you play scissors.
      case "CZ": return 1 + 6  // opponent plays scissors. you need to win. you play rock.
      default: console.log("error")
    }
  });

  console.log(scores)

  let scoreTotal = scores.reduce((a, b) => a + b, 0)

  console.log(scoreTotal)

}
