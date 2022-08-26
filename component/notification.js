import * as React from 'react';
import { Text, View,StyleSheet,Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {  SafeAreaView, FlatList} from 'react-native';
 
  
 export default function HomeComp () {
   
  const boxes = [
    //where the data will be fetched to from the database
      // {
     // id: 1,
     // name: '',
    //},
  ];
 

for(var i=0;i<=20;++i){

boxes.push(

  {
id:1,
name:""

  },
)



}
 


  const Grid = (name) => (
    <View style={styleSheet.gridStyle}>
    <Text style={styleSheet.itemprofile}>
     
    </Text>
    <Text style={styleSheet.compname}></Text>
      <Text style={styleSheet.gridbox}> </Text>
     
      <Text style={styleSheet.viewprofile}></Text>
      <Text style={styleSheet.date}></Text>
      
    
    </View>
  );
 
//stylesheet
 
const styleSheet = StyleSheet.create({
 
  gridStyle: {
     flex: 1,
    height: 120,
    backgroundColor: 'darkgray',
    marginTop:10,
    marginLeft:10,
    marginBottom:10,marginRight:10,
    borderRadius:3
  },
 
  gridbox: {
    fontSize: 25,
    color: 'white',
    margin:4,
    backgroundColor:'gray',borderRadius:3,
    height:35,marginTop:7,
  },
   itemprofile:{
   backgroundColor:'gray',
   borderRadius:500,height:45,
   width:45,
   marginLeft:4,marginTop:4,
  
  }
 ,
 compname:{
   backgroundColor:'gray',
   borderRadius:2,
   height:20,
   width:122,
   marginLeft:73,
   marginTop:-25
 },
 viewprofile:{
backgroundColor:'gray',
height:10,width:144,
marginLeft:4,
borderRadius:3,
 
 },
 date:{
 backgroundColor:'gray',
width:130,height:10,
marginTop:4,marginLeft:4,
borderRadius:3,marginBottom:10,

 },
  

 

});







  return (

 
    <SafeAreaView style={{ flex: 1 }}>
 
      <FlatList
        data={boxes}
                renderItem={({ item }) => <Grid name={item.name} />}
        keyExtractor={item => item.id}
        numColumns={1}
        key={item => item.id}

         
      />
 
    </SafeAreaView>
  );
}



 




 
 
 
 

 
