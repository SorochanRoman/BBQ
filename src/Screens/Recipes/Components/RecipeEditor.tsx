import React, { useState } from 'react'
import { Input } from '@ui-kitten/components/ui/input/input.component'
import { View } from 'react-native'

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