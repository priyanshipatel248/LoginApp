import * as React from 'react';
import Login from './Login';
import Registration from './Registration';

import Otp from './Otp';
import Welcome from './Welcome';
import Music from './Music';
import Gallery from './Gallery';
import Favourite from './Favourite';
import PlusZone from './PlusZone';
import Categories from './Categories';
import MyItems from './MyItems';
import Offer from './Offer';
import Sell from './Sell';
// import MyOrder from './Myorder';
import MyRewards from './MyRewards';
import MyCart from './MyCart';
import MyAccount from './MyAccount';
import MyChats from './MyChats';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {Icon} from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/dist/AntDesign';

import Splash from './Splash';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen
        name="wlcm"
        component={Welcome}
        options={{
          drawerIcon: ({color, focused}) => (
            <Icon name="home" color={focused ? 'blue' : '#e9967a'} size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="Pic"
        component={Gallery}
        options={{
          drawerIcon: ({color, focused}) => (
            <Icon
              name="picture"
              color={focused ? 'blue' : '#e9967a'}
              size={26}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Pluszone"
        component={PlusZone}
        options={{
          drawerIcon: ({color, focused}) => (
            <Icon
              name="plussquareo"
              color={focused ? 'blue' : '#e9967a'}
              size={26}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="categories"
        component={Categories}
        options={{
          drawerIcon: ({color, focused}) => (
            <Icon
              name="profile"
              color={focused ? 'blue' : '#e9967a'}
              size={26}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="MyItems"
        component={MyItems}
        options={{
          drawerIcon: ({color, focused}) => (
            <Icon name="form" color={focused ? 'blue' : '#e9967a'} size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="Offer"
        component={Offer}
        options={{
          drawerIcon: ({color, focused}) => (
            <Icon
              name="smileo"
              color={focused ? 'blue' : '#e9967a'}
              size={26}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Sell"
        component={Sell}
        options={{
          drawerIcon: ({color, focused}) => (
            <Icon
              name="plussquareo"
              color={focused ? 'blue' : '#e9967a'}
              size={26}
            />
          ),
        }}
      />
      {/* <Drawer.Screen name="MyOrder" component={MyOrder}/> */}
      <Drawer.Screen
        name="MyRewards"
        component={MyRewards}
        options={{
          drawerIcon: ({color, focused}) => (
            <Icon
              name="wallet"
              color={focused ? 'blue' : '#e9967a'}
              size={26}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="MyCart"
        component={MyCart}
        options={{
          drawerIcon: ({color, focused}) => (
            <Icon
              name="shoppingcart"
              color={focused ? 'blue' : '#e9967a'}
              size={26}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="MyAccount"
        component={MyAccount}
        options={{
          drawerIcon: ({color, focused}) => (
            <Icon name="user" color={focused ? 'blue' : '#e9967a'} size={26} />
          ),
        }}
      />
      {/* <Drawer.Screen
        name="applogin"
        component={Apollologin}
        options={{
          drawerIcon: ({color, focused}) => (
            <Icon name="user" color={focused ? 'blue' : '#e9967a'} size={26} />
          ),
        }}
      /> */}
      <Drawer.Screen
        name="MyChats"
        component={MyChats}
        options={{
          drawerIcon: ({color, focused}) => (
            <Icon
              name="aliwangwang-o1"
              color={focused ? 'blue' : '#e9967a'}
              size={26}
            />
            
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="wlc"
      barStyle={{backgroundColor: 'tomato'}}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="wlc"
        component={Welcome}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon name="home" color={focused ? 'blue' : '#e9967a'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="music"
        component={Music}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon name="sound" color={focused ? 'blue' : '#e9967a'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="gallery"
        component={Gallery}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon
              name="picture"
              color={focused ? 'blue' : '#e9967a'}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="fav"
        component={Favourite}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon name="heart" color={focused ? 'blue' : '#e9967a'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="items"
        component={DrawerNavigation}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon
              name="cloudo"
              color={focused ? 'blue' : '#e9967a'}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Rootnavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName={'aplogin'}
        initialRouteName={'splash'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="reg" component={Registration} />
        <Stack.Screen name="ver" component={Otp} />
        <Stack.Screen name="wlcm" component={Welcome} />
        
        <Stack.Screen name="items" component={DrawerNavigation} />

        <Stack.Screen name="home" component={BottomNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Rootnavigation;
