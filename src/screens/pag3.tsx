import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any> { }

const pag3 = ({ navigation }: Props) => {
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}> pag3 </Text>
            <Button title="ir a pag2" onPress={() => navigation.pop()} />
            <Button title="ir a pag1" onPress={() => navigation.popToTop()} />
        </View >
    )

}

export default pag3