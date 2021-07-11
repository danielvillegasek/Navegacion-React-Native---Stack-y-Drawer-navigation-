import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer'
import { StackNavigator } from './StackNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import { useWindowDimensions } from 'react-native';



const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {

    const {width} = useWindowDimensions()

    return (
        <Drawer.Navigator drawerType={ width >= 720 ? 'permanent': 'front'} >
            <Drawer.Screen name="StackNavigator" component={StackNavigator} />  
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />           
        </Drawer.Navigator>
    );
}