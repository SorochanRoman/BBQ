import React, { useEffect, useState } from 'react'
import { Input } from '@ui-kitten/components/ui/input/input.component'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { Button, Text } from '@ui-kitten/components';
import { selectRecipes } from '../../../Features/Recipes/recipesSlice';

const RecipeEditor = () => {
    const [value, setValue] = useState('');

    return (
        <View>
            <Input
                placeholder='Place your Text'
                value={value}
                onChangeText={nextValue => setValue(nextValue)}
            />
        </View>
    )
}

export default RecipeEditor