const chalk = require('chalk');
const fs = require('fs');

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (duplicateNote) {
    console.log(chalk.red.bold('Note title taken.'));
    return;
  }

  const newNotes = [
    ...notes,
    {
      title,
      body,
    },
  ];

  saveNotes(newNotes);
  console.log(chalk.green.bold('New note added.'));
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length === notesToKeep.length) {
    console.log(chalk.red.bold('Note note found.'));
    return;
  }

  saveNotes(notesToKeep);
  console.log(chalk.green.bold('Note removed.'));
};

const saveNotes = (notes) => {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJson);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};

const listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.inverse('Your notes'));

  notes.forEach((note) => {
    console.log(`- ${note.title}`);
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const findNote = notes.find((note) => note.title === title);

  if (findNote) {
    console.log(chalk.inverse(findNote.title));
    console.log(findNote.body);
  } else {
    console.log(chalk.red.bold('Note not found'));
  }
};

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote,
};
