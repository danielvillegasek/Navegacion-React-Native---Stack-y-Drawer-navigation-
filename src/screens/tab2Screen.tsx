import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any> { }

const tab2Screen = ({ navigation }: Props) => {
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}> tab2Screen </Text>
            
        </View >
    )

}

export default tab2Screen