import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

const pag2 = () => {
    const navigator = useNavigation()

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}> pag2 </Text>
            <Button title="A PAG3" onPress={() => navigator.navigate('pag3')} />
        </View >
    )

}

export default pag2