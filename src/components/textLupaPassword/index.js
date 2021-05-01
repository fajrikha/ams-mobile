import { View } from 'native-base'
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const LupaPassword = () => {
    return (
        <View style={{paddingHorizontal: 47, alignItems: 'flex-end', marginTop: 10}}>

        <TouchableOpacity>
            <Text style={{color: '#1B1D28', fontSize: 12, fontFamily: 'FSAlbert', fontWeight:'400'}}>Lupa Password ?</Text>
        </TouchableOpacity>
        </View>
    )
}

export default LupaPassword
