// We will be creating a File System Organizer//
//Features of the Project -
//If you have numerous Files in a folder and they are not Properly arranged
//So you can use this tool to arrange them in specific directory according to their extensions
// like text files will go into text File Folder .exe files will go into application folder and so on
// so at the end you will have a arranged set of files in specific folders

// let firstNumber = process.argv[2]
// let secondNumber = process.argv[3]

// console.log(Number(firstNumber) + Number(secondNumber))

const fs = require("fs");
const path = require("path");

let inputArr = process.argv.slice(2);

//console.log(inputArr);

let command = inputArr[0];

console.log(inputArr);

switch (command) {
  case "tree":
    console.log("Tree command will be Executed");
    break;
  case "organize":
    organizeFn(inputArr[1]); // dirPath
    break;
  case "help":
    console.log(` List of all commands -
                     1) Tree Command - node FO.js tree <dirPath>
                     2) Organize Command- node FO.js organize <dirname>
                     3) Help Command - node FO.js help`);
    break;

  default:
    console.log("Enter a Valid Command");
    break;
}

function organizeFn(dirpath) {
  let destPath;

  if (dirpath == undefined) {
    console.log("Please enter a valid Directory Path");
    // check wheter folder path is given or not
    return;
  } else {
    let doesExist = fs.existsSync(dirpath);
    // here we are checking the folder path exists or not

    if (doesExist == true) {
      destPath = path.join(dirpath, "organizedFiles");
      // so first I will have to make a path for a folder
      //D:\Batches\FJP-8\3_NodeJS\test Folder\organizedFiles
      if (fs.existsSync(destPath) == false) {
        fs.mkdirSync(destPath); // we will only create a folder if it does not already exists
      } else {
        console.log("Folder already exists");
      }
    } else {
      console.log("Please enter a valid Path");
    }
  }

  organizeHelper(dirpath);
}

function organizeHelper(src, dest) {
  let childNames = fs.readdirSync(src);
  console.log(childNames);

  for (let i = 0; i < childNames.length; i++) {
    let childAddress = path.join(src, childNames[i]); // path is identified for all children
    let checkForFile = fs.lstatSync(childAddress).isFile();
    console.log(childAddress + " " + checkForFile);
  }
}
