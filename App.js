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
     resultado: '',
     resultados: '',
  }
  handleMonto = (text) => {
     this.setState({ num1: text })
  }
   handleInteres = (text) => {
     this.setState({ num2: text })
  }
  handlePeriodo = (text) => {
    this.setState({ num3: text })
 }
  calcular = (num1, num2 , num3) => {
      numero1= parseFloat(num1);
      numero2= parseFloat(num2);
      numero3 = parseFloat(num3);
      monto = numero1*Math.pow(1+numero2/100,numero3);
      resultado = monto.toFixed(2);
      	this.setState({ resultado: resultado.toString() });
        resultados = resultado - numero1;
        this.setState({ resultados: resultados.toString() });

  }

  render() {
    return (
      <View style = {styles.container}>
        <Topo/>
         <TextInput style = {styles.input}
            underlineColorAndroid = "transparent"
            placeholder = "Monto del Capital"
            placeholderTextColor = "#9a73ef"
            autoCapitalize = "none"
            onChangeText = {this.handleMonto}/>
        <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Porcentaje de Interes"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleInteres}/>
        <TextInput style = {styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = "Numero de Periodos"
                  placeholderTextColor = "#9a73ef"
                  autoCapitalize = "none"
                  onChangeText = {this.handlePeriodo}/>

         <TouchableOpacity
            style = {styles.submitButton}
            onPress = {() => this.calcular(this.state.num1,this.state.num2,this.state.num3)}>
            <Text style = {styles.submitButtonText}> Calcular </Text>
         </TouchableOpacity>
         <Text style = {styles.respuesta}>
            Monto total: {this.state.resultado}
          </Text>
           <Text style = {styles.respuesta}>
              interes a pagar: {this.state.resultados}
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
