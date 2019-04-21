/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity, Dimensions} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import bgImage from './resources/images/background.png';
import logo from './resources/images/logo.png';
import Icon from 'react-native-vector-icons/Ionicons';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const { width: WIDTH } = Dimensions.get('window');

type AppProps = {name: string};
type AppState = {realm: any};

export default class App extends Component<AppProps, AppState> {

  componentDidMount() {
    SplashScreen.hide()
  }
  
  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View  style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
        </View>

        <View style={styles.InputContainer}>
          <Icon name={'ios-person'} size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.InputIcon} />
          <TextInput style={styles.input} placeholder={'Usuario'} placeholderTextColor={'rgba(255, 255, 255, 0.7)'} underLineColorAndroid='transparent' />
        </View>

        <View style={styles.InputContainer}>
          <Icon name={'ios-lock'} size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.InputIcon} />
          <TextInput style={styles.input} placeholder={'Contraseña'} placeholderTextColor={'rgba(255, 255, 255, 0.7)'} underLineColorAndroid='transparent' secureTextEntry={true}/>
          <TouchableOpacity style={styles.EyeIcon} >
            <Icon name={'ios-eye'} size={28} color={'rgba(255, 255, 255, 0.7)'} />
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={styles.btnLogin} >
          <Text style={styles.text} >Ingresar</Text>
        </TouchableOpacity>

      </ImageBackground>
      
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25,
  },
  InputContainer: {
    marginTop: 10,
  },
  InputIcon: {
    position: 'absolute',
    top: 8,
    left: 37,
  },
  EyeIcon: {
    position: 'absolute',
    top: 8,
    right: 37,
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#00AAFF',
    justifyContent: 'center',
    marginTop: 20,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    textAlign: 'center',

  }
});
