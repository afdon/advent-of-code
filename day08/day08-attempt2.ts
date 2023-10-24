

import fs from "fs";

let input: string

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

    const rowLength = rows.length
    const colLength = rows[0].length
    
    // need: number of trees visible from outside the grid

    // each tree is visible from the...
    // T, iff all the trees of the same colIndex and a lower rowIndex are a lower number
    // B, iff all the trees of the same colIndex and a higher rowIndex are a lower number
    // L, iff all the trees of the same rowIndex and a lower colIndex are a lower number
    // R, iff all the trees of the same rowIndex and a higher colIndex are a lower number

    let visibleTotal: number = 0
    let treesVisible: number = 0

    const getVisibility = (tree: tree): visible => {

        let [rowIndex, colIndex] = tree

        let visible = {
            top: true,
            bottom: true,
            left: true,
            right: true,
        }

        for (let i = 0; i < rowIndex; i++ ) {
                if (getHeight([i, colIndex]) >= getHeight(tree)) {
                visible.top = false; 
            }
        }

        for (let i = rowIndex + 1; i < rowLength; i++ ) {
                if (getHeight([i, colIndex]) >= getHeight(tree)) {
                visible.bottom = false; 
            }     
        }

        for (let i = 0; i < colIndex; i++ ) {
                if (getHeight([rowIndex, i]) >= getHeight(tree)) {
                visible.left = false; 
            }      
        }

        for (let i = colIndex + 1; i < colLength; i++ ) {
                if (getHeight([rowIndex, i]) >= getHeight(tree)) {
                visible.right = false; 
            }
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
            for (let j = 0; j < rows[0].length; j++) {
                let tree: tree = [i, j]
                if (checkVisible(tree)) treesVisible++
                console.log(`Trees Visible: ${treesVisible}; VisibleTotal: ${visibleTotal}`)
            }
        }
    }

    checkAll()
    
}

