// const howManyHundreds = function(number) {
//   return Math.floor(number/100);
// }
// console.log(howManyHundreds(1000), "=?", 10);
// console.log(howManyHundreds(894), "=?", 8);
// console.log(howManyHundreds(520), "=?", 5);
// console.log(howManyHundreds(99), "=?", 0);
// console.log(howManyHundreds(0), "=?", 0);

// const calculateRectangleArea = function(length, width) {
//   if (length <= 0 || width <= 0) return undefined;
//   return length * width;
// }

// const calculateTriangleArea = function(base, height) {
//   if (base <= 0 || height <= 0) return undefined;
//   return (base * height) / 2;
// }

// const calculateCircleArea = function(radius) {
//   if (radius <= 0) return undefined;
//   return Math.PI * (radius * radius);
// }

// console.log(calculateRectangleArea(10, 5));     // should print 50
// console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
// console.log(calculateRectangleArea(10, -5));    // should print undefined

// console.log(calculateTriangleArea(10, 5)); // should print 25
// console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
// console.log(calculateTriangleArea(10, -5)); // should print undefined

// console.log(calculateCircleArea(10)); // should print 314.159...
// console.log(calculateCircleArea(3.5)); // should print 38.484...
// console.log(calculateCircleArea(-1)); // should print undefined

// const range = function(start, end, step) {
//   if (start == undefined || end == undefined || step == undefined) return [];
//   if(start > end || step <= 0) return [];
//   let solution = [];
//   for (let i = start; i <= end; i += step) {
//     solution.push(i);
//   }
//   return solution;
// }

// const lastIndexOf = function(arr, val) {
//   let lastIndex = -1;
//   for (let i = 0; i < arr.length; i++){
//     if (arr[i] === val) {
//       lastIndex = i;
//     }
//   }
//   return lastIndex;
// }
// console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
// console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
// console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
// console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
// console.log(lastIndexOf([], 3), "=?", -1);

// const concat = function(a, b) {
//   let sol = [...a, ...b];
//   return sol;
// }
// console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
// console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
// console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
// console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);

// const smartGarbage = function(trash, bins) {
//   bins[trash] += 1;
//   return bins;
// }
// console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));

// const carPassing = function(cars, speed) {
//   const newCar = {
//     time: Date.now(),
//     speed
//   }
//   cars.push(newCar);
//   return cars;
// }

// const cars = [
//   {
//     time: 1568329654807,
//     speed: 40,
//   },
//   {
//     time: 1568329821632,
//     speed: 42,
//   },
//   {
//     time: 1568331115463,
//     speed: 35
//   }
// ]

// const speed = 38

// carPassing(cars, speed);
// console.log(cars);

// const judgeVegetable = function(vegetables, metric) {
//   let maxVal = 0;
//   let sub = '';
//   for (let veg of veggies) {
//     if (veg[metric] > maxVal) {
//       maxVal = veg[metric];
//       sub = veg.submitter;
//     }
//   }
//   return sub;
// }

// const vegetables = [
//   {
//     submitter: 'Old Man Franklin',
//     redness: 10,
//     plumpness: 5
//   },
//   {
//     submitter: 'Sally Tomato-Grower',
//     redness: 2,
//     plumpness: 8
//   },
//   {
//     submitter: 'Hamid Hamidson',
//     redness: 4,
//     plumpness: 3
//   }
// ];

// const metric = 'redness'
// console.log(judgeVegetable(vegetables, metric));