
let arr = [];
let input;
let numInput;
let description;

do {
    console.log("Task Manager Menu:");
    console.log("1. Adddd Task");
    console.log("2. View Tasks");
    console.log("3. Toggle Task Completion");
    console.log("4. Edit Task");
    console.log("5. Delate Task");
    console.log("6. Exit");
    input = prompt("Enter a number from 1-6");
    console.log(input);
    console.log(typeof (input));
    numInput = parseInt(input)
    console.log(numInput, typeof (numInput), "type");


    if (isNaN(numInput)) {
        console.log("Please enter a valid number.");
        continue;
    }


    switch (numInput) {
        case 1:
            // debugger
            console.log('uuuuuuuuuu')
            description = prompt("Enter the task description");
            arr.push(description);
            console.log(arr);
            break;

        case 2:
            console.log("Tasks");
            console.log("num2");
            break;

        case 3:
            console.log("3. Toggle Task Completion bla bla");
            break;

        case 4:
            console.log("4. Edit Task bla bla");
            break;

        case 5:
            console.log("5. Delete Task bla bla");
            break;

        case 6:
            console.log("Exiting...");
            break;
        default:
            console.log("Enter a valid choice");
    }
} while (numInput !== 6);
