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
    handler(argv) {
       notes.addNote(argv.title, argv.body);
    }
});


//create remove cmd

yargs.command({
    command: 'remove',
    describe: 'REmove a note',
    builder: {
        title: {
            describe: 'Title to remove',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
});

//create list cmd.

yargs.command({
    command: 'list',
    describe: 'List out the notes',
    handler(argv) {
     console.log(chalk.green.inverse("Your Notes"));
     notes.listNotes();
    }
});

//  create read commands

yargs.command({
    command: 'read',
    describe: "Displaying all notes",
    builder: {
        title: {
            describe: "REad the passed notes title",
            demandOption: true,
            type: ''
        }
    },
    handler(argv){
      notes.readNote(argv.title);
    }
});

//
yargs.parse();

