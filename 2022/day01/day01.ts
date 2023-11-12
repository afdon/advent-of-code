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
    // .slice(0,25)
    const groups = []

    let curGroup:number = 0

    for (let i = 0; i < lines.length; i++) {
        if (lines[i] !== "") {
            if (!groups[curGroup]) {
                groups[curGroup] = []
            }
            groups[curGroup].push(parseInt(lines[i]))
        } else {
            curGroup++
        }
    }
    // console.log(groups)

    const summedGroups = groups.map(group => {
        let sum = 0
        for (let i = 0; i < group.length; i++) {
            sum = sum + group[i]
        }
        return sum
    })

    console.log(summedGroups)

    const sortFunction = (a: number, b: number) => {
        if (a > b) return -1
    }

    const sumsAscending = summedGroups.sort(sortFunction)

    // console.log(sumsAscending)

    console.log(sumsAscending[0])

    // find the sum of the top 3

    let sumOfTop3 = 0

    for (let i = 0; i < 3; i++) {
        sumOfTop3 = sumOfTop3 + sumsAscending[i]
    }

    console.log(sumOfTop3)
}

