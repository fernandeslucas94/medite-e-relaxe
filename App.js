import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./src/screens/home_screen";
import AboutUs from "./src/screens/about_us";
import Audios from "./src/screens/audios";
import NatureSound from './src/screens/nature_sounds';
import Frequencias  from "./src/screens/frequencias";
import NaturePlayer from './src/players/nature_player'
import FrequenciesPlayer from './src/players/frequencias_player'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
        />

        <Stack.Screen 
        name="Audios" 
        component={Audios}
        options={{
          headerShown: false,
        }}
        />

        <Stack.Screen 
        name="About Us" 
        component={AboutUs}
        options={{
          headerShown: false,
        }}
        />

        <Stack.Screen 
        name="Nature Sound" 
        component={NatureSound}
        options={{
          headerShown: false,
        }}
        />

        <Stack.Screen 
        name="Frequencias" 
        component={Frequencias}
        options={{
          headerShown: false,
        }}
        />

        <Stack.Screen 
        name="Meditacoes" 
        component={Frequencias}
        options={{
          headerShown: false,
        }}
        />

        {/* The Stacks below, refers to the player screens */}

        <Stack.Screen 
        name="Nature Player" 
        component={NaturePlayer}
        options={{
          headerShown: false,
        }}
        />

        <Stack.Screen 
        name="Frequencies Player" 
        component={FrequenciesPlayer}
        options={{
          headerShown: false,
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;