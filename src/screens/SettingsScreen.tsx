import { DrawerScreenProps } from '@react-navigation/drawer'
import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import { Button } from 'react-native'
import { Text, View } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/appTheme'

interface Props extends DrawerScreenProps<any, any> { }

const SettingsScreen = ({ navigation }: Props) => {

    const insets = useSafeAreaInsets();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Button
                    title="menu"
                    onPress={() => navigation.toggleDrawer()}
                />
            )
        })
    }, [])

    return (

        <View style={{ marginTop: insets.top }}>
            <Text>SettingsScreen</Text>
        </View >
    )

}

export default SettingsScreen