import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView, DrawerScreenProps } from '@react-navigation/drawer'
import { BottomTabsNavigator } from './BottomTabsNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import { Image, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'



const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

    const { width } = useWindowDimensions()

    return (

        <Drawer.Navigator drawerType={width >= 720 ? 'permanent' : 'front'}
            drawerContent={
                (props) => <MenuInterno {...props} />
            }
        >
            <Drawer.Screen name="BottomTabsNavigator" component={BottomTabsNavigator} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        </Drawer.Navigator>

    );
}

const MenuInterno = ({ navigation }: DrawerContentComponentProps<DrawerContentOptions>) => {
    return (
        <DrawerContentScrollView>
            <View style={styles.avatarContainer}>
                <Image style={styles.avatar} source={{ uri: "https://www.homeandhelp.com/img/pages/201/e8e52af1eb77cc9b7832336e60112bfb.jpg" }} />
            </View>

            <View style={styles.menuContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('BottomTabsNavigator')}
                    style={{...styles.botonSimple, flexDirection: 'row'}}>
                    <Icon name="compass-outline" size={23} color="gray" />
                    <Text style={styles.textoBotonSimple}> Navegacion </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SettingsScreen')}
                    style={{...styles.botonSimple, flexDirection: 'row'}}>
                    <Icon name="cog-outline" size={23} color="gray" />
                    <Text style={styles.textoBotonSimple}> Ajustes </Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    )
}