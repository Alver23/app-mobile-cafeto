// Dependencies
import React, {Component } from "react";
import {connect, ConnectedProps} from 'react-redux';
import {View, Text} from "react-native";


const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props {

}

type PropsType = PropsFromRedux & Props;


class EventsContainer extends Component<PropsType, any> {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Este es el home de eventos</Text>
            </View>
        );
    }
}

export default connector(EventsContainer);

