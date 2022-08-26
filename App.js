import * as React from 'react';
import { Text, View, Button,AppRegistry,StatusBar ,WebView,StyleSheet,TextInput,Alert,DrawerIcon,
TouchableOpacity} from 'react-native';
 import SplashCsreen from './component/splash.js'
import  { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeContent from './component/home.js';
import TopNav from './component/topnav.js';
import Signup from './component/signup_buyer'
 import Recoverpwsd from './component/recoverpswd.js'
 import {Link} from '@react-navigation/native'
//import HomeComp from './component/home.js';
import Notification from './component/notification.js';
import Historypage from './component/history.js';
import Profilepage from './component/profile.js';
//import Uploadpage from './component/upload.js';
import Signin from './component/sigin';
import {Component} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from "@expo/vector-icons"


const Signupscreen=()=>{
return(
    <Signup />
  )
 }





 var newemail='';
 var newpassword='';

  function Login() {

  const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
  newemail=email;
  newpassword=password;


if(newemail=="ama"&&newpassword==12){

return(

<Notification/>

)
 
}
 
  return (
  
    
    
    <View style={styles.container}>
      <Text style={styles.login}>LOGIN</Text>
      <Text style={styles.placeholder}>Username</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder=" "
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <Text style={styles.placeholder}>Password</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder=""
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity onPress={Runpswd=()=>{

return(
  <Link to={{screen:'HomeScreen'}}>
    <Text style={styles.forgot_button}> Forgot Password? </Text>
  </Link>
)

        }
        }  
        >
      
      </TouchableOpacity>
      

      <Button title='Sign in' onPress={Signupscreen} />
    </View>
  
  );
}
   
function Forgetpswd(){
 
return(

<Recoverpwsd/>

)
 
}
   
  

 
function HomeScreen() {


  return(
    
  <HomeContent /> 
  )
}
   
function Notifications(){
  if(newemail=="ama"&&newpassword==12){
return(
<Notification />

)
  }else{
    return(
  <Login/>
)
  }


 //< Signin/>

}
function SigninScreen(){
  return(
    < Signin/>
  )
}
function History(){
  
  if(newemail=="ama"&& newpassword==12){
return(
   <Historypage /> 
)
  }
  else{

    return(
  
  <Login/>
 )
  }
}
   

function Upload_products(){
  if(newemail=="ama",newpassword==12){

    return(
    <View>
    <Text> Coming soon... </Text>
    </View>
  )
  }  
  else{

    return(
      <Login/>
    )
  }
}
function Profile() {
  if(newemail=="ama"&&newpassword==12){
return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
       
    </View>
   // <Profilepage />
  );

  }
  else{
    return(

      <Login/>
    )
  }
  
}
 

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen
         name={
           "Home"
         }
        
         component={HomeScreen} 
          drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: {marginLeft:20,fontSize:35},
          

        }} 
       
        />
 
        <Drawer.Screen
         name="Login" 
        component={SigninScreen}
         />
           <Drawer.Screen name="Signup" component={Signup}  />
           <Drawer.Screen name="History" component={History} />
          <Drawer.Screen name="Product Upload" component={Upload_products}/>

          <Drawer.Screen name="Notification" component={Notifications} />
         

         <Drawer.Screen name="Password Recovery"
         component={Forgetpswd}
         />
        </Drawer.Navigator>
    </NavigationContainer>
  );
}




 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    
  },
  
 login:{
   fontSize:25,
   backgroundColor:'dodgerblue',height:45,
   width:'70%',
   textAlign:'center'
   ,paddingBottom:10,paddingTop:5,
   borderRadius:3,color:'white',
 }
  ,
 placeholder:{
   color:'gray',textAlign:'left',paddingBottom:10,
   marginLeft:-150,fontSize:18
 }
 ,
  inputView: {
    backgroundColor: "whitesmoke",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    borderColor:'#ccc',
    textAlign:'left'
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 20,
  },
 
  // loginBtn: {
  //   width: "50%",
  //   borderRadius: 25,
  //   height: 50,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   marginTop: 40,
  //   backgroundColor: "#FF1493",
  // },
});