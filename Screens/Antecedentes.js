import React, { Component } from 'react';
import { View, StyleSheet, Image, StatusBar, TouchableOpacity, Text, Button, Modal, TouchableHighlight} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class Antecedentes extends Component {
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
        title: '¿Ha padecido hipertensión arterial?',
        value: 'Be niggusa abe irmagged binna suli?'
      },
      {
        title: '¿Ha padecido diabetes?',
        value: 'Be niggusa abossi?'
      },
      {
        title: '¿Ha padecido obesidad?',
        value: 'Be niggusa wardad?'
      },
      {
        title: '¿Ha padecido asma?',
        value: 'Be niggusa gullugullud?'
      },
      {
        title: '¿Ha padecido tuberculosis?',
        value: 'Be niggusa isddar wiagged?'
      },
      {
        title: '¿Ha padecido cáncer?',
        value: 'Be niggusa cáncer?'
      },
      {
        title: '¿Ha padecido vomito?',
        value: 'Be niggusa aged?'
      },
      {
        title: '¿Ha padecido dolor de estómago?',
        value: 'Be niggusa saban be nunmagge?'
      },
      {
        title: '¿Ha padecido dolor de cabeza?',
        value: 'Be niggusa sagla nunmagge?'
      },
      {
        title: '¿Ha padecido dolor de garganta?',
        value: 'Be niggusa gammu be nunmagge?'
      },
      {
        title: '¿Ha padecido dolor de huesos?',
        value: 'Be niggusa gar be nunmagge?'
      },
      {
        title: '¿Ha padecido dolor en la mano?',
        value: 'Be niggusa argan be nunmagge?'
      },
      {
        title: '¿Ha padecido fiebre?',
        value: 'Be niggusa uelesa?'
      },
      {
        title: '¿Ha padecido dolor en la nariz?',
        value: 'Be niggusa asu be nunmagge?'
      },
      {
        title: '¿Ha sido hospitalizado?',
        value: 'Be arbi baled osbidalgi'
      },
      {
        title: '¿Ha padecido otra enfermedad?',
        value: 'Be niggusa gannar boni'
      },
      {
        title: '¿Ha padecido mareo?',
        value: 'Be niggusa suusuu?'
      },
      {
        title: '¿Ha padecido dolor en la mandíbula?',
        value: 'Be niggusa aggu be nunmagge?'
      },
      {
        title: '¿Ha padecido comezón?',
        value: 'Be niggusa uggaaimagged?'
      },
      {
        title: '¿Ha padecido diarrea?',
        value: 'Be niggusa disegad?'
      },
      {
        title: '¿Ha padecido diarrea con sangre?',
        value: 'Be niggusa abe abe dice be nanae?'
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

        <Text style={styles.texto}>Antecedentes</Text>
        <Text style={styles.texto1}>Español</Text>

        <Button 
        style={styles.pregunta}
        onPress={() => this.togglePicker()} title={ "Seleccione una pregunta" } />

        <Modal visible={this.state.pickerDisplayed} animationType={"slide"} transparent={true}>
        <ScrollView>
          <View style={{ margin: 0, padding: 20,
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
  texto: {
    fontWeight: 'bold',
    fontSize: 27,
    textAlign: 'center',
    marginTop: 30,
    color: '#0B689B'
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
  }
});

export default Antecedentes;