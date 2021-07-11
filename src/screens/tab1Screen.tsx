import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import Icon from 'react-native-vector-icons/Ionicons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface Props extends StackScreenProps<any, any> { }

const tab1Screen = ({ navigation }: Props) => {

    const {top:paddingTop} = useSafeAreaInsets();

    useEffect(() => {
        console.log('tab 1 secreen');
    }, [])

    return (
        <View style={{paddingTop, ...styles.globalMargin}}>
            <Text style={styles.title}> tab1Screen </Text>
            <Icon name="apps-outline" size={40} color="gray" />
            <Icon name="arrow-forward-outline" size={40} color="gray" />
            <Icon name="bar-chart-outline" size={40} color="gray" />
            <Icon name="airplane-outline" size={40} color="gray" />
        </View >
    )

}

export default tab1Screen