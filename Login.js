import React, {useState, useEffect} from 'react';
// import {Icon} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImagePicker, {openCamera} from 'react-native-image-crop-picker';
import Ctextinput from './components/Ctextinput';
import Header from './components/Header';
import {NavigationContainer} from '@react-navigation/native';
// import {Ionicons} from 'react-native-vector-icons';


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
} from 'react-native';

let GenderArray = [
  {Label: 'Male'},
  {Label: 'Female'},
  {Label: 'Other'},
  {Label: 'Child'},
  {Label: 'Old'},
  {Label: 'Young'},
];
const Login = props => {
  const [UserName, setUserName] = useState('');
  const [MobileNumber, setMobileNumber] = useState('');

  const [Password, setPassword] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [isshow, setIsShow] = useState(false);
  const [isclick, setIsClick] = useState(false);
  // const [image, setImagepicker] = useState('');
  // const [image2,setOpenCamera]=useState('');
  // const[selectindex,setSelectIndex]=useState(0);
  useEffect(() => {
    console.log(props);
    const unsubscribe = props.navigation.addListener('focus', () => {
      // The screen is focused
      // Call any action
      setIsLoading(false)
      setUserName('')
      setMobileNumber('')
      setPassword('')
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  

   
  }, [props.navigation]);

  const getData = async () => {
    let result = await AsyncStorage.getItem('userData');
    console.log(result);
  };
  const onBut = () => {
    setIsClick(!isclick);
    props.navigation.navigate('reg')
  };

  const onBtnPress = () => {
    /* if (Name == '' && MobileNumber==''&& Email=='' && Password=='')
     {
     	ToastAndroid.show("Please Fill all the details", ToastAndroid.SHORT)
     }
     else
     {
     	setIsLoading(!isLoading)
     } */
    const reg = /^[0]?[789]\d{9}$/; //Mobile number
    const regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //Email
    const reguse = /^[aA-zZ\s]+$/; //username

    //1 capital ,1 lower, 1 special ,1 numeric ,range 8 or longer
    const regexx =
      /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/; //password

    // if (FirstName == '') {
    //   ToastAndroid.show('Please Fill FirstName', ToastAndroid.SHORT);
    // } else if (FirstName.length < 2 || FirstName.length > 10) {
    //   ToastAndroid.show(
    //     'Please Enter FirstName in range of 10',
    //     ToastAndroid.SHORT,
    //   );
    // } else if (LastName == '') {
    //   ToastAndroid.show('Please Fill LastName', ToastAndroid.SHORT);
    // } else if (LastName.length < 2 || LastName.length > 10) {
    //   ToastAndroid.show(
    //     'Please Enter LastName in range of 10',
    //     ToastAndroid.SHORT,
    //   );
    // }
    if (UserName == '') {
      ToastAndroid.show('Please Fill MobileNumber', ToastAndroid.SHORT);
    } else if (!reguse.test(UserName)) {
      ToastAndroid.show('Please Fill Valid UserName', ToastAndroid.SHORT);
    } else if (MobileNumber == '') {
      ToastAndroid.show('Please Fill MobileNumber', ToastAndroid.SHORT);
    } else if (!reg.test(MobileNumber)) {
      ToastAndroid.show('Please Fill Valid MobileNumber', ToastAndroid.SHORT);
    } else if (Password == '') {
      ToastAndroid.show('Please Fill Password', ToastAndroid.SHORT);
    } else if (!regexx.test(Password)) {
      ToastAndroid.show('Please Fill Valid Password', ToastAndroid.SHORT);
    } else {
      setIsLoading(!isLoading);
      storeData();
      console.log(MobileNumber,UserName);
      ToastAndroid.show(MobileNumber + UserName, ToastAndroid.SHORT);
      
      props.navigation.navigate('ver',{MobileNumber:MobileNumber,UserName:UserName});
    }
  };

  const clickopen = () => {
    setIsShow(!isshow);
  };

  const storeData = async () => {
    let userData = {
      U_name: UserName,
      M_number: MobileNumber,

      Pass: Password,

      // im_g: image,
      // ima_ge2:image2
    };
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      console.log('Success full submition');
    } catch (e) {
      // saving error
    }
  };

  // const selectImage = () => {
  //   ImagePicker.openPicker({}).then(image => {
  //     console.log(image);
  //     setImagepicker(image.path);
  //   });

  //   }
  //   const selectCamera = () =>
  //   {
  //     ImagePicker.openCamera({

  //     }).then(image2 => {
  //       console.log(image2);
  //       setOpenCamera(image2.path);
  //     });
  //  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#a9a9a9'}}>
      <Header
        title={'Login'}
        
        style={{
          color: '#FFF',
          backgroundColor: '#e9967a',
        
          marginLeft:42,
          padding: 20,
          fontSize: 30,
        }}
      />

      <ScrollView>
        {/* <TouchableOpacity
          style={{
            borderWidth: 1,
            width: 100,
            height: 100,
            borderRadius: 50,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={selectImage}>
          <Image
            source={{uri: image}}
            style={{width: 90, height: 90, borderRadius: 40}}/>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            width: 100,
            height: 100,
            borderRadius: 50,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop:5
          }}onPress={selectCamera}>
            <Image
              source={{uri:image2}}
              style={{width: 90, height: 90, borderRadius: 40}}/>
            
        
          </TouchableOpacity> */}

        <View style={{flex: 1, padding: 10}}>
          {/* <View>
            {GenderArray.map((i,index) =>
            {
              return(
                <TouchableOpacity style={{flexDirection:'row'}} 
                onPress={ () => onGenderSelected(index)}
                key={index}>
                  <View style={{height:20,
                  width:20,
                  padding:10,
                  borderRadius:15
                  }}>
                    <View style={{
                      height:15,
                      width:15,
                      borderRadius:12
                    }}> </View>
                  </View>
                  <Text style={{color:selectindex == index ? '#FFF':'#e9967a',paddingHorizontal:10}}{i.Label}>
                    
                
                </Text>
                  
                  </TouchableOpacity>
              );
            })}
            </View> */}

          <Ctextinput
            placeholder={'UserName'}
            value={UserName}
            onTextChange={text => setUserName(text)}
          />

          <Ctextinput
            placeholder={'MobileNumber'}
            value={MobileNumber}
          
            maxLength={10}
            keyboardType={'numeric'}
            onTextChange={text => setMobileNumber(text)}
          />

          <Ctextinput
            isshow={isshow}
            secureTextEntry={isshow}
            onclickopen={() => {
              setIsShow(!isshow);
            }}
            style={{alignItems: 'center', flexDirection: 'row'}}
            textInputStyle={{flex: 1, marginEnd: 10, paddingHorizontal: 10}}
            isPassword
            placeholder={'Password'}
            value={Password}
            onTextChange={text => setPassword(text)}
          />

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
      </ScrollView>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          style={{
            color: '#FFF',
            backgroundColor: 'transparent',
            position: 'absolute',
            fontSize: 30,
            position: 'absolute',
            left: 70,
            right: 30,
            bottom: 3,
          }}>
          <Text>Don't have an account?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            color: '#FFF',
            backgroundColor: 'transparent',
            position: 'absolute',
            fontSize: 30,
            
            left: 230,
            right: 10,
            bottom: 3,
          }}
          onPress={onBut}>
          {isclick ? (
            <Text style={{textDecorationLine: 'underline', color: 'blue'}}>
            Sign Up
          </Text>
          ) : (
            <Text style={{textDecorationLine: 'underline', color: 'blue'}}>
              Sign Up
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Login;

const style = StyleSheet.create({
  textInputStyle: {
    backgroundColor: '#000000',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  radio: {
    height: 20,
    width: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#FFF',
  },
  radio1: {
    height: 12,
    width: 12,
    borderRadius: 7,
    color: '#e9967a',
  },
});
