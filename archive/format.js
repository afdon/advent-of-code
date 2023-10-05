const fs = require('fs');

// Read the input file asynchronously
fs.readFile('input.js', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading input file:', err);
        return;
    }

    // Format the data according to your rules
    const formattedData = formatData(data);

    // Write the formatted data to the output file
    fs.writeFile('output.js', formattedData, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to output file:', err);
            return;
        }

        console.log('Formatting completed. Check output.js for result.');
    });
});

function formatData(data) {
    // Split the input data into groups of numbers based on \n\n
    const groups = data.split('\n\n').map(group => {
        // Split each group into individual numbers and convert them to integers
        return group.trim().split('\n').map(Number);
    });

    // Convert the groups into a formatted string
    const formattedData = groups.map(group => {
        // Convert the group into a string representation of an array
        const arrayString = JSON.stringify(group, null, 4);
    });

    // Combine the formatted groups into a single string with commas between them
    return `[${formattedData.join(',\n')},\n]`;
}

