import React from 'react'
import { Image } from 'react-native'
import styles from './styles'

const ImageLogin = () => {
    
        return (
           
                <Image source={require('../../../assets/image/image-login.png')}
                resizeMode="stretch"
                style={styles.image}
                />
            
            
        )
}

export default ImageLogin
