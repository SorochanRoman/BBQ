/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LoginScreen from './src/Screens/Login/Login.Component';
import RecipesScreen from './src/Screens/Recipes/Recipes.Component';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    borderColor: !isDarkMode ? Colors.darker : Colors.lighter,
    borderWidth: 2
  };

  function onReady(){
    console.log('onready')
  }

  // return (
  //   <SafeAreaView style={backgroundStyle}>
  //     <NavigationContainer onReady={onReady}>
  //         <Tab.Navigator 
  //           initialRouteName="Home"
  //           screenOptions={{
  //             tabBarActiveTintColor: '#e91e63',
  //           }}
  //           >
  //           <Tab.Screen name="Home" component={LoginScreen} />
  //           <Tab.Screen name="Settings" component={RecipesScreen} />
  //         </Tab.Navigator>
  //     </NavigationContainer>
  //   </SafeAreaView>
  // );

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
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
  },
  top: {
    flex: 0.3,
    backgroundColor: "grey",
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  middle: {
    flex: 0.3,
    backgroundColor: "beige",
    borderWidth: 5,
  },
  bottom: {
    flex: 0.3,
    backgroundColor: "pink",
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

export default App;
