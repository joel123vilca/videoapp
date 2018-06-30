import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Numero = props => (
	<TextInput
		style={styles.numero}
		value={props.num1}
		nome='num1'
	/>
);
export  { Numero };

const styles = StyleSheet.create({
	numero: {
		width: 140,
		height: 80,
		fontSize: 20,
		backgroundColor:'gray',
	}
});
