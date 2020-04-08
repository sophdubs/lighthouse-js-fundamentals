const merge = function(a, b) {
  let pointerA = 0;
  let pointerB = 0;
  let sol = [];
  while (sol.length < a.length + b.length) {
    if (pointerA === a.length || a[pointerA] >= b[pointerB]) {
      sol.push(b[pointerB]);
      pointerB++;
    } else {
      sol.push(a[pointerA]);
      pointerA++;
    }
  }
  return sol;
}

console.log(merge([ 2,8 ], [ 1, 5, 9 ]), "=?", [ 1, 2, 5, 8, 9 ]);
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);