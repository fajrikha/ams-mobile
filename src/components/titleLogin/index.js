import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

const Title = () => {
    return (
        <View style={styles.container}>  
            <Text style={styles.text}>Welcome to</Text>
            <Text style={styles.text1}>XTRA</Text>
            <Text style={styles.text2}>V1.0.0</Text>
        </View>
    )
}
export default Title
