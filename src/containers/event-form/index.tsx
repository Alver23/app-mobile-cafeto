import React, { Component, Fragment } from 'react';
import { Formik } from 'formik';
import { SafeAreaView, View, Alert } from 'react-native';
import { connect, ConnectedProps } from 'react-redux';
import { Button, TextInput, LoadingIndicator, TextError, ImagePicker } from '../../components';
import { BUTTON_SIZE_TYPES, BUTTON_VARIANT_TYPES } from '../../core/theme';
import { eventSchema } from './schema';
import { Props, State } from './interface';
import { formConfig } from './form-config';
import styles from './styles';
import { getEvents } from '../events/actions';
import { selectEventById } from '../events/selectors';
import { createOrUpdate, loading, saveFormSuccess } from './actions';
import { selectLoading, selectError, selectResponse } from './selectors';

const mapStateToProps = (state, props) => ({
	loading: selectLoading(state),
	error: selectError(state),
	response: selectResponse(state),
	event: selectEventById(state, props),
});

const mapDispatchToProps = (dispatch) => ({
	createOrUpdate: (payload, id) => dispatch(createOrUpdate(payload, id)),
	resetActions: () => {
		dispatch(loading(false));
		dispatch(saveFormSuccess(''));
		dispatch(getEvents());
	},
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type PropsType = PropsFromRedux & Props;

class EventFormContainer extends Component<PropsType, State> {
	state: Readonly<State> = {
		title: '',
		description: '',
		address: '',
		latitude: '',
		longitude: '',
		image: null,
		imageData: null,
	};

	constructor(props) {
		super(props);
		this.onSubmitForm = this.onSubmitForm.bind(this);
	}

	componentDidMount() {
		this.setEventToState();
	}

	private setEventToState() {
		const { event } = this.props;
		if (Object.keys(event).length > 0) {
			const { title, description, address, latitude, longitude, imageUrl } = event;
			this.setState({
				title,
				description,
				address,
				latitude,
				longitude,
				image: imageUrl,
			});
		}
	}

	onSubmitForm(formValues) {
		const {
			route: { params: { id } = { id: 0 } },
		} = this.props;
		this.props.createOrUpdate({ ...formValues, image: this.state.imageData }, id);
	}

	onCloseAlert() {
		this.props.resetActions();
		this.props.navigation.navigate('Events');
	}

	onSelectedImage(data) {
		this.setState({ imageData: data });
	}

	render() {
		const { error, loading: loadingIndicator, response } = this.props;
		let { image, imageData, ...otherValues } = this.state;
		image && (image = { uri: image });
		return loadingIndicator ? (
			<LoadingIndicator />
		) : (
			<SafeAreaView style={styles.mainContainer}>
				<Formik
					enableReinitialize
					initialValues={otherValues}
					validationSchema={eventSchema}
					onSubmit={(values) => this.onSubmitForm(values)}>
					{({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => {
						return (
							<Fragment>
								{formConfig.map((item) => {
									const { label, key, customAttr = {} } = item;
									return (
										<TextInput
											key={key}
											label={label}
											error={touched[key] && errors[key]}
											customProps={{
												onChangeText: handleChange(key),
												onBlur: handleBlur(key),
												value: values[key] ? String(values[key]) : '',
												...customAttr,
											}}
										/>
									);
								})}
								<ImagePicker source={image} selectedImage={this.onSelectedImage.bind(this)} />
								<View style={styles.buttonContainer}>
									<Button
										title={'Save'}
										variant={BUTTON_VARIANT_TYPES.primary}
										size={BUTTON_SIZE_TYPES.small}
										onClick={handleSubmit}
									/>
								</View>
							</Fragment>
						);
					}}
				</Formik>
				{!!response &&
					Alert.alert('Alert', response, [{ text: 'OK', onPress: () => this.onCloseAlert() }], { cancelable: false })}
				<TextError message={error} />
			</SafeAreaView>
		);
	}
}

export default connector(EventFormContainer);
