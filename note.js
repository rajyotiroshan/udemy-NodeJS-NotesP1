
const fs = require('fs');

//
var fetchNote = ()=> {
    try {
        let notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    }catch(err) {
        return [];
    }
};

//
var saveNote= (notes)=>{
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var addNote = (title,body)=>{
    var notes = fetchNote();
    let note = {title,body};
    let duplicateNotes = notes.filter((note)=>note.title===title);
    if(duplicateNotes.length === 0) {
        notes.push(note);
        saveNote(notes);
        return note;
    }
};

var getAll = ()=> {
    console.log("Getiing ALl");
};

var getNote = (title)=>{
  //fetch notes
  let notes = fetchNote();
  //filtere notes which matches the argument title.
  let filteredNotes = notes.filter((note)=>note.title===title);
  //return the filteres notes.
  return filteredNotes;
};

var removeNote = (title)=>{
    //console.log("Removing note with title::"+title);
    //fetch note.
    let notes = fetchNote();
    //filter notes, removing the one with title of argument.
    let filteredNotes = notes.filter((note)=>note.title!==title);
    //save new notes array.
    saveNote(filteredNotes)

    return notes.length !== filteredNotes.length;
}; 

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}

