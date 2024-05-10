process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

// Define the Person class
function Person(initialAge){
    // Constructor to initialize age
    if (initialAge < 0) { // Check if initialAge is negative
        console.log("Age is not valid, setting age to 0.");
        this.age = 0; // Set age to 0 if negative
    } else {
        this.age = initialAge; // Otherwise, set age to initialAge
    }

    // Method to check and print the person's age category
    this.amIOld=function(){
        if (this.age < 13) { // If age is less than 13
            console.log("You are young."); // Print 'You are young'
        } else if (this.age >= 13 && this.age < 18) { // If age is between 13 and 17
            console.log("You are a teenager."); // Print 'You are a teenager'
        } else { // If age is 18 or older
            console.log("You are old."); // Print 'You are old'
        }
    };

    // Method to increment the age by 1
    this.yearPasses=function(){
        this.age++; // Increment age by 1
    };
}

function main() {

var T=parseInt(readLine());
for(i=0;i<T;i++){
    var age=parseInt(readLine());
    var p=new Person(age);
    p.amIOld();
    for(j=0;j<3;j++){
        p.yearPasses();
        
    }
    p.amIOld();
    console.log("");   
    }
}
