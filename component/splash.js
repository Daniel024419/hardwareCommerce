import React, { Component } from 'react'
import { Image ,View,Text,StyleSheet} from 'react-native'


 export default function SplashCsreen (){
    return(
  <View style={styles.backg}>

 <Text>
 hello
 </Text>
 </View>
    )

 }
 const styles=StyleSheet.create({
backg:{
  backgroundColor:'blue'
  ,marginTop:0,
  height:500
}

 })