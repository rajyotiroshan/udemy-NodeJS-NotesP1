const chalk = require('chalk');
const yargs = require('yargs');
const _ = require('lodash');
//const notes = require('./note');

//customize yargs version.

yargs.version('1.1.0');

//Create add cmd

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function() {
        console.log('Adding a new note');
    }
});


//create remove cmd

yargs.command({
    command: 'remove',
    describe: 'REmove a note',
    handler: function() {
        console.log("REmoving a note");
    }
});

//create list cmd.

yargs.command({
    command: 'list',
    describe: 'List out the notes',
    handler: function() {
        console.log("Listing out all the notes");
    }
});

//  create read commands

yargs.command({
    command: 'read',
    describe: "Displaying all notes",
    handler: function(){
        console.log("Displaying All notes");
    }
});

//
console.log(yargs.argv);



/* const argv = yargs.argv;
var cmd = argv._[0];//proce */
 
/*  if(cmd === 'add'){//add
    console.log("Adding new node.");
    let note = notes.addNote(argv.title,argv.body);
    if(note) {
        console.log("inserted notes::" + note);
    }else {
        console.log("already inserted");
    }
}else if(cmd === 'list') {//list
    console.log('Listing all nodes');
    notes.getAll();
}
else if(cmd === 'read'){//read
    let receivedNote = notes.getNote(argv.title);
    if(receivedNote.length > 0) {
        let note = {title:receivedNote[0].title, body:receivedNote[0].body};
        console.log("Received Note::" + note);
    }else {
        console.log("Note with title::" + argv.title + " does not exist.");
    }
}else if(cmd === 'remove') {//remove
    let noteRemoved = notes.removeNote(argv.title);
    let msg = noteRemoved?"note removed":"note does not exist";
    console.log(msg);
}else {
    console.log("Command::" + cmd +' is Not Recognized')
}  */
