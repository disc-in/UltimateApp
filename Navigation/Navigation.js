// Navigation/Navigation.js

// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator} from 'react-navigation-stack';
import React from 'react'
import Search from '../Components/Search'
import Favorites from '../Components/Favorites'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Favorites" component={Favorites} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

/*
const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      title: 'Rechercher'
    }
  },
  FilmDetail: { // Encore une fois j'ai mis le même nom que celui du component mais libre à vous de choisir un nom différent
    screen: FilmDetail
  }
})

export default createAppContainer(SearchStackNavigator)
*/