
import React from 'react';
import {Text} from 'react-native';

/*
ArrowFunctions e functions são essencialmente a mesma coisa.
ArrowFunctions foram intruzidas no ECMAScript para criar codigos 
mais enxutos e limpos.
*/

export default props => <Text>ArrowFunction: {props.ownText}</Text>;

/*
    CODIGO EQUIVALENTE

    export default function(props){
        <Text>ArrowFunction: {props.ownText}</Text>
    }
*/