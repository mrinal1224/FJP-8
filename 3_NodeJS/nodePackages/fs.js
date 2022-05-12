const fs = require("fs");

//1 . File ko read Kaise Karey (Reading A file)

// let content = fs.readFileSync('f1.txt')
// console.log('Data of File 1 =>' + content)
// console.log(content.toString())

//2 . writing into a file
//writeFileSync

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


