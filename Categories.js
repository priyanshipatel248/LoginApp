import React  from "react";
import {SafeAreaView,View,Text,TextInput} from "react-native";
import Header from "./components/Header";

const Categories =()=>
{
    return(

        <SafeAreaView>
            <Header title={'Categories'} style={{
                color: '#FFF',
                backgroundColor: '#e9967a',
                textAlign: 'center',
                padding: 20,
                fontSize: 30,
                marginLeft:32
            }}/>
        </SafeAreaView>
    )
}
export default Categories;
