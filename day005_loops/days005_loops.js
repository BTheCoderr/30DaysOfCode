'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


function main() {
    const n = parseInt(readLine().trim(), 10) // Read input integer n
    
    // Loop through values of i from 1 to 10
    for (let i = 1; i <= 10; i++) {
        // Calculate the result as n * i
        const result = n * i
        // Print the result in the specified format
        console.log(`${n} x ${i} = ${result}`)
    }
}

