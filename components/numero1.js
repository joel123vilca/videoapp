import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Numero1 = props => (
	<TextInput
		style={styles.numero}
		value={props.num2}
	/>
);

export  { Numero1 };
const styles = StyleSheet.create({
	numero: {
		width: 140,
		height: 80,
		fontSize: 20,
		backgroundColor:'gray',
	}
});
