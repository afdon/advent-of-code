
const fs = require('fs');

// Read the input file asynchronously
fs.readFile('input.js', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading input file:', err);
        return;
    }

    // format the data
    const formattedData = formatData(data);
    console.log(formattedData)
});

// function to format data

const formatData = (data) => {
    let groups = data.split("\n\n")
    console.log(groups)
    // now the data is grouped per elf
    // split the data on \n and join with a comma + newline
    groups = groups.map(group => {
        console.log(`group is typeof ${typeof group}. There are ${groups.length} groups.`) 
        group.split("\n").join(",\n")
})

    // console.log(groups)

    let formattedData = groups.map(group => {
        return `[${group.join(', ')}]`;
    });

    return `[${formattedData.join(',\n')}]`;
};

