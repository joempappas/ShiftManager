'use strict'

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  NavigatorIOS
} from 'react-native';
import Login from './Login';

export default class App extends Component<{}> {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Shift Manager',
          component: Login,
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
