import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default props => (
	<View>
		<TextInput style={styles.visor1}
			placeholder='Resultado1'
			editable={false}
			value={props.resultados}
		/>
	</View>
);

const styles = StyleSheet.create({
	visor1: {
		height: 100,
		fontSize: 30,
    backgroundColor:'green',
	}
});
