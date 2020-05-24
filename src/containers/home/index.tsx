import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';

// Containers

import EventsContainer from './../events';
import { logoutRequest } from "../../store/actions/login";

import { Props } from "./home-interface";

class HomeContainer extends Component<Props, any> {
    constructor(props) {
        super(props);
    }

    onLogout = () => {
        this.props.logout();
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <EventsContainer />
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
                <Button
                    title="Logout"
                    onPress={() => this.onLogout()}
                />
            </View>
        );
    }
}


const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logoutRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
