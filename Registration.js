import React, {useState, useEffect} from 'react';
// import {Icon} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImagePicker, { openCamera } from 'react-native-image-crop-picker';
import Ctextinput from './components/Ctextinput';
import Header from './components/Header';
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
const Registration = (props) => {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [UserName, setUserName] = useState('');
  const [MobileNumber, setMobileNumber] = useState('');
  const [Email, setEmail] = useState('');
  const [Address, setAddress] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isshow, setIsShow] = useState(false);
  const [isshoww, setIsShoww] = useState(false);
  const [image, setImagepicker] = useState('');
  const [image2,setOpenCamera]=useState('');
  const[selectindex,setSelectIndex]=useState(0);
  const [isclick, setIsClick] = useState(false);
  useEffect(() => {
    console.log(props)
    getData();
  }, []);

  const getData = async () => {
    let result = await AsyncStorage.getItem('userData');
    console.log(result);
  };
  const onButt =()=>
  {
    setIsClick(!isclick);
    props.navigation.navigate('login')
  }
  const onBtnPress = () => {
    /* if (Name == '' && MobileNumber==''&& Email=='' && Password=='')
     {
     	ToastAndroid.show("Please Fill all the details", ToastAndroid.SHORT)
     }
     else
     {
     	setIsLoading(!isLoading)
     } */
    const reg = /^[0]?[789]\d{9}$/;
    const regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const reguse = /^[aA-zZ\s]+$/;

    //1 capital ,1 lower, 1 special ,1 numeric ,range 8 or longer
    const regexx =
      /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;

    if (FirstName == '') {
      ToastAndroid.show('Please Fill FirstName', ToastAndroid.SHORT);
    } else if (FirstName.length < 2 || FirstName.length > 10) {
      ToastAndroid.show(
        'Please Enter FirstName in range of 10',
        ToastAndroid.SHORT,
      );
    } else if (LastName == '') {
      ToastAndroid.show('Please Fill LastName', ToastAndroid.SHORT);
    } else if (LastName.length < 2 || LastName.length > 10) {
      ToastAndroid.show(
        'Please Enter LastName in range of 10',
        ToastAndroid.SHORT,
      );
    } else if (UserName == '') {
      ToastAndroid.show('Please Fill MobileNumber', ToastAndroid.SHORT);
    } else if (!reguse.test(UserName)) {
      ToastAndroid.show('Please Fill Valid UserName', ToastAndroid.SHORT);
    } else if (MobileNumber == '') {
      ToastAndroid.show('Please Fill MobileNumber', ToastAndroid.SHORT);
    } else if (!reg.test(MobileNumber)) {
      ToastAndroid.show('Please Fill Valid MobileNumber', ToastAndroid.SHORT);
    } else if (Email == '') {
      ToastAndroid.show('Please Fill Email', ToastAndroid.SHORT);
    } else if (!regx.test(Email)) {
      ToastAndroid.show('Please Fill Valid EmailId', ToastAndroid);
    } else if (Address == '') {
      ToastAndroid.show('Please Fill Address', ToastAndroid.SHORT);
    } else if (Password == '') {
      ToastAndroid.show('Please Fill Password', ToastAndroid.SHORT);
    } else if (!regexx.test(Password)) {
      ToastAndroid.show('Please Fill Valid Password', ToastAndroid.SHORT);
    } else if (ConfirmPassword == '') {
      ToastAndroid.show('Please Fill ConfirmPassword', ToastAndroid.SHORT);
    } else if (!regexx.test(ConfirmPassword)) {
      ToastAndroid.show(
        'Please Fill Valid ConfirmPassword',
        ToastAndroid.SHORT,
      );
    } else if (Password != ConfirmPassword) {
      ToastAndroid.show('Please Fill appropriate', ToastAndroid.SHORT);
    } else {
      setIsLoading(!isLoading);
      storeData();
      console.log(MobileNumber, Email);
      ToastAndroid.show(MobileNumber + Email, ToastAndroid.SHORT);
      props.navigation.navigate('ver',{MobileNumber,UserName})
    }
  };

  const clickopen = () => {
    setIsShow(!isshow);
  };

  const clickopenn = () => {
    setIsShoww(!isshoww);
  };

  const onGenderSelected = (index) => {
    // console.log(GenderArray.map(i)=>GenderArray[])
    console.log(index);
    setSelectIndex(index);
  };

  const storeData = async () => {
    let userData = {
      F_name: FirstName,
      L_name: LastName,
      U_name: UserName,
       M_number: MobileNumber,
       E_mail: Email,
       Add_ress: Address,
       Pass: Password,
       C_pass: ConfirmPassword,
       im_g: image,
       ima_ge2:image2
    };
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      console.log('Success full submition');
    } catch (e) {
      // saving error
    }
  };

  const selectImage = () => {
    ImagePicker.openPicker({}).then(image => {
      console.log(image);
      setImagepicker(image.path);
    });

    
    }
    const selectCamera = () =>
    {
      ImagePicker.openCamera({
        
      }).then(image2 => {
        console.log(image2);
        setOpenCamera(image2.path);
      });
   };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#a9a9a9'}}>
      <Header
        title={'Registration'}
        isBack
        back={'Back'}
        navigation={props.navigation}
        style={{
          color: '#FFF',
          backgroundColor: '#e9967a',
          textAlign: 'center',
          padding: 20,
          fontSize: 30,
          marginRight:50
        }}
      />

      <ScrollView>
     
        <TouchableOpacity
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
            
        
          </TouchableOpacity>
        

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
            placeholder={'FirstName'}
            value={FirstName}
            onTextChange={text => setFirstName(text)}
          />

          <Ctextinput
            placeholder={'LastName'}
            value={LastName}
            onTextChange={text => setLastName(text)}
          />

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
            placeholder={'Email'}
            value={Email}
            keyboardType={'email-address'}
            onTextChange={text => setEmail(text)}
          />

          <Ctextinput
            placeholder={'Address'}
            value={Address}
            multiline={true}
            numberOfLines={5}
            onTextChange={text => setAddress(text)}
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

          <Ctextinput
            secureTextEntry={isshoww}
            onclickopen={() => {
              setIsShoww(!isshoww);
            }}
            style={{alignItems: 'center', flexDirection: 'row'}}
            textInputStyle={{flex: 1, marginEnd: 10, paddingHorizontal: 10}}
            isPassword
            placeholder={'ConfirmPassword'}
            value={ConfirmPassword}
            onTextChange={text => setConfirmPassword(text)}
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
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>

<TouchableOpacity style={{color: '#FFF',
          backgroundColor: 'transparent',
          position:'absolute',
          fontSize: 30,position:'absolute',left:70,right:30,bottom:3}}>
            
            <Text>Already have an account?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{color: '#FFF',
          backgroundColor: 'transparent',
          position:'absolute',
          fontSize: 30,position:'absolute',left:230,right:10,bottom:3,marginHorizontal:10}} onPress={onButt}>
            {isclick?(<Text style={{color:'red'}} Log In/>):(<Text style={{textDecorationLine: 'underline',color:'blue'}}>Log In</Text>)}
            
          
          </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Registration;

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
