//import liraries
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Splash from './Screens/Splash';
import Principal from './Screens/Principal';
import Antecedentes from './Screens/Antecedentes';
import Personal  from './Screens/Personal';
import Toxicos from './Screens/Toxicos';
import Embarazo from './Screens/Embarazo';
import Animo from './Screens/Animo';
import Alimentacion from './Screens/Alimentacion'

const RootStack = createStackNavigator({
  Splash: Splash,
  Principal: Principal,
  Antecedentes: Antecedentes,
  Personal: Personal,
  Toxicos: Toxicos,
  Embarazo: Embarazo,
  Animo: Animo,
  Alimentacion: Alimentacion,
}, {
  initialRouteName: 'Principal',
});

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer /> ;
  }
}