const fs =require("fs");
/* const book = {
    title: 'Eggo is the enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book);

const parseData = JSON.parse(bookJSON);

fs.writeFileSync('1-json.json', bookJSON);
const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data); */

/**Challenge */

//1
const dataBuffer = fs.readFileSync("1-json.json");
const dataString = dataBuffer.toString();
const data = JSON.parse(dataString);
//2
data.name = "Arjun";
data.age = 26;
//3
const newDataStr = JSON.stringify(data);
fs.writeFileSync("1-json.json",newDataStr);


