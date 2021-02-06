function nameMenuItem(foodName) {
  if (foodName === foodName) {
    return `Delicious ${foodName}`;
  }
}


function createMenuItem(foodName, foodPrice, foodType) {
  nameMenuItem(foodName);
  var menuItem1 = {
    name: foodName,
    price: foodPrice,
    type: foodType,
  }
  return menuItem1;
}


function addIngredients(ingr, ingredients) {
  if (ingredients.includes(ingr)) {
    ;
  } else {
  ingredients = ingredients.push(ingr);
  }
}


function formatPrice(initialPrice) {
  var priceString = "$" + String(initialPrice)
  return priceString;
}

function decreasePrice(price) {
  return price * .90;
}


function createRecipe(title, ingredients, menuItemType) {
  var recipe = {
  title: title,
  ingredients: ingredients,
  type: menuItemType,
  }

  return recipe;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
