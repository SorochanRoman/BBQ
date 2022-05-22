import React, { useEffect, useState } from 'react'
import { Input } from '@ui-kitten/components/ui/input/input.component'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { Button, IndexPath, Radio, RadioGroup, Select, SelectItem, Text } from '@ui-kitten/components';
import { CategoryRecipe, DifficultRecipe, Recipe } from '../Recipes.Interfaces';
import { addRecipe } from '../../../Features/Recipes/recipesSlice';
import { categoryRecipe, difficultRecipe } from '../Recipes.consts';
import { useId } from '../../../app/Hooks/useId';

const RecipeEditor = () => {
    const dispatch = useDispatch()

    const [title, setTitle] = useState<string>('Title');
    const [description, setDescription] = useState<string>('Descr');

    const [selectedDifficultIndex, setSelectedDifficultIndex] = useState(0);
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

    function onAddRecipe() {
        const recipe: Recipe = {id: useId(), title, description, category: categoryRecipe[selectedCategoryIndex], difficult: difficultRecipe[selectedDifficultIndex] };
        dispatch(addRecipe(recipe));

        resetForm();
    }

    function resetForm() {
        setTitle('');
        setDescription('');
    }

    return (
        <View>
            <Input
                placeholder='Title'
                value={title}
                onChangeText={nextValue => setTitle(nextValue)}
            />
            <Input
                placeholder='Description'
                value={description}
                onChangeText={nextValue => setDescription(nextValue)}
            />

            <Text>Difficult</Text>
            <RadioGroup
                selectedIndex={selectedDifficultIndex}
                onChange={index => setSelectedDifficultIndex(index)}>
                {difficultRecipe.map((value) => <Radio>{value}</Radio>)}
            </RadioGroup>

            <Text>Catogory</Text>
            <RadioGroup
                selectedIndex={selectedCategoryIndex}
                onChange={index => setSelectedCategoryIndex(index)}>
                {categoryRecipe.map((value) => <Radio>{value}</Radio>)}
            </RadioGroup>

            <Button onPress={() => onAddRecipe()}>Add Recipe</Button>
        </View>
    )
}

export default RecipeEditor