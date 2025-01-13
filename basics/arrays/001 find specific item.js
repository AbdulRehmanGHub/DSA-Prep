// // find the specific item in the array
const groceryItemsList = ["soap", "vegetables", "fruits", "rice", "bread"];

const grocery = (allGroceryItems, specificGroceryItem) => {
  for (let i = 0; i <= groceryItemsList.length; i++) {
    if (allGroceryItems[i] === specificGroceryItem) {
      console.log(`${specificGroceryItem} found in the Grocery List`);
    }
  }
};

grocery(groceryItemsList, "soap");
