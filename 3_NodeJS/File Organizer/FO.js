// We will be creating a File System Organizer//
//Features of the Project -
//If you have numerous Files in a folder and they are not Properly arranged
//So you can use this tool to arrange them in specific directory according to their extensions
// like text files will go into text File Folder .exe files will go into application folder and so on
// so at the end you will have a arranged set of files in specific folders

// let firstNumber = process.argv[2]
// let secondNumber = process.argv[3]

// console.log(Number(firstNumber) + Number(secondNumber))

let inputArr = process.argv.slice(2);

//console.log(inputArr);

let command = inputArr[0];

switch (command) {
  case "tree":
    console.log("Tree command will be Executed");
    break;
  case "organize":
    console.log("Organize command will be Executed");
    break;
  case "help":
    console.log("help command will be Executed");
    break;

  default:
    console.log("Enter a Valid Command");
    break;
}
