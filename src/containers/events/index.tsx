// Dependencies
import React, {Component } from "react";
import {connect, ConnectedProps} from 'react-redux';
import {Button, SafeAreaView} from "react-native";

// Components
import {CardList} from './../../components/card';
import { LoadingIndicator } from "../../components";

// Models
import {Props} from "./event-interface";

// Styles
import styles from './styles';

// Redux
import { getEvents } from "./actions";
import {selectEvents, selectLoading} from "./selectors";
import { logoutRequest } from "../../store/actions/login";


const mapStateToProps = state => ({
    events: selectEvents(state),
    loading: selectLoading(state),
})

const mapDispatchToProps = dispatch => ({
    getEvents: () => dispatch(getEvents()),
    logout: () => dispatch(logoutRequest()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type PropsType = PropsFromRedux & Props;

class EventsContainer extends Component<PropsType, any> {

    componentDidMount() {
        this.props.getEvents();
    }

    onSelectedEvent({ id }) {
        this.props.navigation.navigate('EventDetail', { id });
    }

    render() {
        const { events, loading } = this.props;
        return loading ? (
            <LoadingIndicator/>
        ) : (
            <SafeAreaView style={styles.container}>
                <CardList items={events || []} onSelectedOption={this.onSelectedEvent.bind(this)} />
                <Button
                    title="Logout"
                    onPress={() => this.props.logout()}
                />
            </SafeAreaView>
        );
    }
}

export default connector(EventsContainer);

