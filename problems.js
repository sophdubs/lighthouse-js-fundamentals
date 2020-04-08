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

