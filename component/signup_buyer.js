import React, { useState} from 'react';
import {Button, View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import LoginForm from './sigin.js';
import  { Component } from 'react'
import {Text, TouchableOpacity, TextInput } from 'react-native'

class Inputs extends Component {

   state = {
      email: '',
      password: ''
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
    handleRePswd = (text) => {
      this.setState({ repswd: text })
   }

 handleName = (text) => {
      this.setState({ username: text })
   }
//trigger
   login = (email, pass) => {
      alert('email: ' + email + ' password: ' + pass)
   }
   render() {
      return (
<View style = {styles.container}>
<Text style={{color:'red',textAlign:'left',paddingLeft:5,paddingBottom:5}}> Company  or buyer name required</Text>
         <TextInput style = {styles.input}
                 placeholder = "Name"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleName}/>
          
            <TextInput style = {styles.input}
                 placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            <Text style={{color:'red',paddingBottom:5,paddingLeft:5}} 
            >Google authenticated password required</Text>
            <TextInput style = {styles.input}
                 placeholder = "Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
               
            <TextInput style = {styles.input}
               placeholder = "Re-Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleRePswd}/>

            <TouchableOpacity
            
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Login </Text>

           
            </TouchableOpacity>
                < Modalinput />
            
         </View>
      )
   }


}


const Modalinput = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  
  return (

    <View style={stylesmodal.container}>




     

   <View style={stylesmodal.btnview}>
    <Button title="Account Already?" 
 onPress={toggleModal} 
  style={stylesmodal.btn}
  
  />
   </View>

 
     
      <Modal
        isVisible={isModalVisible}>
        <View>
          <LoginForm />
        <View>
            <Button title="Cancel"
            
            onPress={toggleModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};
const stylesmodal = StyleSheet.create({
  container: {
    textAlign:'center'
     
  },
  btn:{
    paddingTop:23,
    
  }
  ,btnview:{
    width:200,
    
    textAlign:'center',
    marginLeft:'22%' ,  marginTop:'30%',
     
  }
});
const styles = StyleSheet.create({
   container: {
      paddingTop: 23,
      marginTop:'10%'
   },
   input: {
       
      height: 40,
      borderColor: 'orange',
      borderWidth: 1,
      width:345,
      paddingLeft:9,
      borderRadius:9,
      marginRight:10,
      marginLeft:9,
      marginBottom:25
   },
   submitButton: {
      backgroundColor: 'orange',
      height: 40,
      width:180,
      borderRadius:9,
      paddingTop:10,
      paddingBottom:5,
      marginLeft:'20%',
   },
   submitButtonText:{ 
   textAlign:'center',
      color:'black',
      fontSize:18,
   }
})

export default Inputs
// export  default Modalinput