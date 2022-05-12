//child process is a node module used to create sub proccess within a script
// you can perform different tasks with your script

const cp = require('child_process')

// console.log('Open Calculator')

// cp.execSync('calc')


// cp.execSync('start chrome https://www.pepcoding.com/')


console.log('Output ' + cp.execSync('node test.js'))

