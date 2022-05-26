const fs = require("fs");
const path = require("path");




function treeFn(dirPath){
       if(dirPath==undefined){
         console.log('Please enter a valid directory path')
       }
   
       else{
           let doesExist = fs.existsSync(dirPath)
   
   
           if(doesExist==true){
             treeHelper(dirPath , ' ' )
           }
       }
   }
   

function treeHelper(targetPath , indent){
       let checkForFile = fs.lstatSync(targetPath).isFile()


       if(checkForFile == true){
         let fileName = path.basename(targetPath)
         console.log(indent + '|---' + fileName)
       }


       else{
           let dirName = path.basename(targetPath)
           console.log(indent + '|___' + dirName)

           let childrenArr = fs.readdirSync(targetPath)

           for(let i=0 ; i<childrenArr.length ; i++){
             let childPath = path.join(targetPath , childrenArr[i])
             treeHelper(childPath , indent + '\t')
           }
       }
}

module.exports={
       treeFnKey : treeFn
}