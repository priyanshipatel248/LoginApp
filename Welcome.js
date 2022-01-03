import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  ActivityIndicator,
  Keyboard,
  Image,
  TouchableOpacity,
  TextInput,
  Text,
  ToastAndroid,
  ScrollView,
  FlatList,
  Linking,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './components/Header';
import Icon from 'react-native-vector-icons/dist/AntDesign';

const Welcome = props => {
  let DATA = [
    {id: 1, name: 'MahendraSingh', sname: 'Dhoni', isFave: false},
    {id: 2, name: 'Virat', sname: 'Kohli', isFave: false},
    {id: 3, name: 'Bumarah', sname: 'Jasprit', isFave: false},
    {id: 4, name: 'Shikhar', sname: 'Dhwan', isFave: false},
    {id: 5, name: 'Shami', sname: 'Mohhmad', isFave: false},
    {id: 6, name: 'jadeja', sname: 'Ravindra', isFave: false},
    {id: 7, name: 'Raina', sname: 'Suresh', isFave: false},
    {id: 8, name: 'Yuvi', sname: 'Singh', isFave: false},
    {id: 9, name: 'Hardik', sname: 'Pandya', isFave: false},
    {id: 10, name: 'Dipak', sname: 'Chahar', isFave: false},
    {id: 11, name: 'Kunal', sname: 'Pandya', isFave: false},
    {id: 12, name: 'Ishan', sname: 'Kishan', isFave: false},
    {id: 13, name: 'Puajra', sname: 'Cheteshwar', isFave: false},
    {id: 14, name: 'Ashwin', sname: 'Ravincharan', isFave: false},
    {id: 15, name: 'Varun', sname: 'Chakroborty', isFave: false},
    {id: 16, name: 'KL', sname: 'Rahul', isFave: false},
    {id: 17, name: 'Bhuvi', sname: 'Kumar', isFave: false},
    {id: 18, name: 'buttler', sname: 'Josh', isFave: false},
    {id: 19, name: 'taylor', sname: 'Rose', isFave: false},
    {id: 20, name: 'sam', sname: 'Curran', isFave: false},
  ];

  const onBtnFav = () => {
    Linking.openSettings();
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header
        title={'Home'}
        style={{
          color: '#FFF',
          backgroundColor: '#e9967a',
          textAlign: 'center',
          padding: 20,
          fontSize: 30,
          marginLeft: 32,
        }}
        isLogOut
        navigation={props.navigation}
      />

      <FlatList
        style={{flex: 1}}
        data={DATA}
        renderItem={({item, index}) => {
          return (
            <View>
              <TouchableOpacity
                style={{
                  marginVertical: 10,
                  marginTop: 5,
                  borderRadius: 10,
                  height: 50,
                  borderWidth: 1,
                  borderColor: '#ffe4b5',
                  backgroundColor: '#ffe4b5',
                  marginHorizontal: 10,
                  flex: 1,
                  elevation: 1,
                }}>
                <View style={{flexDirection: 'row', flex: 1}}>
                  <Image
                    source={require('./assets/sahar.png')}
                    style={{height: 50, width: 50, borderRadius: 25}}
                  />
                  <View
                    style={{
                      flexDirection: 'column',
                      flex: 1,
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        color: '#000000',
                        paddingTop: 5,
                        paddingLeft: 5,
                      }}>
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        color: '#000000',

                        paddingLeft: 5,
                      }}>
                      {item.sname}
                    </Text>
                  </View>

                  <TouchableOpacity
                    onPress={onBtnFav}
                    style={{paddingTop: 10, paddingRight: 10}}>
                    <Icon
                      name="heart"
                      color={item.isFave ? 'pink' : '#FFF'}
                      size={26}
                    />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};
export default Welcome;
