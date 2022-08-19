/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
// let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];

let ages = [26, 27, 30, 40, 80];
let[john, mary, joe] = ages;

console.log(john, mary, joe);
// Destructuring objects

let jobs = {
    mike: 'designer',
    jill: 'developer',
    alicia: 'accountant'
};

let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);

// Destructuring subsets

let languages = ['english', 'french', 'spanish', 'german', 'japanese'];

let [johnsNative, johnsSecondary] = languages;
console.log(johnsNative, johnsSecondary);

let [,,marysNative, marySecondary] = languages;
console.log(marysNative, marySecondary);

let languages2 = {
    firstLanguage:'english',
    secondLanguage:'french',
    thirdLanguage: 'german',
    fourthLanguage: 'japanese',
}

let {firstLanguage, fourthLanguage} = languages2;

console.log(firstLanguage, fourthLanguage);

// Using rest parameter syntax

let fruits = ['apple', 'orange', 'banana', 'peach', 'cherry'];
let [favourite, secondFavourite, ...others] = fruits;

console.log(favourite, secondFavourite, ...others);


let foods = {
    brian: 'pizza',
    anna: 'pasta',
    sarah: 'vegetarian',
    andrea: 'steak'
}

let {brian, anna, ...rest} = foods;
console.log(brian, anna);
console.log(rest);