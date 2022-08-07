import React from "react";
import {render} from "react-dom";
import LoginScreen from "./shared/components/Screens/LoginScreen";
import HomeScreen from "./shared/components/Screens/HomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import "/index.css"


const App = () => {
    const Stack = createNativeStackNavigator();

    return (
    
        <PaperProvider>
           <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
        );
      }
      

render (<App /> , document.getElementById("root"));
