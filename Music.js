import React from "react";
import { SafeAreaView,TouchableOpacity,ScrollView,View } from "react-native";
import Header from './components/Header';

const Music =()=>
{
    return(
        <SafeAreaView>
            <Header title={'Music'} style={{
                color: '#FFF',
                backgroundColor: '#e9967a',
                textAlign: 'center',
                padding: 20,
                fontSize: 30,
                marginLeft:32
            }}>

            </Header>
            
        </SafeAreaView>

    )
}
export default Music;