import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

export class LoginContainer extends Component {
    render() {
        return (
            <View>
                <View>
                    <Text>Email:</Text>
                    <TextInput />
                </View>
                <View>
                    <Text>Password:</Text>
                    <TextInput />
                </View>
            </View>
        );
    }
}
