import React from 'react';
import { Text } from 'react-native';
import { validationsStyle } from '../../core/theme';

export default ({ message }) => (message ? <Text style={validationsStyle.error}>{message}</Text> : <></>);
