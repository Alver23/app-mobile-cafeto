import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';

// Containers
import { logoutRequest } from "../../store/actions/login";

// Styles
import Styles from './styles';

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
            <View style={Styles.container}>
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
