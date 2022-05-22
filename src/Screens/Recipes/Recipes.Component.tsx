import { useLinkTo, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Layout, Text, ViewPager } from '@ui-kitten/components';
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import RecipeCard from './Components/RecipeCard';
import RecipeEditor from './Components/RecipeEditor';
import RecipeList from './Components/RecipeList';
import { Recipe } from './Recipes.Interfaces';

const Stack = createNativeStackNavigator();


const RecipesScreen = () => {
  const linkTo = useLinkTo();

  function goToAddRecipe(){
    linkTo('/Editor');
  }

  function goToRecipeList(){
    linkTo('/List');
  }

  return (
      <>
      <Button onPress={goToAddRecipe}>Add Recipe</Button>
      <Button onPress={goToRecipeList}>Go To List</Button>
      <Stack.Navigator>
        <Stack.Screen name="List" component={RecipeList} />
        <Stack.Screen
          name="Editor"
          component={RecipeEditor}
        />
      </Stack.Navigator>
    </>
  )
}

export default RecipesScreen