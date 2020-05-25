// Dependencies
import React, { FC } from "react";
import { View } from "react-native";
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL
    .setAccessToken('pk.eyJ1IjoiYWx2ZXIyMyIsImEiOiJja2FtNnZobTEwMjd5MnFsdTBmd2c5bGI2In0.tU-ldGBRyBON1FQLpzKvCA');

// Models
import { Props } from "./interface";

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
                    <MapboxGL.ShapeSource
                        id={"eventDEtail"}
                        shape={data}>
                        <MapboxGL.SymbolLayer id="iconMap" style={iconStyle} />
                    </MapboxGL.ShapeSource>
                </MapboxGL.MapView>
            </View>
        </View>
    );
}

export default component;
