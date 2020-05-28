import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { SafeAreaView } from 'react-native';

import { email as emailValidation, getMessage, VALIDATION_MESSAGE_TYPES } from '../../core/validations';
import { login } from '../../store/actions/login';
import { loginProvider } from './../../store/actions/login/auth0';
import { selectLoginError, selectLoginLoading } from '../../store/selectors/login';
import { LoginView } from './components';
import { LoadingIndicator } from '../../components';
import { Props, State } from './login-interface';
import styles from './style';

import { LoginContext } from './login-context';

const mapStateToProps = (state) => ({
	loading: selectLoginLoading(state),
	error: selectLoginError(state),
});

const mapDispatchToProps = (dispatch) => ({
	login: (payload) => dispatch(login(payload)),
	loginProvider: () => dispatch(loginProvider()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type PropsType = PropsFromRedux & Props;

class LoginContainer extends Component<PropsType, State> {
	state: Readonly<State> = {
		genericError: null,
		email: {
			value: '',
			error: null,
		},
		password: {
			value: '',
			error: null,
		},
	};

	onChangeEmail = (value: string) => {
		const error = !emailValidation(value) ? getMessage(VALIDATION_MESSAGE_TYPES.email)() : null;
		let genericError = this.state.genericError;
		!error && (genericError = null);
		this.setState({ email: { value, error }, genericError });
	};

	onChangePassword = (value: string) => {
		const error = !value ? getMessage(VALIDATION_MESSAGE_TYPES.required)('password') : null;
		this.setState({ password: { value, error } });
	};

	onSubmit = () => {
		const {
			email: { value: emailValue },
			password: { value: passwordValue },
		} = this.state;
		if (emailValue && passwordValue) {
			this.props.login({ email: emailValue, password: passwordValue });
		} else {
			this.setState({
				genericError: getMessage(VALIDATION_MESSAGE_TYPES.twoRequired)('email', 'password'),
			});
		}
	};

	render() {
		const { error, loading } = this.props;
		const { email, password, genericError } = this.state;
		return loading ? (
			<LoadingIndicator />
		) : (
			<SafeAreaView style={styles.mainContainer}>
				<LoginContext.Provider
					value={{
						email,
						password,
						genericError,
						requestError: error,
						onSubmitForm: this.onSubmit.bind(this),
						onChangeEmail: this.onChangeEmail.bind(this),
						onSubmitFormAuth0: this.props.loginProvider.bind(this),
						onChangePassword: this.onChangePassword.bind(this),
					}}>
					<LoginView />
				</LoginContext.Provider>
			</SafeAreaView>
		);
	}
}

export default connector(LoginContainer);
