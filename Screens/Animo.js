import React, { Component } from 'react';
import { View, StyleSheet, Image, StatusBar, TouchableOpacity, Text, Button, Modal, TouchableHighlight} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class Animo extends Component {
  static navigationOptions = { header: null } 
  constructor(props) {
    super(props);

    this.state = {
      //pickerSelection: '',
      pickerDisplayed: false
    }
  }

  setPickerValue(newValue) {
    this.setState({
      pickerSelection: newValue
    })

    this.togglePicker();
  }

  togglePicker() {
    this.setState({
      pickerDisplayed: !this.state.pickerDisplayed
    })
  }

  if () {
      
  }
  render() {
      const pickerValues = [
      {
        title: '¿Cuándo fue el último periodo?',
        value: '¿Ingu nabbi igar be dagsa?'
      },
      {
        title: '¿Cuándo se hizo el papanicolaou?',
        value: '¿Ingu be imagsa pap?'
      },
      {
        title: '¿Cuántos hijos tiene o ha tenido?',
        value: '¿Mimmigan war bigwa nigga?'
      },
      {
        title: '¿Cuántos niños pariste en casa?',
        value: '¿Mimmigan war bigwa neggi be niggusa?'
      },
      {
        title: '¿Cuántos niños pariste en el hospital?',
        value: '¿Mimigan war bigwa osbidalgi be niggusa?'
      },

    ]
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
        <Text style={styles.texto}>Estado de Ánimo</Text>
        <Text style={styles.texto1}>Español</Text>

        <Button 
        style={styles.pregunta}
        onPress={() => this.togglePicker()} title={ "Seleccione una pregunta" } />

        <Modal visible={this.state.pickerDisplayed} animationType={"slide"} transparent={true}>
        <ScrollView>
          <View style={{ marginTop: 150, padding: 20,
            backgroundColor: '#efefef',
            bottom: 0,
            left: 0,
            right: 0,
            alignItems: 'center',
             }}>
            <Text>Seleccione la Pregunta</Text>
            { pickerValues.map((value, index) => {
              return <TouchableHighlight key={index} onPress={() => this.setPickerValue(value.value)} style={{ paddingTop: 4, paddingBottom: 4}}>
                  <Text>{ value.title }</Text>
                </TouchableHighlight>
            })}

            
            <TouchableHighlight onPress={() => this.togglePicker()} style={{ paddingTop: 4, paddingBottom: 4 }}>
              <Text style={{ color: '#999' }}>Cancelar</Text>
            </TouchableHighlight>
          </View>
          </ScrollView>
        </Modal>
        <Text style={styles.texto1}>Guna</Text>
        <Text style={styles.traductor}>{ this.state.pickerSelection }</Text>
        </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DFF3FF',
  },
  logo: {
    width: '100%',
    height: '10%',
    marginTop: '5%',
  },
  texto1: {
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 15,
    marginBottom: 10,
  },
  traductor: {
    textAlign: 'center',
    fontWeight: 'normal',
    fontSize: 15
  },
  texto: {
    fontWeight: 'bold',
    fontSize: 27,
    textAlign: 'center',
    marginTop: 30,
    color: '#0B689B'
  },
});

export default Animo;