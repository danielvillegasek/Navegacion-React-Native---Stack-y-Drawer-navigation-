import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import Icon from 'react-native-vector-icons/Ionicons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { TouchableIcon } from '../components/TouchableIcon'
import { AuthContext } from '../context/AuthContext'

interface Props extends StackScreenProps<any, any> { }

const tab1Screen = ({ navigation }: Props) => {

    const {top:paddingTop} = useSafeAreaInsets();

    useEffect(() => {
        console.log('tab 1 secreen');
    }, [])

    return (
        <View style={{paddingTop, ...styles.globalMargin}}>
            <Text style={styles.title}> tab1Screen </Text>
            <TouchableIcon nameIcon="arrow-forward-outline" />
            <TouchableIcon nameIcon="bar-chart-outline" />
            <TouchableIcon nameIcon="airplane-outline" />            
        </View >
    )

}

export default tab1Screen