import { DrawerScreenProps } from '@react-navigation/drawer'
import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import { Button } from 'react-native'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import Icon from 'react-native-vector-icons/Ionicons'

interface Props extends DrawerScreenProps<any, any> {
    // id: number
    // nombre:string
}

const pag1 = ({ navigation }: Props) => {
    useEffect(() => {        
        navigation.setOptions({
            headerLeft: () => (
               <TouchableOpacity style={{
                   width:50,
                   height:50,
                   padding:15,
                 
               }}>
                  <Icon onPress={() => navigation.toggleDrawer()} name="apps-outline" size={20}  /> 
               </TouchableOpacity>
                
            )
        })
    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}> pag1 </Text>

            <Button
                title="ir a pag2"
                onPress={() => navigation.navigate('pag2')}
            />

    

            <View style={{flexDirection:"row"}}>
                <TouchableOpacity  style={styles.botonGrande} onPress={() => navigation.navigate('persona', { id: 1, name: 'Pedro' })}>
                    <Text style={styles.botonGrandeTexto}>
                        Jose
                    </Text>
                </TouchableOpacity>
            
                <TouchableOpacity  style={styles.botonGrande} onPress={() => navigation.navigate('persona', { id: 2, name: 'Maria' })}>
                    <Text style={styles.botonGrandeTexto}>
                        Maria
                    </Text>
                </TouchableOpacity>
            </View>

           
        </View >
    )

}

export default pag1