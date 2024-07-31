console.log('JS OK')

// 1. Retrieve the element of my interest from the DOM
// 2. Prepare the variable with the cost of the ticket based on the kilometers driven
// 3. Ask the user for the number of kilometers they want to travel
// 4. Ask the user for his or her age
// 5. Calculate the total price of the trip
// 6. Apply discount based on age
// 7. Insert the ticket price into the DOM

// PREPARATORY PHASE
// 1. Retrieve the element of my interest from the DOM
const resultElement = document.getElementById('ticket');
console.log(resultElement);

// 2. Prepare the variable with the cost of the ticket based on the kilometers driven
const kilometerPrice = 0.21;

// DATA COLLECTION PHASE
// 3. Ask the user for the number of kilometers they want to travel
const numKilometers = parseInt(prompt('How many kilometers do you have to travel on your journey?'));
console.log(numKilometers, typeof numKilometers);

// 4. Ask the user for his or her age
const userAge = parseInt(prompt('How old are you?'));
console.log(userAge, typeof userAge);

// PROCESSING PHASE
// 5. Calculate the total price of the trip
const totalPrice = kilometerPrice * numKilometers;
console.log('totalPrice', totalPrice);

// 6. Apply discount based on age
if (userAge <= 18) {
    console.log('The discount that has been applied to the cost of your ticket is 20%.')
} else if (userAge >= 65) {
    console.log('The discount that has been applied to the cost of your ticket is 40%.')
} else {
    console.log('No Discount applied')
}

// Discount 20%
const firstDiscount = totalPrice * 20 / 100;
console.log('20% discount', firstDiscount);

let youngDiscount = totalPrice - firstDiscount;
youngDiscount = youngDiscount.toFixed(2);
console.log('youngDiscount', youngDiscount);

// Discount 40%
const secondDiscount = totalPrice * 40 / 100;
console.log('40% discount', secondDiscount);

let seniorDiscount = totalPrice - secondDiscount;
seniorDiscount = seniorDiscount.toFixed(2);
console.log('seniorDiscount', seniorDiscount);

// OUTPUT PHASE
// 7. Insert the ticket price into the DOM
// resultElement.innerHTML = `The cost of your train ticket is priced at <strong>${ }</strong> €`;