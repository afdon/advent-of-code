import fs from "fs";

let input

type tree = [number, number]
type visible = {top: boolean | undefined, bottom: boolean | undefined, left: boolean | undefined, right: boolean | undefined}

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading input file:', err);
        return;
    }

    part1(data);
});


function part1(input: string) {
    const rows = input.split("\n")

    const colLength = rows[0].length
    const rowLength = rows.length

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
    let treesVisible: number = 0

    const getVisibility = (tree: tree): visible => {

        let [rowIndex, colIndex] = tree

        let treeHeight = getHeight(tree)

        let visible = {
            top: true,
            bottom: true,
            left: true,
            right: true,
        }

        // let treesOnTop: tree[] = []
        // let treesOnBottom: tree[] = []
        // let treesOnLeft: tree[] = []
        // let treesOnRight: tree[] = []

        for (let i = 0; i < rowIndex; i++ ) {
            // if ([i, colIndex] > tree) { 
                if (getHeight([i, colIndex]) > getHeight(tree)) {
                visible.top = false; 
                // break 
            }
            // treesOnTop.push([i, colIndex])
            // console.log(`adding ${[i, colIndex]} to treesOnTop: ${treesOnTop}.`)
        }

        for (let i = rowIndex + 1; i < rowLength; i++ ) {
            // if ([i, colIndex] > tree) { 
                if (getHeight([i, colIndex]) > getHeight(tree)) {
                visible.bottom = false; 
                // break 
            }
            // treesOnBottom.push([i, colIndex])
            // console.log(`adding ${[i, colIndex]} to treesOnBottom: ${treesOnBottom}`)        
        }

        for (let i = 0; i < colIndex; i++ ) {
            // if ([rowIndex, i] > tree) { 
                if (getHeight([rowIndex, i]) > getHeight(tree)) {
                visible.left = false; 
                // break 
            }
            // treesOnLeft.push([rowIndex, i])
            // console.log(`adding ${[rowIndex, i]} to treesOnLeft: ${treesOnLeft}`)        
        }

        for (let i = colIndex; i < colLength; i++ ) {
            // if ([rowIndex, i] > tree) { 
                if (getHeight([rowIndex, i]) > getHeight(tree)) {
                visible.right = false; 
                // break 
            }
            // treesOnRight.push([rowIndex, i])
            // console.log(`adding ${[rowIndex, i]} to treesOnRight: ${treesOnRight}`)        
        }
        return visible
    
    }

    const checkVisible = (tree: tree): boolean => {
        let [rowIndex, colIndex] = tree

        let viz = getVisibility(tree)

        if (Object.values(viz).includes(true)) {
            console.log(`tree at [${rowIndex}, ${colIndex}] is visible.`)
            visibleTotal++
            return true
        }
        console.log(`tree at [${rowIndex}, ${colIndex}] is not visible.`) 
        return false
    }

    const getHeight = (tree: tree): number => {
        let [rowIndex, colIndex] = tree
        let height: number
        height = parseInt(rows[rowIndex].charAt(colIndex))
        return height
    }

    const checkAll = () => {
        for (let i = 0; i < rows.length; i++) {
            for (let j = 0; j < rows.length; j++) {
                let tree: tree = [i, j]
                if (checkVisible(tree)) treesVisible++
            }
        }
    }

    checkAll()

    // check each tree

    // for (let i = 0; i < rows[0].length; i++) {}

    // let string = rows.forEach(row => row.split('').forEach(char => getVisibility(char)))

    // check each tree at [rowIndex, colIndex]
    // from [0, 0]
    // to i < [rowLength, colLength]

    
}

