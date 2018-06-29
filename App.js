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
import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';

import { Topo, Resultado, Painel } from './components';

export default class App extends Component {

	constructor(props) {
		super(props);

		this.state = { num1: '', num2: '', operacion: 'soma', resultado: '' };

		this.calcular = this.calcular.bind(this);
		this.atualizaValor = this.atualizaValor.bind(this);
		this.atualizaOperacion = this.atualizaOperacion.bind(this);
	}

	calcular() {
		let resultado = 0;

		switch (this.state.operacion) {
			case 'soma':
				resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
				break;

			case 'subtracao':
				resultado = parseFloat(this.state.num1) - parseFloat(this.state.num2);
				break;

			default:
				resultado = 0;
		}

		this.setState({ resultado: resultado.toString() })
	}

	atualizaOperacion(operacion) {
		this.setState({ operacion });
	}

	atualizaValor(nomeCampo, numero) {
		const obj = {};
		obj[nomeCampo] = numero;

		this.setState(obj);
	}

	render() {
		return (
        <SafeAreaView>
		<View>
			<Topo />
			<Painel
				num1={this.state.num1}
				num2={this.state.num2}
				operacion={this.state.operacion}
				calcular={this.calcular}
				atualizaOperacion={this.atualizaOperacion}
				atualizaValor={this.atualizaValor}
			/>
      <Resultado resultado={this.state.resultado} />
		</View>
      </SafeAreaView>
		);
	}
};
