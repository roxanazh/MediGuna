//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Image, StatusBar, TouchableOpacity, Text, Button} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

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

        <Text style={styles.text1}>Escoja la categoría que desea realizar</Text>
        
        <TouchableOpacity onPress= {(() => {this.props.navigation.navigate('Personal')})}>
          <Image
            style={styles.personal} 
            source={require('../src/assets/personal.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.boton} onPress= {(() => {this.props.navigation.navigate('Antecedentes')})}>
          <Image
            style={styles.personal1} 
            source={require('../src/assets/antecedentes.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.boton2} onPress= {(() => {this.props.navigation.navigate('Animo')})}>
          <Image
            style={styles.personal2} 
            source={require('../src/assets/animos.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.boton3} onPress= {(() => {this.props.navigation.navigate('Alimentacion')})}>
          <Image
            style={styles.personal3} 
            source={require('../src/assets/alimentacion.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.boton4} onPress= {(() => {this.props.navigation.navigate('Toxicos')})}>
          <Image
            style={styles.personal4} 
            source={require('../src/assets/toxico.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.boton5} onPress= {(() => {this.props.navigation.navigate('Embarazo')})}>
          <Image
            style={styles.personal5} 
            source={require('../src/assets/embarazo.png')}
          />
        </TouchableOpacity>

        </View>
        
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#DFF3FF',
  },
  logo: {
    width: '100%',
    height: '10%',
    marginTop: '5%',
  },
  text1: {
    marginTop: '10%',
  },
  personal: {
    width: 96,
    height: 90,
    marginTop: '5%',
  },
  personal1: {
    width: 96,
    height: 90,
  },
  boton: {
    left: 100
  },
  personal2: {
    width: 96,
    height: 90,
  },
  boton2: {
    right: 100,
    bottom: 90
  },
  personal3: {
    width: 96,
    height: 90,
  },
  boton3: {
    right: 100,
    bottom: 70
  },
  personal4: {
    width: 96,
    height: 90,
  },
  boton4: {
    left: 100,
    bottom: 160
  },
  personal5: {
    width: 96,
    height: 90,
  },
  boton5: {
    bottom: 160,
  }
});

export default Splash;