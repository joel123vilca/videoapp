import React from 'react';
import { StyleSheet, View } from 'react-native';
import Numero from './numero';
import Numero1 from './numero1';

const Entrada = props => (
	<View style={styles.numeros}>
		 <Numero num1={props.num1} nome='num1' />
		 <Numero1 num2={props.num2} nome='num2' />
	</View>
);
export {Entrada};
const styles = StyleSheet.create({
	numeros: {
		flexDirection: 'column',
		flex:-10,
		justifyContent: 'space-between'
	}
})
