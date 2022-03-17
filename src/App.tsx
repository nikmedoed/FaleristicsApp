import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Epochs from "./screens/Epochs"
import EpochTypes from "./screens/EpochTypes"
import ItemDetails from "./screens/ItemDetails"
import SearchNames from "./screens/SearchNames"
import Settings from "./screens/Settings"
import TypeItems from "./screens/TypeItems"

import header from './components/Header';
import headerMain from './components/HeaderMain';
import strings from './config/strings'

import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();


const App = () => {
  StatusBar.setBarStyle('dark-content')
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ header: header }
        }>
        <Stack.Screen
          name="Epochs"
          component={Epochs}
          options={{
            header: headerMain,
            title: strings.titleEpochs
          }} />
        <Stack.Screen
          name="EpochTypes"
          component={EpochTypes} />
        <Stack.Screen
          name="ItemDetails"
          component={ItemDetails}
        />
        <Stack.Screen
          name="SearchNames"
          component={SearchNames}
          options={{
            title: strings.titleSearchNames
          }} />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{
            title: strings.titleSettings
          }} />
        <Stack.Screen
          name="TypeItems"
          component={TypeItems}
          options={{ title: 'Разновидности' }} />
      </Stack.Navigator>
    </NavigationContainer >
  );
};

export default App;