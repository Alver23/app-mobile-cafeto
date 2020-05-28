import React, { FC } from 'react';
import { View } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import { configService } from '../../config';
import { Props } from './interface';
import styles, { iconStyle } from './styles';

MapboxGL.setAccessToken(configService.get('mapBoxToken'));

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
