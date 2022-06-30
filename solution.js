const snackServings = 15;
const guests = 20;
const sum = snackServings + guests;
console.log(`1.Print the sum of snackServings and guests is ${sum}`);
console.log(`-----------------------`)
const smg = snackServings - guests;
const gms = guests - snackServings;
console.log(`2.Print the result of subtracting guests from snackServings is ${gms} Then, print the result of subtracting snackServings from guests is ${smg}`);
console.log(`-----------------------`)

const smultig = snackServings * guests;
console.log(`3. Multiply snackServings by guests is ${smultig}`);
console.log(`-----------------------`)
const gdivs = guests / snackServings;
console.log(`4. Divide snackServings by guests is ${gdivs}`);

console.log(`-----------------------`)

const drinks = 10;
const resultOne= smultig / drinks;
console.log(`5. . Multiply snackServings and guests. Then, divide the result by drinks gives result as  ${resultOne}`);


console.log(`****************************************`)


const monkeys = 15;
const bananas = 9;
const monkeyfights = 20;
let monkeyBusiness = 90;
const increMonkeyBussiness = monkeyBusiness++;
let boredom = 13;
const decrementBoredom= --boredom;
const MonkeysDividedByBananas = monkeys / bananas;
const happiness =  monkeys-bananas;
const resultThree = monkeyfights - happiness;




console.log(`6. the result when we Divide monkeys by bananas is ${MonkeysDividedByBananas} `);

const resultTwo = (monkeys+bananas)*monkeyfights;

console.log(`7. Add monkeys and bananas, then multiply the result by monkeyfights.the result in variable resultTwo is ${resultTwo}`);


console.log(`8. Increment monkeyBusiness : ${increMonkeyBussiness}`);
console.log(`9. Decrement Boredom : ${decrementBoredom}`);
console.log(`10. Subtract bananas from monkeys and store this in a new variable "happiness". Add happiness and monkeyfights, the result is ${resultThree}`);


const remainder = resultOne % resultTwo;

console.log(`11.  the remainder when "resultOne" is divided by "resultTwo": ${remainder}`);