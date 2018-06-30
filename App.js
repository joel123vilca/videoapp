/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
// import {
//   Text,
// } from 'react-native';
// import Home from './src/screens/containers/home';
// import Header from './src/sections/components/header';
//
// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//         <Home>
//           <Header/>
//         </Home>
//     );
//   }
// }
//https://www.tutorialspoint.com/react_native/react_native_text_input.htm
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

import {Topo} from './components';
export default class App extends Component<Props> {
  state = {
     num1: '',
     num2: '',
     resultado: '',
     resultados: '',
     area:''
  }
  handleEmail = (text) => {
     this.setState({ num1: text })
  }
  handlePassword = (text) => {
     this.setState({ num2: text })
  }
  login = (num1, num2) => {
      numero1= Math.pow(parseFloat(num1),2);
      numero2= Math.pow(parseFloat(num2),2);
      resultado = Math.sqrt(numero1 + numero2);
      	this.setState({ resultado: resultado.toString() });
        resultados = parseFloat(num1) + parseFloat(num2) + resultado;
        this.setState({ resultados: resultados.toString() });
        area = parseFloat(num1)*parseFloat(num2)/2;
        this.setState({ area: area.toString() });

  }

  render() {
    return (
      <View style = {styles.container}>
        <Topo/>
         <TextInput style = {styles.input}
            underlineColorAndroid = "transparent"
            placeholder = "Numero 1"
            placeholderTextColor = "#9a73ef"
            autoCapitalize = "none"
            onChangeText = {this.handleEmail}/>

         <TextInput style = {styles.input}
            underlineColorAndroid = "transparent"
            placeholder = "Numero 2"
            placeholderTextColor = "#9a73ef"
            autoCapitalize = "none"
            onChangeText = {this.handlePassword}/>

         <TouchableOpacity
            style = {styles.submitButton}
            onPress = {() => this.login(this.state.num1, this.state.num2)}>
            <Text style = {styles.submitButtonText}> Calcular </Text>
         </TouchableOpacity>
         <Text style = {styles.respuesta}>
            Respuesta 1: {this.state.resultado}
          </Text>
           <Text style = {styles.respuesta}>
              Respuesta 2: {this.state.resultados}
            </Text>
            <Text style = {styles.respuesta}>
               Respuesta 3: {this.state.area}
             </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white',
      fontSize: 20
   },
   respuesta: {
     alignItems: 'center',
     fontSize: 20,
   }
})
