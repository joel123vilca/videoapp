import React, { Component } from 'react';
import { Picker, StyleSheet } from 'react-native';

export default class Operacion extends Component {
	render() {
		return (
			<Picker
				style={styles.operacion}
				selectedValue={this.props.operacion}
				onValueChange={op => { this.props.atualizaOperacion(op); }}
			>
				<Picker.Item label='Suma' value='soma' />
				<Picker.Item label='Sustraccion' value='subtracao' />
			</Picker>
		);
	}
}

const styles = StyleSheet.create({
	operacion: {
		marginTop: 15,
		marginBottom: 15
	}
});
