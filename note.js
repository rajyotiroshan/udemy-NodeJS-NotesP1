const fs = require('fs');
const chalk =  require('chalk');

/**Add new note */
const addNote = (title, body) =>{
    const notes =  loadNotes();
    //const duplicateNotes = notes.filter((note)=>note.title === title);
    const duplicateNote = notes.find((note)=>note.title===title);
    if(!duplicateNote ){
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse("Noted Added."))
    }
    else {

        console.log(chalk.red.inverse("Note's title taken"));
    }
    
}

/***
 * @param {title}
 */

const removeNote = (title)=>{
    const notes = loadNotes();
    const filteredNotes = notes.filter((note)=> note.title !== title);
    if(notes.length > filteredNotes.length) {
        saveNotes(filteredNotes);
        console.log(chalk.green.inverse("Notes Removed!"));
    } else {
        
        console.log(chalk.red.inverse("No notes found"))
    }
}


/**
 * @returns All notes.
 */

const listNotes = ()=> {
    const notes = loadNotes();
    notes.forEach((note)=>console.log("-->Title::"+ note.title + "\nBody::" +note.body))
}

/**
 * @return matched note 
 * @param {title} notes 
 */

 const readNote = (titel)=> {
    const notes = loadNotes();
    const matchedNote = notes.find((note)=> note.title === titel);
    if(matchedNote) {
        console.log(matchedNote.title + "\n" + matchedNote.body);

    }else {
        console.log(chalk.red.inverse("Notes title does not exist"));
    }
 };

 //
const saveNotes= (notes)=> {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

//
const loadNotes = ()=> {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        const data = JSON.parse(dataJSON);
        return data;
    }catch(err) {
        return [];
    }
  
}

module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote
}