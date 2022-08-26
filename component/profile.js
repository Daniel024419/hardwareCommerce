import * as React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Alert, SafeAreaView, FlatList} from 'react-native';
 
 
 export default function HomeComp () {

  const boxes = [
    {
      //id: 1,
    },
    {
    //  id: 2,
      
    },
    {
     // id: 3,
     
    },
    {
     // id: 4,
    
    },
    {
      //id: 5,
    
    },
    {
     // id: 6,
  
    },
    {
       //id=7
    },
    {
      //id: 8, 
    },
    {
     // id: 9,
       
    },
    {
     // id: 10,
      
    },
 
  ];
 

  

  const Grid = (name) => (
    <View style={styleSheet.gridStyle}>
    <Text style={styleSheet.itemprofile}>
     
    </Text>
    <Text style={styleSheet.compname}></Text>
      <Text style={styleSheet.gridbox}> </Text>
     
      <Text style={styleSheet.dis}></Text>
      <Text style={styleSheet.price}></Text>
      <Text style={styleSheet.viewproduct}></Text>
      <Text style={styleSheet.buy}></Text>
    </View>
  );
 
//stylesheet
 
const styleSheet = StyleSheet.create({
 
  gridStyle: {
    flex: 1,
    
    height: 210,
     
    backgroundColor: 'darkgray',
    marginTop:5,
    marginLeft:5,
    marginBottom:5,
    borderRadius:3
  },
 
  gridbox: {
    fontSize: 25,
    color: 'white',
    margin:4,
    backgroundColor:'gray',borderRadius:3,
    height:80,marginTop:9,
  },
   itemprofile:{
   backgroundColor:'gray',
   borderRadius:500,height:45,
   width:45,
   marginLeft:4,marginTop:0,
  

  }
 ,
 compname:{
   backgroundColor:'gray',
   borderRadius:2,
   height:20,
   width:76,
   marginLeft:73,
   marginTop:-20
 },
 dis:{

backgroundColor:'gray',
height:10,width:144,
marginLeft:4,
borderRadius:3,
 },
 price:{
backgroundColor:'gray',
width:100,height:10,
marginTop:4,marginLeft:4,
borderRadius:3,

 },
 viewproduct:{
   backgroundColor:"gray",
   height:10,width:50,
   borderRadius:3,
   marginLeft:4,marginTop:4,
 }

,buy:{
  backgroundColor:'gray',
  height:20,width:40,
  borderRadius:3,marginTop:4,marginLeft:109,

}

});







  return (

 
    <SafeAreaView style={{ flex: 1 }}>
 
      <FlatList
        data={boxes}
        renderItem={({emptyitems}) => <Grid/>}
        numColumns={2}
        key={item => item.id}
      />
 
    </SafeAreaView>
  );
}



 




 
 
 
 

 
