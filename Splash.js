import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {ImageBackground, StatusBar} from 'react-native';

const Splash = props => {
  useEffect(() => {
    setTimeout(() => {
      getUserData();
    }, 3000);
  }, []);

  const getUserData = async () => {
    userData = await AsyncStorage.getItem('userData'); 
    console.log(userData)
    props.navigation.reset({
      index: 0,
      routes: [{name: userData == '' || userData == null ? 'login' : 'home'}],
    });
    
  };
  return (
    <ImageBackground style={{flex: 1}} source={require('./assets/splash.jpg')}>
      <StatusBar backgroundColor={'transparent'} translucent />
    </ImageBackground>
  );
};

export default Splash;
