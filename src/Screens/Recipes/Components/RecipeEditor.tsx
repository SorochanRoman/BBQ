import React, { useEffect, useState } from 'react'
import { Input } from '@ui-kitten/components/ui/input/input.component'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { Button, Text } from '@ui-kitten/components';
import { Recipe } from '../Recipes.Interfaces';
import { addRecipe } from '../../../Features/Recipes/recipesSlice';

const RecipeEditor = () => {
    const dispatch = useDispatch()

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    function onAddRecipe() {
        const recipe: Recipe = {id: new Date().toUTCString(), name, description, category: 'meet' };
        dispatch(addRecipe(recipe));
        setName('');
        setDescription('');
    }

    return (
        <View>
            <Input
                placeholder='Name'
                value={name}
                onChangeText={nextValue => setName(nextValue)}
            />
            <Input
                placeholder='Description'
                value={description}
                onChangeText={nextValue => setDescription(nextValue)}
            />

            <Button onPress={() => onAddRecipe()}>Add Recipe</Button>
        </View>
    )
}

export default RecipeEditor