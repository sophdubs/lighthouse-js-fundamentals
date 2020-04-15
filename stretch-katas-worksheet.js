// Kata 6 - Repeating Numbers

let repeatNumbers = function(data) {
  sol = [];
  for (let i = 0; i < data.length; i++) {
    let str = '';
    for (let j = 0; j < data[i][1]; j++) {
      str += data[i][0];
    }
    sol.push(str);
  }
  return sol;
};

// console.log(repeatNumbers([[1, 10]]));
// console.log(repeatNumbers([[1, 2], [2, 3]]));
// console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

// Kata 7 - Case Maker

let camelCase = function(input) {
  let solutionString = '';
  let upperCase = false;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === ' ') {
      upperCase = true;
    } else if (upperCase === true) {
      solutionString += input[i].toUpperCase();
      upperCase = false;
    } else {
      solutionString += input[i];
    }
  }
  return solutionString;
};

// console.log(camelCase("this is a string"));
// console.log(camelCase("loopy lighthouse"));
// console.log(camelCase("supercalifragalisticexpialidocious"));

// Kata 8 - Multiplication Table

const multiplicationTable = function(maxValue) {
  let sol = '';
  for (let i = 1; i <= maxValue; i++) {
    for (let j = 1; j <= maxValue; j++) {
      sol += (i * j);
      sol += ' ';
    }
    sol += "\n";
  }
  return sol;
};

// console.log(multiplicationTable(1));
// console.log(multiplicationTable(5));
// console.log(multiplicationTable(10));

// Kata 9 - Bouncy Castle

// Use the value below whenever you need the value of Pi
const PI = 3.14159 ;

const sphereVolume = function (radius) {
  return 4/3 * PI * (radius ** 3);
}

// console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  return PI * (radius ** 2) * (height / 3);
}

// console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  return (width * depth) * height;
}

// console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let sumOfVolumes = 0;
  for (let i = 0; i < solids.length; i++) {
    if (solids[i].type === 'cone') {
      sumOfVolumes += coneVolume(solids[i].radius, solids[i].height);
    } else if (solids[i].type === 'sphere') {
      sumOfVolumes += sphereVolume(solids[i].radius);
    } else {
      sumOfVolumes += prismVolume(solids[i].height, solids[i].width, solids[i].depth);
    }
  }
  return sumOfVolumes;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

// console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);

// Kata 10 - The Great Codeville Bake-Off
const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  for (let i = 0; i < recipes.length; i++) {
    let first = recipes[i].ingredients[0];
    let second = recipes[i].ingredients[1];
    if ((bakeryA.includes(first) && bakeryB.includes(second)) || (bakeryB.includes(first) && bakeryA.includes(second))) {
      return recipes[i].name;
    }
  }
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

// console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

// console.log(chooseRecipe(bakeryA, bakeryB, recipes));

// Kata 11 - Change Calculator

const calculateChange = function(total, cash) {
  const denominations = [
    ['twentyDollar', 2000],
    ['tenDollar', 1000],
    ['fiveDollar', 500],
    ['twoDollar', 200],
    ['oneDollar', 100],
    ['quarter', 25],
    ['dime', 10],
    ['nickel', 5],
    ['penny', 1]
  ];
  let currTotal = cash - total;
  let change = {};

  for (let i = 0; i < denominations.length; i++) {
    while (currTotal >= denominations[i][1]) {
      currTotal -= denominations[i][1];
      change[denominations[i][0]] ? change[denominations[i][0]] += 1 : change[denominations[i][0]] = 1;
    }
  }
  return change;
};

// console.log(calculateChange(1787, 2000));
// console.log(calculateChange(2623, 4000));
// console.log(calculateChange(501, 1000));

// Kata 12 - Oganizing Instructors

const organizeInstructors = function(instructors) {
  let solution = {};
  for (let instructor of instructors) {
    if (solution[instructor.course]) {
      solution[instructor.course].push(instructor.name);
    } else {
      solution[instructor.course] = [instructor.name];
    }
  }
  return solution;
};

// console.log(organizeInstructors([
//   {name: "Samuel", course: "iOS"},
//   {name: "Victoria", course: "Web"},
//   {name: "Karim", course: "Web"},
//   {name: "Donald", course: "Web"}
// ]));
// console.log(organizeInstructors([
//   {name: "Brendan", course: "Blockchain"},
//   {name: "David", course: "Web"},
//   {name: "Martha", course: "iOS"},
//   {name: "Carlos", course: "Web"}
// ]));

// Kata 13 - Case Make II


const helperCamel = function(input) {
  let upperCase = false;
  let solution = '';
  for (let i = 0; i < input.length; i++) {
    if (upperCase) {
      solution += input[i].toUpperCase();
      upperCase = false;  
    } else if (input[i] === ' ') {
      upperCase = true;
    } else {
      solution += input[i].toLowerCase();
    }
  } 
  return solution;
}

const helperPascal = function(input) {
  let upperCase = true;
  let solution = '';
  for (let i = 0; i < input.length; i++) {
    if (upperCase) {
      solution += input[i].toUpperCase();
      upperCase = false;  
    } else if (input[i] === ' ') {
      upperCase = true;
    } else {
      solution += input[i].toLowerCase();
    }
  } 
  return solution;
}

const helperSnake = function(input) {
  let solution = '';
  for (let i = 0; i < input.length; i++) {
   if (input[i] === ' ') {
      solution += "_";
    } else {
      solution += input[i];
    }
  } 
  return solution;
}

const helperKebab = function(input) {
  let solution = '';
  for (let i = 0; i < input.length; i++) {
   if (input[i] === ' ') {
      solution += "-";
    } else {
      solution += input[i];
    }
  } 
  return solution;
}

const helperTitle = function(input) {
  let upperCase = true;
  let solution = '';
  for (let i = 0; i < input.length; i++) {
    if (upperCase) {
      solution += input[i].toUpperCase();
      upperCase = false;  
    } else if (input[i] === ' ') {
      upperCase = true;
      solution += input[i];
    } else {
      solution += input[i].toLowerCase();
    }
  } 
  return solution;
}

const helperVowel = function(input) {
  let solution = '';
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < input.length; i++) {
    if (vowels.includes(input[i].toLowerCase())) {
      solution += input[i].toUpperCase();
    } else {
      solution += input[i].toLowerCase();
    }
  } 
  return solution;
}

const helperConsonant = function(input) {
  let solution = '';
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < input.length; i++) {
    if (!vowels.includes(input[i].toLowerCase())) {
      solution += input[i].toUpperCase();
    } else {
      solution += input[i].toLowerCase();
    }
  } 
  return solution;
}
const helperUpper = function(input) {
  let solution = '';
  for (let i = 0; i < input.length; i++) {
    solution += input[i].toUpperCase();
  } 
  return solution;
}

const helperLower = function(input) {
  let solution = '';
  for (let i = 0; i < input.length; i++) {
    solution += input[i].toLowerCase();
  } 
  return solution;
}

const makeCase = function(input, cases) {
  let currInput = input;
  if (cases === 'camel' || cases.includes('camel')) {currInput = helperCamel(currInput)};
  if (cases === 'pascal' || cases.includes('pascal')) {currInput = helperPascal(currInput)};
  if (cases === 'snake' || cases.includes('snake')) {currInput = helperSnake(currInput)};
  if (cases === 'kebab' || cases.includes('kebab')) {currInput = helperKebab(currInput)};
  if (cases === 'title' || cases.includes('title')) {currInput = helperTitle(currInput)};
  if (cases === 'vowel' || cases.includes('vowel')) {currInput = helperVowel(currInput)};
  if (cases === 'consonant' || cases.includes('consonant')) {currInput = helperConsonant(currInput)};
  if (cases === 'upper' || cases.includes('upper')) {currInput = helperUpper(currInput)};
  if (cases === 'lower' || cases.includes('lower')) {currInput = helperLower(currInput)};
  return currInput;
}

// console.log(makeCase("this is a string", "camel"));
// console.log(makeCase("this is a string", "pascal"));
// console.log(makeCase("this is a string", "snake"));
// console.log(makeCase("this is a string", "kebab"));
// console.log(makeCase("this is a string", "title"));
// console.log(makeCase("this is a string", "vowel"));
// console.log(makeCase("this is a string", "consonant"));
// console.log(makeCase("this is a string", ["upper", "snake"]));


// Kata 14 - JS Object From URL Encoded String

const urlDecode = function(text) {
  const textArray = text.split('&');
  let sol = {};
  for (let txt of textArray) {
    let key = '';
    let value = '';
    let space = false;
    for (let i = 0; i < txt.length; i++) {
      if (txt[i] === '=') {
        space = true;
      } else if (space) {
        value += txt[i];
      } else {
        key += txt[i];
      }
    }
    key = key.split('%20').join(' ');
    value = value.split('%20').join(' ');
    sol[key] = value;
  }
  return sol;
};

// console.log(urlDecode("duck=rubber"));
// console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
// console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
// console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

// Kata 15 - Square Code

const squareCode = function(message) {
  let text = message.split(' ').join('');
  let factor = Math.ceil(Math.sqrt(text.length));
  let square = [];
  let index = 0;
  while ((index + factor) < text.length) {
    let temp = text.slice(index, index + factor);
    square.push(temp);
    index += factor;
  }
  square.push(text.slice(index));
  let sol = '';
  for (let i = 0; i < square[0].length; i++){
    for (let j = 0; j < square.length; j++) {
      if (square[j][i]) { sol += square[j][i]}
    }
    sol += ' ';
  }
  return sol;
};

// console.log(squareCode("chill out"));
// console.log(squareCode("feed the dog"));
// console.log(squareCode("have a nice day"));
// console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));

// Kata 16 - Queen Threat Detector

// let whiteQueen = [0, 5];
// let blackQueen = [5, 0];
// let generatedBoard = generateBoard(whiteQueen, blackQueen);
// console.log(generatedBoard);
// console.log(queenThreat(generatedBoard));

const generateBoard = function(A, B) {
  let board = [];
  for (let i = 0; i < 8; i++) {
    let row = [];
    for (let j = 0; j < 8; j++) {
      row.push(0);
    }
    board.push(row);
  }
  board[A[0]][A[1]] = 1;
  board[B[0]][B[1]] = 1;
  return board;
}

const queenThreat = function(board) {
  let queen1 = [];
  let queen2 = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 1) {
        if (queen1.length === 0) {
          queen1 = [i, j];
        } else {
          queen2 = [i, j];
        }
      }
    }
  }
  if (queen1[1] === queen2[1]) {
    //horizontal threat
    return true;
  } else if (queen1[0] === queen2[0]) {
    //vertical threat
    return true;
  } else {
    let diff = queen2[0] - queen1[0];
    if (queen2[1] === queen1[1] + diff || queen2[1] === queen1[1] - diff) {
      // diagonal threat
      return true;
    } else {
      return false;
    }
  }
}

// let whiteQueen = [0, 5];
// let blackQueen = [5, 0];
// let generatedBoard = generateBoard(whiteQueen, blackQueen);
// console.log(generatedBoard);
// console.log(queenThreat(generatedBoard));

// let blueQueen = [0, 0];
// let redQueen = [5, 7];
// let generatedBoard2 = generateBoard(blueQueen, redQueen);
// console.log(generatedBoard2);
// console.log(queenThreat(generatedBoard2));


// Kata 17 - Taxicab Geometry
// Use driving angle

// const blocksAway = function(directions) {
//   let angle = 0;
//   let sol = {
//     east: 0,
//     north: 0
//   };
//   for (let i = 0; i <= directions.length / 2; i ++) {
//     console.log(angle);
    
//     if (angle === 0) {
//       console.log('inside 1');
//       if (directions[i] === 'left'){
//         sol['east'] -= directions[i+1];
//         angle = 270;
//       } else {
//         console.log('right');
//         sol['east'] += directions[i+1];
//         angle = 90;
//         console.log(angle);
//       }
//     } else if (angle === 90) {
//       if (directions[i] === 'left') {
//         sol['north'] += directions[i+1];
//         angle = 0;
//       } else {
//         sol['north'] -= directions[i+1];
//         angle = 180;
//       }
//     } else if (angle === 180) {
//       if (directions[i] === 'left') {
//         solution['east'] += directions[i+1];
//         angle = 90;
//       } else {
//         solution['east'] -= directions[i+1];
//         angle = 270;
//       }
//     } else if (angle === 270) {
//       if (directions[i] === 'left') {
//         sol['north'] -= directions[i+1];
//         angle = 180;
//       } else {
//         sol['north'] += directions[i+1];
//         angle = 0;
//       }
//     }
//     return sol;
//   } 
// };

const blocksAway = function(directions) {
  let orientation = 0;
  solution = {
    east: 0,
    north: 0
  };
  for (let i = 0; i < directions.length - 1; i+=2) {
    if (orientation === 0) {
      if (directions[i] === 'left') {
        solution.east -= directions[i+1];
        orientation = (orientation - 1) % 4;
      } else {
        solution.east += directions[i+1];
        orientation = (orientation + 1) % 4;
      }
    } else if (orientation === 1) {
      if (directions[i] === 'left') {
        solution.north += directions[i+1];
        orientation = (orientation - 1) % 4;
      } else {
        solution.north -= directions[i+1];
        orientation = (orientation + 1) % 4;
      }
    } else if (orientation === 2) {
      if (directions[i] === 'left') {
        solution.east += directions[i+1];
        orientation = (orientation - 1) % 4;
      } else {
        solution.east -= directions[i+1];
        orientation = (orientation + 1) % 4;
      }
    } else {
      if (directions[i] === 'left') {
        solution.north -= directions[i+1];
        orientation = (orientation - 1) % 4;
      } else {
        solution.north += directions[i+1];
        orientation = (orientation + 1) % 4;
      }
    }
  }
  solution.east = Math.abs(solution.east);
  solution.north = Math.abs(solution.north);
  return solution;
}

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));




