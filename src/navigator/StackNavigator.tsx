import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import pag1 from '../screens/pag1';
import pag2 from '../screens/pag2';
import pag3 from '../screens/pag3';
import Persona from '../screens/Persona';

interface User {
    id: number, name: string
}

export type RootStackParams = {
    pag1: undefined,
    pag2: undefined,
    pag3: undefined,
    persona: User,
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            //initialRouteName="pag2"
            screenOptions={{
                headerStyle: {
                    elevation: 0,
                    shadowColor: 'transparent'
                },
                cardStyle: {
                    backgroundColor: 'white'

                }
            }}
        >
            <Stack.Screen name="pag1" options={{ title: "Pagina 1" }} component={pag1} />
            <Stack.Screen name="pag2" options={{ title: "Pagina 2" }} component={pag2} />
            <Stack.Screen name="pag3" options={{ title: "Pagina 3" }} component={pag3} />
            <Stack.Screen name="persona" options={{ title: "Persona" }} component={Persona} />
        </Stack.Navigator>
    );
}