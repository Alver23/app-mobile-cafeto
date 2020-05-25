import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';

// Components
import { LoadingIndicator } from './components';

// Navigator
import { DashboardNavigator, AuthNavigator } from './navigator';

// Redux
import { getToken } from './store/actions/authentication-token';
import {
	selectAuthenticationToken,
	selectAuthenticationLoading,
} from './store/selectors/authentication-token';

import { Props, State } from './app-interface';

const mapStateToProps = (state) => ({
	authenticationToken: selectAuthenticationToken(state),
	authenticationLoading: selectAuthenticationLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
	getToken: () => dispatch(getToken()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type PropsType = PropsFromRedux & Props;

class App extends Component<PropsType, State> {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.bootstrapApp();
	}

	bootstrapApp = () => {
		this.props.getToken();
	};

	render() {
		const { authenticationToken, authenticationLoading } = this.props;
		return authenticationLoading ? (
			<LoadingIndicator />
		) : authenticationToken ? (
			<DashboardNavigator />
		) : (
			<AuthNavigator />
		);
	}
}

export default connector(App);
