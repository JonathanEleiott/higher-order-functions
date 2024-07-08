// HIGHER ORDER FUNCTIONS

// const calculate = (mathFunction, num) => {
//   return mathFunction(num); // subtractTen(78) => 68
// }

// const addTwo = (num) => {
//   return num + 2;
// }

// const subtractTen = (num) => {
//   return num - 10; // return 78 - 10 => 68
// }

// console.log(calculate(subtractTen, 78)); // 68




// RETURNING IN A FOR LOOP

// const findNum = (numbers, targetNumber) => {
//   for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] === targetNumber) {
//       return true;
//     }
//   }

//   return false;
// }

// const myNums = [1, 2, 3, 4, 5];
// console.log(findNum(myNums, 1));




// FOREACH BROKEN DOWN

// const myForEach = (arr, func) => {
//   for(let i = 0; i < arr.length; i++) {
//     func(arr[i]);
//   }
// }

// const logIsAwesome = (name) => {
//   console.log(`${name} is awesome!`);
// }

// myForEach([`barry`, `larry`, `carrie`], logIsAwesome);




// FOREACH

// const addTwo = (num) => {
//   console.log(num + 2);
// }

// const logNumbersPlusTwo = (numbers) => { // numbers = [1, 6, 10, 21]
//   numbers.forEach(addTwo);
// }

// logNumbersPlusTwo([1, 6, 10, 21]); // see line 42




// ANONYMOUS FUNCTIONS

// const heights = [5, 12, 76, 34, 12];

// heights.forEach((height) => {
//   console.log(`You will be ${height + 10} inches in 10 years!`);
// });

// heights.forEach((currentHeight) => {
//   if(currentHeight > 15) { 
//     console.log(`Wow! You're tall!`);
//   } else {
//     console.log(`Wow! You're small!`);
//   }
// })




// FIND

// const groceryList = [`carrots`, `peas`, `fritatas`, `flour`, `yoohoo`, `flamingos`, `fritos`];

// const foundItem = groceryList.find((groceryItem) => {
//   return groceryItem[0] === 'y';
// })

// console.log(foundItem);




// FILTER

// const groceryList = [`carrots`, `peas`, `fritatas`, `flour`, `yoohoo`, `flamingos`, `fritos`];

// const foundItems = groceryList.filter((groceryItem) => {
//   return groceryItem[0] === 'f';
// })

// console.log(foundItems);




// MAP

// const years = [1776, 1780, 1920, 1842];

// // const wasAGreatYear = years.map((year) => {
// //   return `${year} was a great year!`;
// // });

// // [ `1776 was agreat year!`, `1780 was a great year!`... ]

// console.log(years);
// console.log(wasAGreatYear);




// REDUCE

// const mathNumbers = [2, 4, 10, 12];

// const total = mathNumbers.reduce((accumulator, currentNumber) => {
//   return accumulator - currentNumber;
// }, 100)

// console.log(total);


// const names = [`Harriet`, `Leslie`, `Jim`, `Darla`]

// const isAwesome = names.reduce((accumulator, currentName) => {
//   return `${accumulator}${currentName} is awesome! `;
// }, '');

// // `Harriet` -> acc: '', currName: `Harriet` => ` Harriet is awesome!`
// // Leslie -> acc: Harriet is awesome!, currName: Leslie =>  Harriet is awesome! Leslie is awesome!


// console.log(isAwesome);



// const studentNames = [`Jimbo`, `Lux`, `Max`, `Sam`]

// const studentNamesAndClassNumbers = studentNames.reduce((accumulator, studentName) => {
//   accumulator.push(`${studentName} 256`);
//   return accumulator;
// }, []);

// // Jimbo -> acc: [], stuName: Jimbo => [Jimbo 256]

// console.log(studentNamesAndClassNumbers);

