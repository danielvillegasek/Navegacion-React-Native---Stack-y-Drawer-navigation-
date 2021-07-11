import { DrawerScreenProps } from '@react-navigation/drawer'
import React, { useContext, useEffect } from 'react'
import { Button } from 'react-native'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
import { AuthContext } from '../context/AuthContext'


interface Props extends DrawerScreenProps<any, any> { }

const SettingsScreen = ({ navigation }: Props) => {

    const insets = useSafeAreaInsets()
    const { authState } = useContext(AuthContext)

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
            <Text>{JSON.stringify(authState, null, 4)}</Text>
            {
                authState.favoriteIcon && (<Icon name={authState.favoriteIcon} size={150} />)
            }
        </View >
    )

}

export default SettingsScreen