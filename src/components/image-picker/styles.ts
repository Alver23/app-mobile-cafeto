import { StyleSheet, PixelRatio } from 'react-native';

export default StyleSheet.create({
	mainContainer: {
		alignItems: 'center',
		margin: 8,
	},
	imageContainer: {
		borderColor: '#9B9B9B',
		borderWidth: 1 / PixelRatio.get(),
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		borderRadius: 75,
		width: 150,
		height: 150,
	},
});
