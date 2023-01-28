// callback hell = bersarang
// synchronus
function makeACake(...rawIngredients) {
  const ingredients = collectIngredients(rawIngredients);
  dough = makeTheDough(ingredients);
  pouredDough = pourDough(dough);
  cake = bakeACake(pouredDough);
  console.log(cake);
}

// asynchronus
function makeACake2(...rawIngredients) {
  collectIngredients(rawIngredients)
    .then(makeTheDough)
    .then(pourDough)
    .then(bakeACake)
    .then(console.log);

}