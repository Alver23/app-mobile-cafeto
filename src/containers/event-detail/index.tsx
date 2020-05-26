// Dependencies
import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import {
	View,
	Text,
	Image,
	SafeAreaView,
	ScrollView,
	Alert,
} from 'react-native';

// Components
import { FooterActions } from './components';
import {
	Card,
	CardHeader,
	CardBody,
	Map,
	LoadingIndicator,
} from '../../components';

// Models
import { Props } from './interface';

// Styles
import styles from './styles';

// Redux
import { getEvents } from '../events/actions';
import { loading, removeEventSuccess, deleteEvent } from './actions';
import { selectLoading, selectError, selectResponse } from './selectors';
import { selectEventById } from '../events/selectors';

const mapStateToProps = (state, props) => ({
	event: selectEventById(state, props),
	loading: selectLoading(state),
	error: selectError(state),
	response: selectResponse(state),
});

const mapDispatchToProps = (dispatch) => ({
	delete: (payload: number) => dispatch(deleteEvent(payload)),
	resetActions: () => {
		dispatch(loading(false));
		dispatch(removeEventSuccess(''));
		dispatch(getEvents());
	},
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type PropsType = PropsFromRedux & Props;

class EventDetailContainer extends Component<PropsType, any> {
	constructor(props) {
		super(props);
	}

	onCloseAlert() {
		this.props.navigation.navigate('Events');
		this.props.resetActions();
	}

	getShapeData() {
		const { event = {} } = this.props;
		const { id, title, description, latitude, longitude } = event;
		return {
			type: 'FeatureCollection',
			features: [
				{
					id,
					title,
					description,
					type: 'Feature',
					properties: {
						icon: 'iconMap',
					},
					geometry: {
						type: 'Point',
						coordinates: [longitude, latitude],
					},
				},
			],
		};
	}
	render() {
		const { event, response, loading: loadingIndicator } = this.props;
		const {
			id,
			title,
			description,
			imageUrl,
			isOwner,
			latitude,
			longitude,
		} = event;
		return loadingIndicator ? (
			<LoadingIndicator />
		) : (
			<SafeAreaView style={styles.container}>
				<ScrollView style={styles.scrollContainer}>
					<View style={styles.container}>
						<Card>
							<CardHeader>
								<Text>{title}</Text>
							</CardHeader>
							<CardBody>
								{!!description && <Text>{description}</Text>}
								{!!imageUrl && (
									<View style={styles.imageContainer}>
										<Image style={styles.image} source={{ uri: imageUrl }} />
									</View>
								)}
							</CardBody>
						</Card>
					</View>
					<Map
						mapId={'eventDetail'}
						data={this.getShapeData()}
						centerCoordinate={[longitude, latitude]}
					/>
				</ScrollView>
				{!!isOwner && (
					<FooterActions
						clickEdit={() => console.log('edit event')}
						clickRemove={() => this.props.delete(id)}
					/>
				)}
				{!!response &&
					Alert.alert(
						'Alert',
						response,
						[{ text: 'OK', onPress: () => this.onCloseAlert() }],
						{ cancelable: false },
					)}
			</SafeAreaView>
		);
	}
}
export default connector(EventDetailContainer);
