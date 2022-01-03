import React, {useState} from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  ToastAndroid,
} from 'react-native';
import Header from './components/Header';
import Ctextinput from './components/Ctextinput';

const Otp = props => {
  let mobilenum = props.route.params.MobileNumber;

  const [isLoading, setIsLoading] = useState(false);
  const [code, setIsCode] = useState('');
  console.log(props.route.params.MobileNumber);
  console.log(props.route.params.UserName);

  const onBtnPress = async () => {
    if (code == '') {
      ToastAndroid.show('Please Fill OTP', ToastAndroid.SHORT);
    } else {
      setIsLoading(!isLoading);
      await AsyncStorage.setItem('userData', mobilenum);

      props.navigation.navigate(
        'home',
        {UserName: props.route.params.UserName},
        {MobileNumber: props.route.params.MobileNumber},
      );
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#a9a9a9'}}>
      <Header
        title={'OTP'}
        isBack
        back={'Back'}
        navigation={props.navigation}
        style={{
          color: '#FFF',
          backgroundColor: '#e9967a',
          textAlign: 'center',
          padding: 20,
          fontSize: 30,
          marginRight: 50,
        }}
      />
      <Text
        style={{
          marginTop: 20,
          fontWeight: 'bold',
          fontSize: 20,
          marginLeft: 10,
        }}>
        We sent OTP on your verify number {mobilenum}
      </Text>

      <OTPInputView
        style={{width: '80%', height: 150}}
        pinCount={4}
        // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
        // onCodeChanged = {code => { this.setState({code})}}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={code => {
          setIsCode(code);
        }}
      />

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            color: '#FFF',
            backgroundColor: 'transparent',
            marginLeft: 150,
            fontSize: 30,
          }}>
          <Text style={{textDecorationLine: 'underline', color: 'blue'}}>
            Resend OTP
          </Text>
        </TouchableOpacity>

        {/* <TouchableOpacity style={{color: '#00008b',
          backgroundColor: 'transparent',
          marginLeft:72,
          fontSize: 30}}>
            <Text style={{textDecorationLine:'underline',color:'blue'}}>Back</Text>
            </TouchableOpacity> */}
      </View>

      <TouchableOpacity
        style={{
          margin: 20,
          padding: 20,
          borderWidth: 1,
          borderRadius: 10,
          backgroundColor: '#e9967a',
        }}
        onPress={onBtnPress}
        activeOpacity={0.5}>
        {isLoading ? (
          <ActivityIndicator color={'#FFF'} />
        ) : (
          <Text
            style={{
              color: '#FFF',
              fontsize: 20,
              fontweight: '100',
              textAlign: 'center',
            }}>
            Submit
          </Text>
        )}
      </TouchableOpacity>

      {/* <ScrollView>
        <View style={{flex: 1, padding: 10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View
              style={{
                backgroundColor: '#000000',
                borderRadius: 10,
                borderWidth: 1,
                marginTop: 10,

                marginLeft: 0,
                marginRight: 10,
                paddingHorizontal: 10,
              }}>
              <TextInput placeholder={'9'} />
            </View>
            <View
              style={{
                backgroundColor: '#000000',
                borderRadius: 10,
                borderWidth: 1,
                marginTop: 10,
                marginLeft: 12,
                marginRight: 275,
                paddingHorizontal: 10,
              }}>
              <TextInput placeholder={'9'} />
            </View>
          </View>
          <TouchableOpacity
            style={{
              margin: 20,
              padding: 20,
              borderWidth: 1,
              borderRadius: 10,
              backgroundColor: '#e9967a',
            }}
            onPress={onBtnPress}
            activeOpacity={0.5}>
            {isLoading ? (
              <ActivityIndicator color={'#FFF'} />
            ) : (
              <Text
                style={{
                  color: '#FFF',
                  fontsize: 20,
                  fontweight: '100',
                  textAlign: 'center',
                }}>
                Submit
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView> */}
    </SafeAreaView>
  );
};
export default Otp;

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 42,
    height: 47,
  },

  borderStyleHighLighted: {
    borderColor: '#000000',
  },

  underlineStyleBase: {
    width: 42,
    height: 47,
    borderWidth: 0,
    borderBottomWidth: 1,
    backgroundColor: '#000000',
    borderRadius: 10,
    marginLeft: 40,
  },

  underlineStyleHighLighted: {
    borderColor: '#000000',
  },
});
