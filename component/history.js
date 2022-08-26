import * as React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Alert, SafeAreaView, FlatList} from 'react-native';
 


 export default function HomeComp () {
  const boxes = [

    //this where the data will be fetched to from the database...
    //{
    //  id: 1,
     // name:''
    //},
   
  ];
 
//fecthing date from the array
for(var i=0;i<=20;++i){

  boxes.push(

{
id:1,
name:''
},

  )
}


  const Grid = (name) => (
    <View style={styleSheet.gridStyle}>
    <Text style={styleSheet.itemprofile}>
     
    </Text>
    <Text style={styleSheet.compname}></Text>
      <Text style={styleSheet.gridbox}> </Text>
     
     
      <Text style={styleSheet.delHistory}></Text>
      <Text style={styleSheet.date}></Text>
    </View>
  );
 
//stylesheet
 
const styleSheet = StyleSheet.create({
 
  gridStyle: {
    flex: 1,
    height: 210,
    backgroundColor: 'darkgray',
    marginTop:10,
    marginLeft:10,
    marginBottom:5,
    borderRadius:3,marginRight:10,
  },
 
  gridbox: {
    fontSize: 25,
    color: 'white',
    margin:4,
    backgroundColor:'gray'
    ,borderRadius:3,
    height:80,marginTop:9,
  },
   itemprofile:{
   backgroundColor:'gray',
   borderRadius:500,height:45,
   width:45,
   marginLeft:4,marginTop:5,
  

  }
 ,
 compname:{
   backgroundColor:'gray',
   borderRadius:2,
   height:20,
   width:150,
   marginLeft:156,
   marginTop:-20
 },
 
 
 delHistory:{
   backgroundColor:"gray",
   height:25,width:40,
   borderRadius:3,
   marginLeft:4,marginTop:4,
 
 }
,date:{
  backgroundColor:'gray',
  height:20,width:300,
  borderRadius:3,marginTop:4,
  marginLeft:4,marginBottom:10,

}

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



 




 
 
 
 

 
