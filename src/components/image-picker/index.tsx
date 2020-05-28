// Dependencies
import React, {FC, useState} from "react";
import {Image, Text, View, TouchableOpacity, ActivityIndicator, Platform} from "react-native";
import ImagePicker from 'react-native-image-picker';

import { colors } from '../../core/theme';
const { ios: iosTheme, android: androidTheme } = colors;

import { config } from "./config";
import styles from './styles'

import { Props } from "./interface";

const component: FC<Props> = ({ source, selectedImage }) => {
  const [imageSource, setImageSource] = useState(null);
  const [loading, setLoading] = useState(false);

  const selectPhotoTapped = () => {
    setLoading(true);
    ImagePicker.showImagePicker(config, (response) => {
      if (!(response.didCancel && response.error && response.customButton) && response.uri) {
        let { uri, type } = response;
        setImageSource({ uri });
        const fileName = `image-${Date.now()}`;
        selectedImage({uri, type, fileName });
      }
      setLoading(false);
    });
  }

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={selectPhotoTapped}>
        <View
          style={[styles.image, styles.imageContainer, {marginBottom: 20}]}>
          {loading ? (
            <ActivityIndicator
              size="large"
              color={Platform.OS === 'ios' ? iosTheme.primary : androidTheme.primary}
            />
          ) : (imageSource !== null || source) ?
            (<View style={styles.imageContainer}><Image style={styles.image} source={imageSource || source} /></View>) : (<Text>Select a Photo</Text>)
          }

        </View>
      </TouchableOpacity>
    </View>
  )
}

export default component;
