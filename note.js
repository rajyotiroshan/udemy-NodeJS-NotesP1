const fs = require('fs');
const chalk =  require('chalk');

const getNotes = function() {
    return 'Your Notes..';
}
/**Add new note */
const addNote = (title, body) =>{
    const notes =  loadNotes();
    const duplicateNotes = notes.filter((note)=>note.title === title);
    
    if(duplicateNotes.length === 0 ){
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

/**Remove note  */

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
    removeNote
}