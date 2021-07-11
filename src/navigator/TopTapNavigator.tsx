import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StackNavigator } from './StackNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import { Text, useWindowDimensions } from 'react-native';
import tab2Screen from '../screens/tab2Screen';
import tab3Screen from '../screens/tab3Screen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons'



const Tab = createMaterialTopTabNavigator();

export const TopTapNavigator = () => {
    const { top: paddingTop } = useSafeAreaInsets(); // obtiene el height del area de notch segun dispositivo

    return (
        <Tab.Navigator
            style={{ paddingTop }}
            sceneContainerStyle={{
                backgroundColor: 'white' // color del contenedor del screen
            }}
            tabBarOptions={{
                pressColor: 'red', // color de efecto en material a presionar      
                showIcon: true,
                showLabel: false,
                indicatorStyle: {
                    backgroundColor: 'red'
                },
                style: {
                    borderTopColor: 'blue',
                    borderWidth: 0,
                    elevation: 0,
                },
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({color}) => {
                    let iconName = "T"
                    switch (route.name) {
                        case 'tab3Screen':
                            iconName = 'bandage-outline'
                            break;
                        case 'tab2Screen':
                            iconName = 'analytics-outline'
                            break;
                    }
                    return <Icon name={iconName} size={23} color={color} />
                }
            })}
        >
            <Tab.Screen name="tab2Screen" component={tab2Screen} />
            <Tab.Screen name="tab3Screen" component={tab3Screen} />
        </Tab.Navigator>
    );
}