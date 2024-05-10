    function processData(input) {
        // Split input by newline character to get individual test cases
        const testCases = input.trim().split('\n');
        
        // Iterate over test cases
        for (let i = 1; i < testCases.length; i++) {
            const testCase = testCases[i].trim(); // Get the current test case
            let evenChars = ''; // Initialize a string to store even-indexed characters
            let oddChars = ''; // Initialize a string to store odd-indexed characters
            
            // Iterate over characters of the current test case
            for (let j = 0; j < testCase.length; j++) {
                // Check if the index is even or odd
                if (j % 2 === 0) {
                    evenChars += testCase[j]; // Append even-indexed character to evenChars
                } else {
                    oddChars += testCase[j]; // Append odd-indexed character to oddChars
                }
            }
            
            // Print even-indexed characters followed by a space and odd-indexed characters
            console.log(`${evenChars} ${oddChars}`);
        }
    }
    
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
