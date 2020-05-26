// Dependencies
import React, { FC } from 'react';
import { View } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

// Service
import { configService } from '../../config';

MapboxGL.setAccessToken(configService.get('mapBoxToken'));

// Models
import { Props } from './interface';

// Styles
import styles, { iconStyle } from './styles';

const component: FC<Props> = ({ mapId, data, centerCoordinate }) => {
	return (
		<View style={styles.mainContainer}>
			<View style={styles.mapContainer}>
				<MapboxGL.MapView style={styles.map}>
					<MapboxGL.Camera
						zoomLevel={16}
						animationMode={'flyTo'}
						centerCoordinate={centerCoordinate}
					/>
					<MapboxGL.ShapeSource id={mapId} shape={data}>
						<MapboxGL.SymbolLayer id="iconMap" style={iconStyle} />
					</MapboxGL.ShapeSource>
				</MapboxGL.MapView>
			</View>
		</View>
	);
};

export default component;
