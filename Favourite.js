import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Header from './components/Header';
const Favourite = () => {
  

  return (
    <Header
      title={'Favourite'}
      style={{
        color: '#FFF',
        backgroundColor: '#e9967a',
        textAlign: 'center',
        padding: 20,
        fontSize: 30,
        marginLeft:32
      }}
    />
  );
};

export default Favourite;
