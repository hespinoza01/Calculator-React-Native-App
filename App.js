import React, { Component } from 'react';
import { View } from 'react-native';

import NumberKeys from './components/NumberKeys';

import Styles from './Styles';

export default class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <View style={Styles.containerGrid}>
        <NumberKeys/>
      </View>
    );
  }
}
