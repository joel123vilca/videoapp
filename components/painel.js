import React from 'react';
import { View } from 'react-native';

import Entrada from './entrada';

import Comando from './comando';

const Painel = props => (
	<View>
		<Entrada
			num1={props.num1}
			num2={props.num2}
		/>
		 <Comando acao={props.calcular} />
	</View>

);

export { Painel };
