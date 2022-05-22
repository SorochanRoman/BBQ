import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from './src/Screens/Login/Login.Component';
import RecipesScreen from './src/Screens/Recipes/Recipes.Component';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ApplicationProvider, BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecipeEditor from './src/Screens/Recipes/Components/RecipeEditor';
// import { createStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  useEffect(() => {
    console.log('selectedIndex', selectedIndex);
  }, [selectedIndex]);

  function onReady(){
    console.log('onready')
  }

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer onReady={onReady}>
          <Tab.Navigator 
            initialRouteName="Recipes"
            screenOptions={{
              tabBarActiveTintColor: '#e91e63',
            }}
            >
              
            <Tab.Screen name="Login" component={LoginScreen} />
            <Tab.Screen name="Recipes" component={RecipesScreen} />
          </Tab.Navigator>
        </NavigationContainer>
        
      </SafeAreaView>
    </ApplicationProvider>);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: Colors.lighter,
    padding: 20,
    margin: 10,
  }
});

export default App;
