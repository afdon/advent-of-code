const fs = require('fs');

// Read the input file asynchronously
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading input file:', err);
        return;
    }

    // format the data
    // const formattedData = formatData(data);
    console.log(data);
});

