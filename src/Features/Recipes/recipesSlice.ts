import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Recipe } from '../../Screens/Recipes/Recipes.Interfaces';
import type { RootState } from '../../store';

// Define a type for the slice state
interface RecipesState {
  recipes: Recipe[]
}

// Define the initial state using that type
const initialState: RecipesState = {
    recipes: [],
}

export const counterSlice = createSlice({
  name: 'recipes',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    loaddedRecipesList: (state, action: PayloadAction<Recipe[]>) => {
      state.recipes = action.payload;
    },
  },
})

export const { loaddedRecipesList } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectRecipes = (state: RootState) => state.counter.recipes

export default counterSlice.reducer