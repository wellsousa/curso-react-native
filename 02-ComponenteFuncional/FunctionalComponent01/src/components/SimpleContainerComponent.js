import React from 'react';
import {View, Text} from 'react-native';

/*
    Você precisará criar um container sempre que quiser
    retornar mais de um componente ao mesmo tempo, isso porque,
    uma function ou uma ArrowFunction só permite um retorno.

    Nesse exemplo, o nosso container é uma View.

    o return está implicito em Arrow Functions.
*/

export default props =>
    <View>
        <Text>Component 1: {props.ownText}</Text>
        <Text>Component 2: {props.ownText}</Text>
    </View>


/*
    CODIGO EQUIVALENTE

    export default function(props){
        return(
            <View>
                <Text>Component 1: {props.ownText}</Text>
                <Text>Component 2: {props.ownText}</Text>
            </View>
        );
    }
*/