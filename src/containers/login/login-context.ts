import React from 'react';

const context = {
	email: {
		value: '',
		error: null,
	},
	password: {
		value: '',
		error: null,
	},
	genericError: null,
	requestError: null,
	onSubmitFormAuth0: () => {},
	onSubmitForm: () => {},
	onChangeEmail: (value) => {},
	onChangePassword: (value) => {},
};
export const LoginContext = React.createContext(context);
