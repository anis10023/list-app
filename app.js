//&& Data structures -> will be using factory functions

function Note(ID = 0, information = null) {
  const get_id = () => ID;
  const get_information = () => information;

  return { ID, information, get_id, get_information };
}

function Library() {
  let notes = [
    {
      ID: 1,
      information: "Hello",
    },
  ];

  const add_note = (newNote) => notes.push(newNote);

  const remove_note = (identifer) => {
    notes.splice(library.notes[identifer], 1);
  };

  const get_note = (identifer) => {
    return notes.find((note) => note.ID === identifer);
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
  const ID = library.notes.length + 1;

  const newNote = Note(ID, information);

  reset_inputs();

  return newNote;
}

function update_notes_container() {
  const lastNoteInLibrary = library.notes[library.notes.length - 1];

  createNoteCard(lastNoteInLibrary.information, lastNoteInLibrary.ID);
}

function reset_inputs() {
  noteInput.value.trim();
  noteInput.value = null;
}

//^^ Create new note
function createNoteCard(information, ID) {
  const noteCard = document.createElement("div");
  const information_p = document.createElement("p");
  const ID_p = document.createElement("p");
  const removeBtn = document.createElement("button");

  noteCard.classList.add("note-card");
  information_p.classList.add("noteInformation");
  ID_p.classList.add("noteID");
  removeBtn.classList.add("remove-note-btn");

  removeBtn.dataset.unique = `${ID}`;
  removeBtn.addEventListener("click", (e) =>
    remove_card(removeBtn.dataset.unique, e)
  );

  information_p.textContent = `${information}`;
  ID_p.textContent = `# ${ID}`;
  removeBtn.textContent = "X";

  notesContainer.appendChild(noteCard);
  noteCard.appendChild(information_p);
  noteCard.appendChild(ID_p);
  noteCard.appendChild(removeBtn);
}

//^ Render onto DOM
const render_note = () => {
  const newNote = capture_user_input();

  //! Does not render if input is empty
  if (!newNote.information) {
    return;
  }

  library.add_note(newNote);

  update_notes_container(newNote);
};

//^ Remove Note from DOM
const remove_card = (unique, e) => {
  //   library.notes.splice(library.notes[unique], 1);
  library.remove_note(unique);
  e.target.parentElement.remove();
};

//Event listeners
const handleKeyboardInput = (e) => {
  if (e.key === "Enter") render_note();
};

addNoteBtn.addEventListener("click", (e) => render_note());
window.onkeydown = handleKeyboardInput;

//! Displays precoded object in array
update_notes_container();
