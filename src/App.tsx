import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Epochs from "./screens/Epochs"
import EpochTypes from "./screens/EpochTypes"
import ItemDetails from "./screens/ItemDetails"
import Search from "./screens/Search"
import Settings from "./screens/Settings"
import TypeItems from "./screens/TypeItems"

import header from './components/Header';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Epochs" component={Epochs} />
        <Stack.Screen
          name="EpochTypes"
          component={EpochTypes} options={{ title: 'типы' }} />
        <Stack.Screen name="ItemDetails" component={ItemDetails} options={{ title: 'детали' }} />
        <Stack.Screen name="Search" component={Search} options={{ title: 'поиск' }} />
        <Stack.Screen name="Settings" component={Settings}
          options={{
            title: 'настройки',
            header: header

          }} />
        <Stack.Screen name="TypeItems" component={TypeItems} options={{ title: 'Разновидности' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;