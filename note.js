console.log("Starting note.js");
const fs = require('fs');
//console.log(module);
/* module.exports.age = 25;
module.exports.addNote = ()=>{
    console.log("addNote()");
    return 'newNode';
}

module.exports.add = (a,b)=>{
    return a+b;
} */
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
    console.log("Getting Note with title:"+ title);
};

var removeNote = (title)=>{
    console.log("Removing note with title::"+title);
}; 

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}