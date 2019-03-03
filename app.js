const chalk = require('chalk');
const yargs = require('yargs');
const _ = require('lodash');
const notes = require('./note');

//customize yargs version.

yargs.version('1.1.0');

//Create add cmd

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe:'',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
       notes.addNote(argv.title, argv.body);
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
yargs.parse();

