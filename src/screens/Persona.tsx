import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { RootStackParams } from '../navigator/StackNavigator'
import { styles } from '../theme/appTheme'
interface User{
    id:number
    name:string
}

interface Props extends StackScreenProps<RootStackParams, 'persona'> {}

const pag3 = ({ route, navigation }: Props) => {
    const params  = route.params;

    useEffect(() => {       
        navigation.setOptions({
            title: params.name
        })
    }, [])
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}> {params.name} </Text>
            
      
        </View >
    )

}

export default pag3