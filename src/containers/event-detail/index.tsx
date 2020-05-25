// Dependencies
import React, {Component} from "react";
import { View, Text} from 'react-native';

class EventDetailContainer extends Component<any> {
    render() {
        console.log(this.props.route)
        return (
            <View>
                <Text>Event Detail</Text>
            </View>
        );
    }
}

export default EventDetailContainer;
