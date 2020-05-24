// Dependencies
import React, {Component} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {ScrollView, View} from 'react-native';
// Theme
import {BUTTON_VARIANT_TYPES} from "../../utils/theme";
import {email as emailValidation, getMessage, VALIDATION_MESSAGE_TYPES} from "../../utils/validations";
// Redux
import {login} from "../../store/actions/login";
import {selectLoginError, selectLoginLoading} from "../../store/selectors/login";
// Components
import {EmailInput, PasswordInput} from "./components";
import {ButtonComponent, LoadingIndicatorComponent, TextError} from "../../components";
// Models
import {Props, State} from "./login-interface";
// Styles
import styles from './style';

const mapStateToProps = state => ({
    loading: selectLoginLoading(state),
    error: selectLoginError(state),
})

const mapDispatchToProps = dispatch => ({
    login: (payload) => dispatch(login(payload)),
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
    }

    onChangeEmail = (value: string) => {
        const error = !emailValidation(value) ? getMessage(VALIDATION_MESSAGE_TYPES.email)() : null;
        let genericError = this.state.genericError;
        !error && (genericError = null);
        this.setState({email: { value, error }, genericError});
    }

    onChangePassword = (value: string) => {
        const error = !value ? getMessage(VALIDATION_MESSAGE_TYPES.required)('password') : null;
        this.setState({password: { value, error }});
    }

    onSubmit = _ => {
        const { email: {value: emailValue }, password: {value: passwordValue} } = this.state;
        if (emailValue && passwordValue) {
            this.props.login({email: emailValue, password: passwordValue});
        } else {
            this.setState({genericError: getMessage(VALIDATION_MESSAGE_TYPES.twoRequired)('email', 'password')});
        }
    }

    render() {
        const { error, loading } = this.props;
        const { email: {error: emailError}, password: {error: passwordError}, genericError } = this.state;
        return !loading ? (
            <ScrollView style={styles.scrollViewContainer}>
                <View style={styles.container}>
                    <EmailInput
                        error={emailError}
                        onChangeValue={this.onChangeEmail}
                    />
                </View>
                <View style={styles.container}>
                    <PasswordInput
                        error={passwordError}
                        onChangeValue={this.onChangePassword}
                    />
                </View>
                <View style={styles.container}>
                    <TextError message={genericError || (error ? `The user not ${error}` : null)} />
                </View>
                <ButtonComponent
                    color="#ffffff"
                    title="Submit"
                    variant={BUTTON_VARIANT_TYPES.primary}
                    onClick={this.onSubmit}
                    isDisabled={(passwordError || emailError) ? true : false}
                />
            </ScrollView>
        ) : (
            <LoadingIndicatorComponent/>
        );
    }
}

export default connector(LoginContainer);
