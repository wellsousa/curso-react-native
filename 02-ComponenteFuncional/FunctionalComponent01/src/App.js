import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SimpleComponent from './components/SimpleComponent';
import SimpleArrowComponent from './components/SimpleArrowComponent';
import SimpleContainerComponent from './components/SimpleContainerComponent';
import SimpleComponentArray from './components/SimpleComponentArray';

export default class App extends React.Component{
  render(){
    return(
      <View style={styles.container}>
          <SimpleComponent ownText='Criando um componente funcional.'/>
          <SimpleArrowComponent ownText='Criando um componente funcional..'/>
          <SimpleContainerComponent ownText="Criando um Container para componentes" />
          <SimpleComponentArray  ownText="Criando um array de componentes."/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  f40:{
    fontSize: 40
  }
});