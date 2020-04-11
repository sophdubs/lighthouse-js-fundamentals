//Kata 1 - Sum the Largest Numbers
let sumLargestNumbers = function(data) {
  let [max1, max2] = (data[0] >= data[1] ? [data[0], data[1]] : [data[1], data[0]]);
  for (let i = 2; i < data.length; i++) {
    if (data[i] > max2) {
      if (data[i] > max1) {
        max2 = max1;
        max1 = data[i];
      } else {
        max2 = data[i];
      }
    }
  }
  return max1 + max2;
};

// console.log(sumLargestNumbers([1, 10]));
// console.log(sumLargestNumbers([1, 2, 3]));
// console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

// Kata 2 - Conditional sums

const conditionalSum = function(values, condition) {
  let sum = 0;
  if (condition === "even") {
    values.forEach(val => {
      if (val % 2 === 0) {
        sum += val;
      }
    });
  } else {
    values.forEach(val => {
      if (val % 2 !== 0) {
        sum += val;
      }
    });
  }
  return sum;
};

// console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
// console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
// console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
// console.log(conditionalSum([], "odd"));

// Kata 3 - Vowels
let numberOfVowels = function(data) {
  const vowels = {
    'a': true,
    'e': true,
    'i': true,
    'o': true,
    'u': true
  };
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    if (vowels[data[i]]) {
      sum += 1;
    }
  }
  return sum;
};

// console.log(numberOfVowels("orange"));
// console.log(numberOfVowels("lighthouse labs"));
// console.log(numberOfVowels("aeiou"));

// Katas 4 - Instructors Names
const instructorWithLongestName = function(instructors) {
  let currMax = 0;
  let winner;

  instructors.forEach(instructor => {
    if (instructor.name.length > currMax) {
      currMax = instructor.name.length;
      winner = instructor;
    }
  })
  return winner;
};

// console.log(instructorWithLongestName([
//   {name: "Samuel", course: "iOS"},
//   {name: "Jeremiah", course: "Web"},
//   {name: "Ophilia", course: "Web"},
//   {name: "Donald", course: "Web"}
// ]));
// console.log(instructorWithLongestName([
//   {name: "Matthew", course: "Web"},
//   {name: "David", course: "iOS"},
//   {name: "Domascus", course: "Web"}
// ]));

// Kata 5 - Percent Encoded String

const urlEncode = function(text) {
  let solString = '';
  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
      if (i === 0 || i === text.length - 1) {
        continue;
      } else {
        solString += '%20';
      }
    } else {
      solString += text[i];
    }
  }
  return solString;
};

// console.log(urlEncode("Lighthouse Labs"));
// console.log(urlEncode(" Lighthouse Labs "));
// console.log(urlEncode("blue is greener than purple for sure"));

// Kata 6 - Smart Parking
const whereCanIPark = function (spots, vehicle) {
  const suitableSpots = {
    'regular': ['R'],
    'small': ['S', 'R'],
    'motorcycle': ['M', 'S', 'R']
  };
  let suitable = suitableSpots[vehicle];
  for (let i = 0; i < spots.length; i++) {
    for (let j = 0; j < spots[0].length; j++) {
      if (suitable.includes(spots[i][j])) {
        return [j, i];
      }
    }
  }
  return false; 
};

// console.log(whereCanIPark(
//   [
//     // COLUMNS ARE X
//     // 0    1    2    3    4    5
//     ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
//     ['s', 'M', 's', 'S', 'r', 'M'], // 1
//     ['s', 'M', 's', 'S', 'r', 'm'], // 2
//     ['S', 'r', 's', 'm', 'r', 'M'], // 3
//     ['S', 'r', 's', 'm', 'r', 'M'], // 4
//     ['S', 'r', 'S', 'M', 'M', 'S']  // 5
//   ],
//   'regular'
// ));

// console.log(whereCanIPark(
//   [
//     ['M', 'M', 'M', 'M'],
//     ['M', 's', 'M', 'M'],
//     ['M', 'M', 'M', 'M'],
//     ['M', 'M', 'r', 'M']
//   ],
//   'small'
// ));

// console.log(whereCanIPark(
//   [
//     ['s', 's', 's', 's', 's', 's'],
//     ['s', 'm', 's', 'S', 'r', 's'],
//     ['s', 'm', 's', 'S', 'r', 's'],
//     ['S', 'r', 's', 'm', 'r', 's'],
//     ['S', 'r', 's', 'm', 'R', 's'],
//     ['S', 'r', 'S', 'M', 'm', 'S']
//   ],
//   'motorcycle'
// ))

// Kata 7 - In the Air Tonight

const checkAir = function (samples, threshold) {
  let dirtySum = 0;
  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === 'dirty') {
      dirtySum += 1;
    }
  }
  return dirtySum / samples.length < threshold ? 'Clean' : 'Polluted';
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))