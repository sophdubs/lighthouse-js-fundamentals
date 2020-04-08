const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

console.log("while loop that prints out the contents of ingredients:");
let i = 0;
while( i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

console.log("for loop that prints out the contents of ingredients:");
for (ingredient of ingredients) {
  console.log(ingredient);
}

console.log("any loop that prints out contents of ingredients backwards:");
for (let i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}