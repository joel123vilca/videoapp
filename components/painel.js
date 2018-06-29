import React from 'react';
import { View } from 'react-native';

import Entrada from './entrada';
import Operacion from './operacion';
import Comando from './comando';

const Painel = props => (
	<View>
		<Entrada
			num1={props.num1}
			num2={props.num2}
			atualizaValor={props.atualizaValor}
		/>
		<Operacion
			operacion={props.operacion}
			atualizaOperacion={props.atualizaOperacion}
		/>
		<Comando acao={props.calcular} />
	</View>
);

export { Painel };
