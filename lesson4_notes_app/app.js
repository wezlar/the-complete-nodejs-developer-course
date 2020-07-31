const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// customise yargs version
yargs.version('1.1.0')

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Content of the note',
      demandOption: true,
      type: 'string',
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  }
})

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title to remove',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
})

yargs.command({
  command: 'list',
  describe: 'List all the notes',
  handler() {
    notes.listNotes();
  }
})

yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note title to remove',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  }
})

// triggers to command parse
yargs.parse();

// const command = process.argv[2]

// if (command === 'add') {
//   console.log('Adding note!')
// }

// if (command === 'remove') {
//   console.log('Removing note!')
// }
