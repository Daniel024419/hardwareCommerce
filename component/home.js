import React from 'react';
import { Alert, View, StyleSheet, SafeAreaView,ImageViewer,Pressable, FlatList, Text ,Picker, TouchableOpacity,useState,Button,Image} from 'react-native';
import {Component} from 'react'
import ViewProductmodal from './viewProduct.js'
import Modal from 'react-native-modal';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Login from './sigin.js'
import { createStackNavigator } from '@react-navigation/stack';
import { SearchBar } from 'react-native-elements';
 
const Tab = createBottomTabNavigator();

 export default  function App() {


//    if(){
// return(
//   <Products/>
// )
//    }
//    else if(){
// return(
// <IfAUser/>

// )
//    }else if(){
// return(
// <IfNotAuser />

// )

//    }
  
  return(
    < Products />
  )
}

function Products({ navigation }) {
  
  const boxes = [
   
  {
   id:1,
   name:'Kantanka Harware Ltd',
   description:'Nails',
   price:'Gh 200.00',
   size:'1inch',
   imageUrl:require('./pictures/nails.jpg'),
   location:'Winneba, Central',
   c_logo:require('./pictures/logo4.jpg'),
   },


  ];
  
for(var i=0;i<=12;++i){
var num=i;
boxes.push({
id:{num},
name:"Boakye Ansah Company Ltd",
description:'Ball Hammer',
price:'Gh 120.00',
size:'12inch',
location:'Cape Coast, Abura',
imageUrl: require("./pictures/hammercrawl.jpg"),
c_logo:require('./pictures/logo3.png'),
},);


}




  const Grid = ({name,description,imageUrl,price,c_logo,size,location}) => (
    <View style={styleSheet.gridStyle}>
   

   <Image style={styleSheet.profile}
   source={c_logo} 
   />
    <Text style={styleSheet.compname}>{name}</Text>
      <Text > </Text>
      <Image style={styleSheet.gridbox} source={imageUrl} />
   
      <Text style={styleSheet.dis}>Desc:{description} | Size: {size}</Text>
      <Text style={styleSheet.price}>Price:{price} | {location}</Text>
      <Text style={styleSheet.viewproduct}
    
      >View Product </Text> 
        
      <Text style={styleSheet.buy} 
      >Buy</Text>
     

    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
     
    
   
      <FlatList
        data={boxes}
        renderItem={({ item }) => <Grid 
        name={item.name}
        description={item.description}
        price={item.price}
        imageUrl={item.imageUrl}
        c_logo={item.c_logo}
        size={item.size}
        location={item.location}
        />}
        keyExtractor={item => item.id}
        numColumns={1}
        key={item => item.id}
      />
 
    </SafeAreaView>
  );
}
 
  

const styleSheet = StyleSheet.create({
 
  gridStyle: {
    flex: 1,
    textAlign:'left',
    height: 255,
    margin:1,
    backgroundColor: 'white',
    marginTop:8,marginLeft:10,marginRight:10,
    borderRadius:6,marginBottom:4
    ,borderColor:'#ccc',borderWidth:1,
    shadowColor:'#000',
    
  },
 
 
  gridbox: {
    margin:2,
    borderRadius:3,
    height:110,
    marginTop:1,
    width:"90%",
    marginLeft:15,
    backgroundColor:'gray',
   '@media (max-width: 420px) and (min-width: 200px)': {
           width:200,
        },
        '@media (max-width: 150px)': {
            width:110,
        },
     
  },
   profile:{
   backgroundColor:'gray',
   borderRadius:500,height:45,
   width:45,
   marginLeft:4,marginTop:6,
  }
 ,
 compname:{
     
   marginLeft:67,
   marginTop:-35,
   fontSize:15,
   textTransform:'uppercase',
 },
 dis:{
marginLeft:4,
fontSize:16,
 
 },
 price:{
 
marginTop:2,marginLeft:4,
fontSize:16,
 
 },
 viewproduct:{
   backgroundColor:"orange",
   height:21,width:100,
   borderRadius:3,
   marginLeft:30,
   marginTop:4,
   textAlign:'center',
   paddingTop:2,
   paddingBottom:2
 }

,buy:{
  backgroundColor:'orange',
  height:20,
  width:100,
  borderRadius:3,
  marginTop:-19,
  marginLeft:190,
  marginBottom:13,
  textAlign:"center",

}
 
});
  

// function ProfileScreen({navigation }) {
//   return (
//     <View style={{ flex: 1 }}>
//       <Text>Profile!</Text>
//       <Text>
//         {''}
//       </Text>
     
//     </View>
//   );
// }
 
function IfNotAuser(){

  return(

    <Signup />
  )
}

function IfAUser(){

  return(

    < Login />
  )
}









// //modal
// export default function home() {
 
  
