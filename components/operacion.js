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
				<Picker.Item label='Suma' value='suma' />
				<Picker.Item label='Sustraccion' value='sustraccion' />
				<Picker.Item label='multiplicacion' value='multiplica' />
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
