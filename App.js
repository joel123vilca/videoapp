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
  }
  handleMonto = (text) => {
     this.setState({ num1: text })
  }
 //   handleInteres = (text) => {
 //     this.setState({ num2: text })
 //  }
 //  handlePeriodo = (text) => {
 //    this.setState({ num3: text })
 // }
  calcular = (num1) => {
      numero1= parseFloat(num1);
      //numero2= parseFloat(num2);
      //numero3 = parseFloat(num3);
      monto = 0;
      vventa = 0;
      impuesto = 0;
      vfactura = 0;
      dsct = '';
      if(numero1 > 100){
        monto = numero1*0.3;
        dsct = '30%';
      }else if(numero1>60){
        monto = numero1*0.2;
        dsct = '20%'
      }else if(numero1>30){
        monto = numero1*0.15;
        dsct='15%';
      }else {
        monto = numero1*0.1;
        dsct = '10%';
      }
        vventa = numero1 - monto;
      	this.setState({ vventa: vventa.toString() });
        this.setState({ dsct: dsct.toString() });
        impuesto = vventa*0.18;
        this.setState({ impuesto: impuesto.toString() });
        vfactura = vventa + impuesto;
        this.setState({ vfactura: vfactura.toString() });
        // resultados = resultado - numero1;
        // this.setState({ resultados: resultados.toString() });

  }

  render() {
    return (
      <View style = {styles.container}>
        <Topo/>
         <TextInput style = {styles.input}
            underlineColorAndroid = "transparent"
            placeholder = "Ingrese cantidad de la compra"
            placeholderTextColor = "#9a73ef"
            autoCapitalize = "none"
            onChangeText = {this.handleMonto}/>


         <TouchableOpacity
            style = {styles.submitButton}
            onPress = {() => this.calcular(this.state.num1)}>
            <Text style = {styles.submitButtonText}> Calcular </Text>
         </TouchableOpacity>
         <Text style = {styles.respuesta}>
            valor de la venta: {this.state.vventa}
          </Text>

          <Text style = {styles.respuesta}>
             Descuento: {this.state.dsct}
           </Text>
          <Text style = {styles.respuesta}>
              Impuesto: {this.state.impuesto}
          </Text>
         <Text style = {styles.respuesta}>
             valor de la factura: {this.state.vfactura}
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
