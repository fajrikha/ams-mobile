import { Button, Container, Content } from 'native-base';
import React, { Component } from 'react';
import { Image, StatusBar, Text, View } from 'react-native';
import ImageLogin from '../../components/imagelogin';
import Title from '../../components/title';
import Email from '../../components/textinput'
import Password from '../../components/textinputpassword'
import LupaPassword from '../../components/textLupaPassword'
import ButtonLogin from '../../components/buttonLogin'
import LogoBaf from '../../components/logoBaf'
import styles from './styles';

class LoginScreen extends Component {
  render() {
    return (
        <Container>        
            <View style={styles.wrapperImage}>
                <StatusBar translucent backgroundColor="transparent" barStyle="dark-content"/>
                <ImageLogin />
            </View>
            <View style={styles.secondWrapper}>
                <Title />
                <Email />
                <Password />
                <LupaPassword />
                <ButtonLogin />
                <LogoBaf />
            </View>
        </Container>
    );
  }
}

export default LoginScreen