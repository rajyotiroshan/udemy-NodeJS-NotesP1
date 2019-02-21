console.log('Starting app.js');

const fs = require("fs");
//const os= require("os");
const yargs = require('yargs');
//lodash
const _ = require('lodash');
const notes = require('./note');

//var res = notes.addNote();

/* var user= os.userInfo();

fs.appendFile('greetings.txt',`Hello World ${user.username}! Tou are ${notes.age}` ,(err)=>{
    if(err) {
        console.log("no error file created successfully");
    }
}); */

//console.log(res);
/* var res = notes.add(4,5);
console.log(res);
 */

// console.log(_.isString(true));
// console.log(_.isString('Rajan'));
const argv = yargs.argv;
var cmd = argv._[0];//process.argv[2];
console.log('Commands', cmd);
console.log('Process ::',process.argv);
console.log('Yargs:: ', argv);

/* var filteredArray = _.uniq(['rajan','rajan','kumar',2,3,3,3,'kumar']);
console.log(filteredArray); */

if(cmd === 'add'){
    console.log("Adding new node.");
    let note = notes.addNote(argv.title,argv.body);
    if(note) {
        console.log("inserted notes::" + note);
    }else {
        console.log("already inserted");
    }
}else if(cmd === 'list') {
    console.log('Listing all nodes');
    notes.getAll();
}
else if(cmd === 'read'){
    console.log("Read input");
    notes.getNote(argv.title);
}else if(cmd === 'remove') {
    console.log("Removing Note");
    notes.removeNote(argv.title);
}else {
    console.log("Command::" + cmd +' is Not Recognized')
}