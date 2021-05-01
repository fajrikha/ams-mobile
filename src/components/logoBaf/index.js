import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import styles from './styles'

const LogoBaf = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.text}>Powered by </Text>
            <Image source={require('../../../assets/image/logo-baf.png')} style={styles.logo}/>
        </View>
    )
}

export default LogoBaf


