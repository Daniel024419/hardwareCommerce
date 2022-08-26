import React from 'react';
 
import { Alert, View, StyleSheet, SafeAreaView, FlatList, Text,Image} from 'react-native';


const topnav=()=>{

return(
<View>
<Text style={style.name}>EASYWARE
<Text >  </Text>
</Text>

 
<Image style={style.logo}
source={require('./pictures/userprofile.jpg')}
/>

</View>

)


}
export default topnav;

const style=StyleSheet.create({
 
 name:{

   color:'gray',
   fontSize:25,
   
 }
,
logo:{
 
marginLeft:287,
borderRadius:500,
marginTop:-34
 ,height:40,width:40,
}

})