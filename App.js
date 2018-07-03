/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
//login con facebook
import React, { Component } from 'react';
import {
  Text,
} from 'react-native';
import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list.js';
import API from './utils/api';

type Props = {};
export default class App extends Component<Props> {
  state = {
    suggestionList: []
  }
  async componentDidMount(){
    const movies = await API.getSuggestion(10);
    console.log(movies);
    this.setState({
      suggestionList: movies,
    })
  }
  render() {
    return (
        <Home>
          <Header/>
          <SuggestionList
            list={this.state.suggestionList}
           />
        </Home>
    );
  }
}
//al usar await necesitas de async
//https://www.tutorialspoint.com/react_native/react_native_text_input.htm
// import React, { Component } from 'react'
// import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
//
// import {Topo} from './components';
// export default class App extends Component<Props> {
//   state = {
//      num1: '',
//      resultado: '',
//   }
//   handlePies = (text) => {
//      this.setState({ num1: text })
//   }
//    handleMetro = (text) => {
//      this.setState({ num2: text })
//   }
//  //  handlePeriodo = (text) => {
//  //    this.setState({ num3: text })
//  // }
//   calcular = (num1,num2) => {
//       numero1= parseFloat(num1);
//       numero2= parseFloat(num2);
//       //numero3 = parseFloat(num3);
//       metros=0;
//       suma= 0;
//       suma = numero1*0.3048;
//       metros = suma + numero2;
//       pulgadas = 0;
//       yardas = 0;
//       millas = 0;
//       pulgadas= metros*39.3701;
//       pulgadas = pulgadas.toFixed(3);
//       yardas=metros*1.09361;
//       yardas=yardas.toFixed(3);
//       millas=metros*0.00062;
//       millas = millas.toFixed(2);
//
//
//       	this.setState({ pulgadas: pulgadas.toString() });
//         this.setState({ yardas: yardas.toString() });
//         this.setState({ metros: metros.toString() });
//         this.setState({ millas: millas.toString() });
//         // resultados = resultado - numero1;
//         // this.setState({ resultados: resultados.toString() });
//
//   }
//
//   render() {
//     return (
//       <View style = {styles.container}>
//         <Topo/>
//          <TextInput style = {styles.input}
//             underlineColorAndroid = "transparent"
//             placeholder = "Ingrese cantidad Pies"
//             placeholderTextColor = "#9a73ef"
//             autoCapitalize = "none"
//             onChangeText = {this.handlePies}/>
//         <TextInput style = {styles.input}
//                underlineColorAndroid = "transparent"
//                placeholder = "Ingrese cantidad Metros"
//                placeholderTextColor = "#9a73ef"
//                autoCapitalize = "none"
//                onChangeText = {this.handleMetro}/>
//          <TouchableOpacity
//             style = {styles.submitButton}
//             onPress = {() => this.calcular(this.state.num1,this.state.num2)}>
//             <Text style = {styles.submitButtonText}> Calcular </Text>
//          </TouchableOpacity>
//          <Text style = {styles.respuesta}>
//             pulgadas: {this.state.pulgadas}
//           </Text>
//           <Text style = {styles.respuesta}>
//              yardas: {this.state.yardas}
//            </Text>
//           <Text style = {styles.respuesta}>
//               metros: {this.state.metros}
//           </Text>
//          <Text style = {styles.respuesta}>
//              millas: {this.state.millas}
//          </Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//    container: {
//       paddingTop: 23
//    },
//    input: {
//       margin: 15,
//       height: 40,
//       borderColor: '#7a42f4',
//       borderWidth: 1
//    },
//    submitButton: {
//       backgroundColor: '#7a42f4',
//       padding: 10,
//       margin: 15,
//       height: 40,
//    },
//    submitButtonText:{
//       color: 'white',
//       fontSize: 20
//    },
//    respuesta: {
//      alignItems: 'center',
//      fontSize: 20,
//    }
// })
