//Object property shorthand.

const name= "Andrew";
const userAge = 27;

const user = {
    name,
    age: userAge,
    location: "Delhi"
}

console.log(user);

//Object Destructuring

const product = {
    label: "Red Notebook",
    price: 3,
    stock: 201,
    salePrices: undefined,
    rating: 4.2
}

//let label = product.label;
//const stock = product.stock;

const {label:productLabel, stock, rating = 5} = product;

console.log(productLabel);
console.log(stock);
console.log(rating);
/*console.log(rating);
console.log(product); */

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock);
}

transaction('order', product);