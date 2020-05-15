// Finds a recipe that has ingredients from both bakerys and returns the final recipe that will be used
// Param:
// bakeryA - Array of string for all the ingredients
// bakeryB - Array of string for all the ingredients
// recipies - Array of objects with properties for name and ingredients which is an array of string
const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  let ingredientAFound = false;
  let ingredientBFound = false;
  let finalRecipe = "nope";
  // Loop through the array of objects
  recipes.forEach(recipe => {
    // Loops through the ingredients array
    recipe.ingredients.forEach(ingredient => {
      // Loop to find matching ingredients in bakeryA
      for(let i = 0; i < bakeryA.length && !ingredientAFound; i++) {
        if(ingredient === bakeryA[i]) {
          ingredientAFound = true;
        }
      }
      for(let i = 0; i < bakeryB.length && !ingredientBFound; i++) {
        if(ingredient === bakeryB[i]) {
          ingredientBFound = true;
        }
      }
      // If an ingredient is found in both bakeryA and bakeryB will we then assign the recipe to finalRecipe
      if(ingredientAFound && ingredientBFound) {
        finalRecipe = recipe.name;
      }
    });
    // Reset boolean for new recipe
    ingredientAFound = false;
    ingredientBFound = false;
  });
  return finalRecipe;
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

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

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

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
