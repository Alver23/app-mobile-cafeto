/**
 * @format
 */

import 'react-native-gesture-handler'; // Not remove

import {decode, encode} from 'base-64'

if (!global.btoa) {
    global.btoa = encode;
}

if (!global.atob) {
    global.atob = decode;
}

import { Provider } from 'react-redux';
import { configureStore } from './src/store';
import React, { Component } from 'react';

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

const store = configureStore();

class AppTemplate extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

AppRegistry.registerComponent(appName, () => AppTemplate);
