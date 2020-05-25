// Dependencies
import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native';

// Components
import { FooterActions } from './components';
import { Card, CardHeader, CardBody, Map } from '../../components';

// Models
import { Props } from './event-detail-interface';

// Styles
import styles from './styles';

// Redux
import { selectEventById } from '../events/selectors';

const mapStateToProps = (state, props) => ({
	event: selectEventById(state, props),
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type PropsType = PropsFromRedux & Props;

class EventDetailContainer extends Component<Props, any> {
	constructor(props) {
		super(props);
	}

	getShapeData() {
		const { event } = this.props;
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
		const { event } = this.props;
		const {
			title,
			description,
			imageUrl,
			isOwner,
			latitude,
			longitude,
		} = event;
		return (
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
				{isOwner ? (
					<FooterActions
						clickEdit={() => console.log('edit event')}
						clickRemove={() => console.log('remove event')}
					/>
				) : null}
			</SafeAreaView>
		);
	}
}
export default connector(EventDetailContainer);
