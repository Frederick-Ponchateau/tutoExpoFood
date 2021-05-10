import React, { Component,useState,useEffect } from 'react';
import { StyleSheet,Text,View} from 'react-native';
import {NavigationContainer}  from '@react-navigation/native';
import HomeStackNavigator  from './src/navigations/Navigator';
import * as Font from 'expo-font';
// import {AppLoading} from 'expo';

const App = () => {
const [isFontLoaded,setLoaded]=useState(false);
const loading= async () =>{
  await Font.loadAsync({
    'SemiBold':require('./src/fonts/Montserrat-SemiBold.otf'),
    'Medium':require('./src/fonts/Montserrat-Medium.otf'),
    'Regular':require('./src/fonts/Montserrat-Regular.otf')
  })
  setLoaded(true);
}

useEffect(()=>{
  loading()
}, [])



  return(
    (isFontLoaded)?(
      <NavigationContainer>
      <HomeStackNavigator/>
    </NavigationContainer>) :(null)
  )
}
const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:"center"
  },
})
export default App;