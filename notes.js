// Require external modules
const fs = require('fs');

/*
 *  Gets all notes from filesystem
 */
let fetchNotes = () => {
    // Check if file exists and get existing data from file
    try {
        let notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (error) {
        return [];
    }
};

/*
 *  Saves all notes to file
 *  @param {object} notes - Takes the notes array and writes it to a file
 */
let saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

/*
 *  Creates a new note and saves it to filesystem
 *  @param {string} title - The title of the note
 *  @param {string} body - The content of the note
 */
let addNote = (title, body) => {
    // Get the notes array
    let notes = fetchNotes();
    
    // Create single note
    let note = {
        title,
        body
    };

    // Check for duplicates and push to array and local storage
    let duplicateNotes = notes.filter((note) => note.title === title);
    if(duplicateNotes.length === 0) {
        // Add note to notes array
        notes.push(note);
        saveNotes(notes);
        return note;
    } else {
    
    }
};

/*
 *  Returns all available notes from filesystem
 */
let getAll = () => {
    return fetchNotes();
};

/*
 *  Returns a specific note from filesystem
 *  @param {string} title - The title of the note to be returned
 */
let getNote = (title) => {
    // Fetch all notes
    let notes = fetchNotes();

    // Filter out the note with the correct title
    let correctNote = notes.filter((note) => note.title === title);

    // Check if correct note is in the correctNote array and return it
    return correctNote[0];
};

/*
 *  Deletes a note from filesystem
 *  @param {string} title - The title of the note to be deleted
 */
let deleteNote = (title) => {
    // Get all notes
    let notes = fetchNotes();

    // Filter notes that dont match the title and save all other notes to new array
    let uniqueNotes = notes.filter((note) => note.title !== title);

    // Save new notes array
    saveNotes(uniqueNotes);

    // Return length comparison of both arrays to show confirmation
    return notes.length !== uniqueNotes.length;
};

/*
 *  Logs a notes title and body text to the console
 *  @param {object} note - This is the note passed in to show the title and body 
 */
let logNote = (note) => {
    console.log(`
    Title: ${note.title} 
    ---
    Content: ${note.body}`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    deleteNote,
    logNote
};

