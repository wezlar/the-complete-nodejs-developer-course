// const add = require('./utils.js')

// const sum = add(100, 200)

// console.log(sum)

// const validator = require('validator')
const chalk = require('chalk')
const getNotes = require('./notes.js')

const notes = getNotes()

console.log(chalk.bgGreen.gray.bold(notes));
