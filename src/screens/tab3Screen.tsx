import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any> { }

const tab3Screen = ({ navigation }: Props) => {
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}> tab3Screen </Text>
            
        </View >
    )

}

export default tab3Screen