// Dependencies
import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { View, Text, Button, TextInput, ScrollView } from 'react-native';

import { textInputPrimaryStyle, textInputDangerStyle, buttonPrimaryStyle, validationsStyle, buttonDisabledStyle } from "../../utils/theme";
import { validateEmail } from "../../utils/validations/validations";

// Redux
import { login } from "../../store/actions/login";
import { selectLoginLoading, selectLoginError } from "../../store/selectors/login";

// Components
import { LoadingIndicatorComponent } from "../../components";

// Models
import { State, Props} from "./login-interface";

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

// Styles
import styles from './style';


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
        const error = !validateEmail(value) ? 'You have entered an invalid email address!' : null;
        let genericError = this.state.genericError;
        !error && (genericError = null);
        this.setState({email: { value, error }, genericError});
    }

    onChangePassword = (value: string) => {
        const error = !value ? 'The password is required' : null;
        this.setState({password: { value, error }});
    }

    showError = (message: string) => (
        message && (<Text style={validationsStyle.error}>{message}</Text>)
    )

    onSubmit = _ => {
        const { email: {value: emailValue }, password: {value: passwordValue} } = this.state;
        if (emailValue && passwordValue) {
            this.props.login({email: emailValue, password: passwordValue});
        } else {
            this.setState({genericError: 'The email or password are required'});
        }
    }

    render() {
        const { error, loading } = this.props;
        const { email: {error: emailError}, password: {error: passwordError}, genericError } = this.state;
        return !loading ? (
            <ScrollView style={{padding: 20}}>
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <View style={styles.container}>
                        <Text>Email</Text>
                        <TextInput
                            autoCapitalize='none'
                            textContentType='emailAddress'
                            style={emailError ? textInputDangerStyle : textInputPrimaryStyle}
                            onChangeText={value => this.onChangeEmail(value)} />
                        {this.showError(emailError)}
                    </View>
                    <View style={styles.container}>
                        <Text>Password</Text>
                        <TextInput
                            textContentType='password'
                            style={passwordError ? textInputDangerStyle : textInputPrimaryStyle}
                            secureTextEntry={true}
                            onChangeText={value => this.onChangePassword(value)} />
                        {this.showError(passwordError)}
                    </View>
                    <View style={styles.container}>
                        {this.showError(genericError || (error ? `The user not ${error}` : null ))}
                    </View>
                    <View style={(passwordError || emailError) ? buttonDisabledStyle: buttonPrimaryStyle}>
                        <Button
                            color="#ffffff"
                            onPress={this.onSubmit}
                            title="Submit"
                            disabled={(passwordError || emailError) ? true: false}
                        />
                    </View>
                </View>
            </ScrollView>
        ) : (
            <LoadingIndicatorComponent/>
        );
    }
}

export default connector(LoginContainer);
