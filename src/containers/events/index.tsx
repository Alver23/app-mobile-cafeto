import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { SafeAreaView } from 'react-native';
import { LoadingIndicator, Button, CardList, Footer } from '../../components';
import { Props } from './event-interface';
import styles from './styles';
import { BUTTON_VARIANT_TYPES, BUTTON_SIZE_TYPES } from '../../core/theme';
import { getEvents } from './actions';
import { selectEvents, selectLoading, selectRefreshing } from './selectors';
import { logoutRequest } from '../../store/actions/login';

const mapStateToProps = (state) => ({
	events: selectEvents(state),
	loading: selectLoading(state),
	refreshing: selectRefreshing(state),
});

const mapDispatchToProps = (dispatch) => ({
	getEvents: (refreshing) => dispatch(getEvents(refreshing)),
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

	onRefresh() {
		this.props.getEvents(true);
	}

	render() {
		const { events, loading, refreshing } = this.props;
		return loading ? (
			<LoadingIndicator />
		) : (
			<SafeAreaView style={styles.container}>
				<CardList
					items={events || []}
					refreshing={refreshing}
					onRefresh={this.onRefresh.bind(this)}
					onSelectedOption={this.onSelectedEvent.bind(this)}
				/>
				<Footer>
					<Button
						title="New event"
						size={BUTTON_SIZE_TYPES.small}
						variant={BUTTON_VARIANT_TYPES.primary}
						onClick={() => this.props.navigation.navigate('EventForm')}
					/>
					<Button
						title="Logout"
						size={BUTTON_SIZE_TYPES.small}
						variant={BUTTON_VARIANT_TYPES.primary}
						onClick={() => this.props.logout()}
					/>
				</Footer>
			</SafeAreaView>
		);
	}
}

export default connector(EventsContainer);
