'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  Image,
} from 'react-native';

export default class Login extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:'',
        }
    }

    _onPasswordTextChanged = (event) => {
        this.setState({ password: event.nativeEvent.text });
    };

    _onUsernameTextChanged = (event) => {
        console.log(event.nativeEvent.text);
        this.setState({ username: event.nativeEvent.text });
    };

    _onLoginPressed = () => {
        console.log("Username:"+this.state.username + "  |  Password:"+this.state.password);
        //TODO
     };

    render() {
        console.log(this.state);
        return(
            <View style = {styles.container}>
                <View style = {styles.flowRight}>
                    <TextInput
                        style={styles.input}
                        value={this.state.username}
                        onChange={this._onUsernameTextChanged}
                        placeholder='Username'/>
                    
                    <TextInput
                        style={styles.input}
                        value={this.state.password}
                        onChange={this._onPasswordTextChanged}
                        placeholder='Password'/>

                    <Button
                        onPress={this._onLoginPressed}
                        color='#48BBEC'
                        title='Login'
                    />
                </View>
            </View>  
        );  
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        marginTop: 65,
        alignItems: 'center',
        borderColor:'black'
      },
      flowRight: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
      },
      input: {
        height: 36,
        padding: 4,
        marginRight: 5,
        flexGrow: 1,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 8,
        color: '#48BBEC',
    },
});