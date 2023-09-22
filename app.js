//&& Data structures -> will be using factory functions

function Note(ID = null, information = null) {
  const get_id = () => ID;
  const get_information = () => information;

  return { get_id, get_information };
}

function Library() {
  const notes = [];

  const add_note = (note) => notes.push(note);

  const remove_note = (ID) => {
    notes = notes.filter((note) => note.id !== ID);
  };

  const get_note = (ID) => {
    return notes.find((note) => note.id === ID);
  };

  return { notes, add_note, remove_note, get_note };
}

const library = Library();

//&& User interface //

//^^ Grab pre-existing DOM Elements
const noteInput = document.querySelector(".note-input");
const addNoteBtn = document.querySelector(".add-note-btn");
const notesContainer = document.querySelector(".notes-container");

//^^ Capturing user input

function capture_user_input() {

  const information = noteInput.value; 
  const ID = library.length;

  const newNote = Note(information, ID);
  return newNote;
}

//^^ Create new note on DOM
function createNoteCard(){
    const noteCard = document.createElement("div");
    const information = document.createElement("p");
    const ID = document.createElement("p");
    const removeBtn = document.createElement("button");

    noteCard.classList.add(".note-card");
    information.classList.add(".noteInformation");
    ID.classList.add(".noteID");
    removeBtn.classList.add(".remove-note-btn");


}

//^ Render
function render_note(e) {
    e.preventDefault()
    const newNote = capture_user_input();
}

//Event listeners
addNoteBtn.onClick = ;

// Convert Values

