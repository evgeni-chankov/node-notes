// Imported modules
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

// My own modules
const notes = require('./notes.js');

// Define options for note title and body
const titleOptions = {
    describe: 'Title of note',
    demand: true, //makes title required
    alias: 't' // allows us to use this as shortcut
};

const bodyOptions = {
    describe: 'The body for the note',
    demand: true,
    alias: 'b'
};

// Save yargs arguments array in a var
let argv = yargs
    .command('add', 'Add a new note', {
        title : titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title : titleOptions,
    })
    .command('remove','Remove a note',{
        title : titleOptions,
    })
    .help()
    .argv;

// the command is the first entry on the yargs array
let command = argv._[0];

// Add conditions for different actions
if(command === 'add') {
    let note = notes.addNote(argv.title, argv.body);
    if(note){
        notes.logNote(note);
    } else {
        console.log('Note title taken. Please choose a different title');
    }
} else if (command === 'list') {
    let allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
    let note = notes.getNote(argv.title);
    if(note){
        console.log('Note found.');
        notes.logNote(note);
    } else {
        console.log('Note not found.');
    }
} else if (command === 'remove') {
    let noteRemoved = notes.deleteNote(argv.title);
    let message = noteRemoved ? 'Note was removed.' : 'Note not found.';
    console.log(message);
} else {
    console.log('Command not recognized.');
}
