import { Button } from '@ui-kitten/components';
import React, { useState } from 'react'
import { Text, View } from 'react-native'
import RecipeCard from './Components/RecipeCard';
import { Recipe } from './Recipes.Interfaces';



const RecipesScreen = ({navigation}: {navigation: any}) => {
  const [recipes, setRecipes] = useState<Recipe[]>([
    {
      id: '0',
      name: 'Recipe 1',
      description: 'Sunt enim sint ea aute in duis in enim. Nostrud veniam minim est reprehenderit cillum duis. Qui sint deserunt nulla mollit sunt ut pariatur est quis. Dolor pariatur amet aute aliqua nulla est deserunt labore in Lorem aliqua sit consectetur irure. Velit aliqua officia nostrud tempor cupidatat cillum.',
      category: 'meet',
    },
    {
      id: '1',
      name: 'Recipe 2',
      description: `Officia sunt ullamco non cillum. Anim qui aliqua id ut aliqua id tempor id qui consectetur sit. Veniam aliquip occaecat proident nulla ex proident veniam quis ea esse. Excepteur ex aute ipsum consectetur proident do ut pariatur reprehenderit laboris deserunt. Tempor ut exercitation minim in aliqua voluptate laboris.

Mollit mollit et minim cillum ad in laboris consectetur deserunt. Consectetur nisi exercitation cupidatat irure voluptate deserunt. Consequat dolore minim eu ut.

Tempor enim quis sint laboris qui tempor nostrud ipsum aliquip fugiat consequat cillum. Nostrud excepteur nulla Lorem amet non sit culpa nulla nisi deserunt. Exercitation commodo nisi et minim. Ullamco dolor ea deserunt duis ea. Incididunt incididunt exercitation voluptate sit ut do. Lorem nulla velit sint ut proident ipsum pariatur qui pariatur cupidatat ipsum irure labore. Labore culpa velit esse commodo enim ullamco esse ut magna dolore aliquip excepteur.`,
      category: 'desert',
    },
  ]);

  function goToAddRecipe(){
    console.log('navigation', navigation);
  }

  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
      <Button onPress={goToAddRecipe}>Add Recipe</Button>
      <Text style={{color: '#000'}}>Recieps!</Text>
      {
        recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe}/>)
      }
    </View>
  )
}

export default RecipesScreen