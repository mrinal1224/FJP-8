const fs = require("fs");

const path = require("path");

let types = {
  media: ["mp4", "mkv", "mp3", "jpg", "jpeg"],
  archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
  documents: [
    "docx",
    "doc",
    "pdf",
    "xlsx",
    "xls",
    "odt",
    "ods",
    "odp",
    "odg",
    "odf",
    "txt",
    "ps",
    "tex",
  ],
  app: ["exe", "dmg", "pkg", "deb"],
};

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

  organizeHelper(dirpath, destPath);
}

function organizeHelper(src, dest) {
  let childNames = fs.readdirSync(src);
  // console.log(childNames);

  for (let i = 0; i < childNames.length; i++) {
    let childAddress = path.join(src, childNames[i]); // path is identified for all children
    let checkForFile = fs.lstatSync(childAddress).isFile();
    // console.log(childAddress + " " + checkForFile);

    if (checkForFile == true) {
      let fileCategory = getCategory(childNames[i]);
      console.log(childNames[i] + " belongs to " + fileCategory);

      sendFiles(childAddress, dest, fileCategory);
    }
  }
}

function getCategory(fileName) {
  let ext = path.extname(fileName);
  ext = ext.slice(1);
  //console.log(ext)

  for (let type in types) {
    let cTypeArr = types[type];

    for (let i = 0; i < cTypeArr.length; i++) {
      if (ext == cTypeArr[i]) {
        return type;
      }
    }
  }

  return "others";
}

function sendFiles(srcFilePath, dest, fileCategory) {
  let catPath = path.join(dest, fileCategory); // here we are making categoryPath to create folders

  if (fs.existsSync(catPath) == false) {
    // check for if the category folder Alredy Exists
    fs.mkdirSync(catPath);
  }

  let fileName = path.basename(srcFilePath); // we took out the name of the files
  let destPath = path.join(catPath, fileName); // here we created a path for the files with theri specific Category

  fs.copyFileSync(srcFilePath, destPath); // copied files from src to destn

  fs.unlinkSync(srcFilePath); // deleted the files from the source

  console.log(fileName + "Copied to" + fileCategory);
}

module.exports = {
  organizeFnKey: organizeFn,
};
