/* const square = function (x) {
    return x*x;
} */
/* const square = (x) => {
    return x*x;
} */

//const square= (x)=>x*x;

const event = {
    name: 'Birthday party',
    guestList:["Rajan", "Jane","Mike"],
    printGuestList(){
        console.log("Guest List 4", this.name);
        //const that = this;
        this.guestList.forEach((g)=>{
            console.log(g, "is attending",this.name);
        });
    }
}

console.log(event.printGuestList());