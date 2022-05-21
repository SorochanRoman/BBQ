import { Card, Text } from '@ui-kitten/components'
import React from 'react'
import { Recipe } from '../Recipes.Interfaces'

const RecipeCard = ({recipe} : {recipe: Recipe}) => {
  return (
    <Card>
        <Text>
            {recipe.name}
        </Text>
        <Text>
            {recipe.category}
        </Text>
        <Text>
            {recipe.description}
        </Text>
   </Card>
  )
}

export default RecipeCard