import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from './src/Screens/Login/Login.Component';
import RecipesScreen from './src/Screens/Recipes/Recipes.Component';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  function onReady(){
    console.log('onready')
  }

  return (
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
    </SafeAreaView>);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
  }
});

export default App;
