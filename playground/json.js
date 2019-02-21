/* var obj = {
    name:'Rajan'
};
var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);
//JSON
var personString =  '{"name": "Rajan", "age":27}';
var person = JSON.parse(personString);
console.log(typeof person);
console.log(person); */

const fs = require("fs");//fileSystem module
 var originalNote = {
     title: 'Title',
     body: 'Body'
 };

 //originalNoteString
var originalNoteString = JSON.stringify(originalNote);
 fs.writeFileSync('notes.json', originalNoteString);

 var noteString = fs.readFileSync('notes.json');
 //note
 var note = JSON.parse(noteString);
 console.log(typeof note);
 console.log("note" ,note);
 console.log(note.title);