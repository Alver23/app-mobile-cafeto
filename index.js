/**
 * @format
 */

import 'react-native-gesture-handler'; // Not remove

import { Provider } from 'react-redux';
import store from './src/store';
import React, { Component } from 'react';

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

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
