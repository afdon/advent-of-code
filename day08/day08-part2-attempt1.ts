    // find each tree's scenic score:
    // for each tree, find and multiple its viewing distance from each of the 4 directions.
    // viewing distance: how many trees it can "see". Line of sight stops at first tree of same height or greater in that viewing direction.

    import fs from "fs";

    let input: string
    
    type tree = [number, number]
    type visible = {top: number, bottom: number, left: number, right: number}

    let score: number = 0
    
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
    
        const getViewingDistance = (tree: tree): visible => {
    
            let [rowIndex, colIndex] = tree
    
            let visible = {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            }
    
            for (let i = rowIndex - 1; i >= 0; i-- ) {
                    if (getHeight([i, colIndex]) >= getHeight(tree)) {
                    visible.top++; 
                }
            }
    
            for (let i = rowIndex + 1; i < rowLength; i++ ) {
                    if (getHeight([i, colIndex]) >= getHeight(tree)) {
                    visible.bottom++; 
                }     
            }
    
            for (let i = colIndex - 1; i >= 0 ; i-- ) {
                    if (getHeight([rowIndex, i]) >= getHeight(tree)) {
                    visible.left++; 
                }      
            }
    
            for (let i = colIndex + 1; i < colLength; i++ ) {
                    if (getHeight([rowIndex, i]) >= getHeight(tree)) {
                    visible.right++; 
                }
            }
    
            return visible
        }
    
        // const checkVisible = (tree: tree): boolean => {
        //     let [rowIndex, colIndex] = tree
    
        //     let viz = getVisibility(tree)
    
        //     if (Object.values(viz).includes(true)) {
        //         console.log(`tree at [${rowIndex}, ${colIndex}] is visible.`)
        //         visibleTotal++
        //         return true
        //     }
        //     console.log(`tree at [${rowIndex}, ${colIndex}] is not visible.`) 
        //     return false
        // }

        const getScenicScore = (tree: tree): number => {
            let view = getViewingDistance(tree)
            let scenicScore = view.top * view.bottom * view.left * view.right
            console.log(`Scenic score: ${scenicScore}`)
            return scenicScore
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
                    if (getScenicScore(tree) > score) score += getScenicScore(tree)
                    console.log(`Tree at ${tree} has new highest scenic score of ${score}.`)
                }
            }
        }
    
        checkAll()
        
    }
    
    