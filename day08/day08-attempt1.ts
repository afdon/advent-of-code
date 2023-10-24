import fs from "fs";

let input

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

    // need: number of trees visible from outside the grid
    // each tree can be visible from: Top, Below, Left, Right

    // each tree is visible from the...
    // T, iff all the trees of the same colIndex and a lower rowIndex are a lower number
    // B, iff all the trees of the same colIndex and a higher rowIndex are a lower number
    // L, iff all the trees of the same rowIndex and a lower colIndex are a lower number
    // R, iff all the trees of the same rowIndex and a higher colIndex are a lower number

    // tree: [rowIndex, colIndex]
    // trees on Top: 

    let visibleTotal: number = 0

    type tree = [number, number]

    const getTreesInSight = (tree: tree): tree[] => {


        return []
    }

    const checkVisible = (tree: tree) {
        let [rowIndex, colIndex] = tree

        
        
    }

}

