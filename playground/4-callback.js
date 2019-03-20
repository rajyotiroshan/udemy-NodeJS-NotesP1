/* setTimeout(()=>{
    console.log("Two seconds are over!.");
},2000);

const names = ['Andrew', 'Jen', 'Jess'];
const shortnames = names.filter((name)=>{
    return name.length<=4;
});

const geoCode = (address, callback) => {
    setTimeout(()=>{
         const data= {
            lat: 0,
            long:0
        }

        callback(data);
    },2000);
};

geoCode("philadephia", (data)=>{
    console.log(data);
});
 */

 //
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})

function add(a, b, callback) {
    setTimeout(()=>{
        const result = a+b;
        callback(result)
    }, 2000);
}