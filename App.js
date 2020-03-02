import React, { Component } from 'react';
import { View, Alert } from 'react-native';

import NumberKeys from './components/NumberKeys';

import Styles from './Styles';

export default class App extends Component {
  constructor(props){
    super(props);

    this.onPressNumberKey = this.onPressNumberKey.bind(this);
  }
  
  onPressNumberKey(value){
    Alert.alert('Pressed', `${value}`)
  }

  render(){
    return (
      <View style={Styles.containerGrid}>
        <NumberKeys onPressKey={this.onPressNumberKey}/>
      </View>
    );
  }
}
