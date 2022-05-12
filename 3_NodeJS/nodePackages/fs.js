const fs = require("fs");

const path = require('path')


/// Filess ///

//1 . File ko read Kaise Karey (Reading A file)

// let content = fs.readFileSync('f1.txt')
// console.log('Data of File 1 =>' + content)
// console.log(content.toString())

// 2 . writing into a file
// writeFileSync

// // if the file name that is passed doesnt not exists a new file will be created with its
// //name and the data will be written on that file

// fs.writeFileSync("f2.txt", "This data will be written on F2 file");

// fs.writeFileSync("f3.txt", "This data will be written to f3");

//3. append(Update) a file

// // appnedFileSync method adds new data to a previosuly written file

// fs.appendFileSync('f3.txt' , ' This is upadted data ')

//4. Delete

//unlinkSync

// fs.unlinkSync('f1.txt')
// console.log('File deleted')

// let data = fs.readFileSync("f3.txt")

// console.log('data=> ' + data)




/// Directories ////


//creartion of a directory

//mkdirSync

// fs.mkdirSync('myDirectory2')
// console.log('Directory Created')


// delete a Directory

// fs.rmdirSync('myDirectory')
// console.log('myDirectory Deleted')


// exists Sync
// To check whether a directory or file exists or not 
// existsSync

// this returns true or false based on whether the passed directory or file  exists or not

// let doesExist = fs.existsSync('f3.txt')
// console.log(doesExist)


// readdirSync

// let folderContent = fs.readdirSync('D:\\Batches\\FJP-8\\2_JavaScript')
// console.log(folderContent)



// Copying a file from one dir to another dir

let srcFilePath = 'D:\\Batches\\FJP-8\\3_NodeJS\\nodePackages\\myDirectory2\\f1.txt'

let destinationFolderPath = 'D:\\Batches\\FJP-8\\2_JavaScript\\'


let toBeCopiedFileBaseName = path.basename(srcFilePath)

console.log(toBeCopiedFileBaseName) // f1.txt

let destPathComplete = path.join(destinationFolderPath , toBeCopiedFileBaseName)
console.log(destPathComplete)


fs.copyFileSync(srcFilePath , destPathComplete )
console.log('File Copied')

fs.unlinkSync(srcFilePath)























