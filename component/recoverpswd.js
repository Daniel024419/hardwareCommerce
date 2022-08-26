import React, { useState } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';

export default function App() {
  const [result, setResult] = useState(null);

  const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync('https://accounts.google.com/signin/v2/usernamerecovery?continue=https%3A%2F%2Fmyaccount.google.com%2Frecovery%2Femail%3Fpli%3D1&service=accountsettings&osid=1&rart=ANgoxcf4WqiqYGKbhtZ9bTV0kab22SnnlHIQJqRHpjlrD1dBzFR0GoThzlISTUaFKnb1omYWb1_4ZLY4O3I-JA_5MAOyZDdx0w&TL=AKqFyY824IYmvjjYOC7pQTXll2vvRNcjVkY7cdEiztI-rqxLDi1W3-x66-YUq_uS&flowName=GlifWebSignIn&cid=2&flowEntry=ServiceLogin&lid=2');
    setResult(result);
  };
  return (

    <View style={styles.container}>
      <Button title="Recover Password" onPress={_handlePressButtonAsync} />
      <Text style={{color:'red'}}>*Ony Google Authenticated Account</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});
