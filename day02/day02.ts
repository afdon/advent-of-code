import fs from "fs";

// Read the input file asynchronously

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading input file:', err);
        return;
    }

    part1(data);
});

function part1(input: string) {
    const lines = input.split("\n")
    
    const moves = lines.map(line => {
        // line.split(" ").join("") // need to remove whitespace if doing it this way
        return line[0] + line[2]
    })

    console.log(moves)

    // const scores = moves.map(round => {
    //     let opponentScore = 0
    //     let myScore = 0
        
    //     if (round[0] === "A") opponentScore = 1; // rock
    //     if (round[0] === "B") opponentScore = 2; // paper
    //     if (round[0] === "C") opponentScore = 3; // scissors
        
    //     if (round[1] === "X") myScore = 1; // rock
    //     if (round[1] === "Y") myScore = 2; // paper
    //     if (round[1] === "Z") myScore = 3; // scissors

    //     // if myScore - opponentScore = 0, it's a draw
    //     // if myScore - opponentScore = 1, I win, if it's -1, I lose
    //     // if myScore - opponentScore = 2, I lose. if it's -2, I win

    //     // so...
    //     // calculate myScore - opponentScore. If it's 1 or -2, I win. If it's -1 or 2, I lose. Else, it's a draw.
        
    //     return [opponentScore, myScore]
    // })

    // console.log(scores)

    // scores.map(set => {

    //     if (set[0] === set[1]) {
    //         set[0] += 3;
    //         set[1] += 3;
    //     } else if (set[0]) 
    // })
    
};



