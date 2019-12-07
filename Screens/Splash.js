//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Image, StatusBar, TouchableOpacity, Text, Button} from 'react-native';

class Splash extends Component {
  static navigationOptions = { header: null } 
  render() {
    return (
      
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#ffff"
          barStyle="dark-content"
        />
        
        <Image
          style={styles.logo}
          source={require('../src/assets/logomed.png')}
        />
        </View>
        
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DFF3FF',
  },
  logo: {
    width: '100%',
    height: '10%'
  }
});

export default Splash;