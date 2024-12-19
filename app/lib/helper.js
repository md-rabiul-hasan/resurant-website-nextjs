import { categories, recipes } from "../data/data";
export async function getHeroRecipie() {
    // Assuming the recipes array is already defined somewhere
    const randomIndex = Math.floor(Math.random() * 10) + 1;  // Generates a random number between 1 and 10
    const data = recipes[randomIndex];  // Access the recipe at the random index
    return data;
}

export async function getSuperDelicious() {
  
    // Sort the recipes by rating in descending order
    const sortedRecipes = recipes.sort((a, b) => b.rating.rating_count - a.rating.rating_count);
  
    // Get the top 3 recipes
    const top3Recipes = sortedRecipes.slice(0, 3);
  
    return top3Recipes;
}


  
export async function getPopularCategories() {
    // Step 1: Count the number of recipes per category
    const categoryCounts = {};
  
    // Iterate over the recipes and count occurrences of each category
    recipes.forEach(recipe => {
      const categoryId = recipe.category_id;
      categoryCounts[categoryId] = (categoryCounts[categoryId] || 0) + 1;
    });
  
    // Step 2: Create an array of categories with their recipe count
    const categoryWithCounts = categories.map(category => {
      return {
        ...category,
        recipeCount: categoryCounts[category.id] || 0,
      };
    });
  
    // Step 3: Sort the categories by recipe count in descending order
    const sortedCategories = categoryWithCounts.sort((a, b) => b.recipeCount - a.recipeCount);
  
    // Step 4: Return the top 6 categories
    return sortedCategories.slice(0, 6);
}

export async function getHandPickedRecipes(){
    const handPickedRecipes = recipes.slice(0, 2);  
    return handPickedRecipes;
}


export async function getLatesRecipes(){
    // Sort the recipes by rating in descending order
    const sortedRecipes = recipes.sort((a, b) => b.published_date - a.published_date);
  
    // Get the top 3 recipes
    const top4Recipes = sortedRecipes.slice(0, 4);
  
    return top4Recipes;
}

export function createSlug(title) {
    // Convert to lowercase
    let slug = title.toLowerCase();

    // Replace spaces with hyphens
    slug = slug.replace(/\s+/g, '-');

    // Remove any non-alphanumeric characters except for hyphens
    slug = slug.replace(/[^a-z0-9\-]/g, '');

    // Remove any leading or trailing hyphens
    slug = slug.replace(/^-+|-+$/g, '');

    return slug;
}

export async function getAllCategory(){
  return categories;
}

export async function getCategoryInfo(id){
  const category = categories.find(c => c.id === id);
  return category;
}

export async function getCategoryRecipes(id){
  const recipies = recipes.filter(recipes => recipes.category_id === id);
  return recipies;
}

export async function getRecipieDetails(slug){
  const recipie = recipes.find(recipe => createSlug(recipe.title) === slug);
  return recipie;
}

export async function getCategoryPopularRecipies(category_id){
  const recipies = recipes.filter(recipes => recipes.category_id === category_id);
   // Sort the recipes by rating in descending order
   const sortedRecipes = recipies.sort((a, b) => b.rating.rating_count - a.rating.rating_coun);
  
   // Get the top 3 recipes
   const top4Recipes = sortedRecipes.slice(0, 4);
 
   return top4Recipes;
}