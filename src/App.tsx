/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

// In App.js in a new project
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {DashboardNavigator, AuthNavigator} from "./navigator";

import { getToken } from "./containers/login/actions";
import { selectToken } from "./containers/login/selectors";

class App extends Component<any> {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.bootstrapAsync();
    }

    bootstrapAsync = () => {
        this.props
            .getToken();
    }

    render() {
        const { token } = this.props;
        return token ? (<DashboardNavigator></DashboardNavigator>) : (<AuthNavigator></AuthNavigator>)
    }
}

const mapStateToProps = state => ({
    token: selectToken(state),
})


const mapDispatchToProps = dispatch => ({
    getToken: () => dispatch(getToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
