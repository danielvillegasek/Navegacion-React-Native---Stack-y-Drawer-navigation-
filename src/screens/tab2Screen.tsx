import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any> { }

const tab2Screen = ({ navigation }: Props) => {
    const { signIn, authState: { isLoggedIn } } = useContext(AuthContext)
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}> tab2Screen </Text>
            {!isLoggedIn && <Button title="signIn" onPress={signIn} />}

        </View >
    )

}

export default tab2Screen