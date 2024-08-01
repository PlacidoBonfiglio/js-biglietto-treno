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

// 2. Prepare the variable with the cost of the ticket based on the kilometers driven and price message
const kilometerPrice = 0.21;

const priceMessage = 'Your ticket price is €'

// DATA COLLECTION PHASE
// 3. Ask the user for the number of kilometers they want to travel
const numKilometers = parseInt(prompt('How many kilometers do you have to travel on your journey?', 200));
console.log(numKilometers, typeof numKilometers);

// 4. Ask the user for his or her age
const userAge = parseInt(prompt('How old are you?', 66));
console.log(userAge, typeof userAge);

// PROCESSING PHASE
// 5. Calculate the total price of the trip
const basePrice = kilometerPrice * numKilometers;
let finalPrice = basePrice;

// 6. Apply discount based on age
let discount = null;

if (userAge < 18) discount = 20;
else if (userAge >= 65) discount = 40;

if (discount) {
    const discountElement = document.getElementById('discount-message');

    // Percentage discount message
    const  discountMessage = `You recived a discount of <strong>${discount}%</strong>`;

    //print the discount message 
    discountElement.innerHTML = discountMessage;

    // Calculate discount
    const discountAmount = (finalPrice / 100) * discount;

    // Apply Discount
    finalPrice -= discountAmount;
}

// OUTPUT PHASE
// 7. Insert the ticket price into the DOM
 resultElement.innerText = priceMessage + finalPrice.toFixed(2);

 if (discount) resultElement.innerHTML += ` <del>${basePrice.toFixed(2)}</del>`;