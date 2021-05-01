import { Button } from 'native-base'
import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './styles'

const ButtonLogin = () => {
    return (
        <View style={styles.wrapper}>
            <Button style={styles.button}>
                <Text style={styles.textButton}>Masuk</Text>
            </Button>
            <View style={styles.wrapperText}>
                <Text style={styles.textRegist}>Belum Ada Akun XTRA ? </Text>
                <TouchableOpacity>
                    <Text style={styles.textRegist}>Daftar Sekarang</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

export default ButtonLogin
