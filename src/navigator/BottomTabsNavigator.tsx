import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import tab1Screen from '../screens/tab1Screen';
import { StackNavigator } from './StackNavigator';
import { TopTapNavigator } from './TopTapNavigator';
import Icon from 'react-native-vector-icons/Ionicons'


const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white',

            }}
            tabBarOptions={{
                activeTintColor: 'red',
                style: {
                    borderTopColor: 'blue',
                    borderTopWidth: 0,
                    elevation: 0,
                },
                labelStyle: {
                    fontSize: 15
                }
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, focused, size }) => {
                    let iconName = "T"
                    switch (route.name) {
                        case 'tab1Screen':
                            iconName = 'briefcase-outline'
                            break;
                        case 'tab2Screen':
                            iconName = 'car-outline'
                            break;
                        case 'StackNavigator':
                            iconName = 'chatbox-ellipses-outline'
                            break;
                    }
                    return <Icon name={iconName} size={23} color={color} />
                }
            })}
        >
            {/*<Tab.Screen name="tab1Screen" options={{ title: 'Tab', tabBarIcon: () => (<Text>Icono</Text>) }} component={tab1Screen} />*/}
            <Tab.Screen name="tab1Screen" options={{ title: 'Tab' }} component={tab1Screen} />
            <Tab.Screen name="TopTapNavigator" options={{ title: 'Tab' }} component={TopTapNavigator} />
            <Tab.Screen name="StackNavigator" options={{ title: 'Tab' }} component={StackNavigator} />
        </Tab.Navigator>
    );
}