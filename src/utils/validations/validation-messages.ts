export enum VALIDATION_MESSAGE_TYPES {
	email = 'email',
	required = 'required',
	twoRequired = 'twoRequired',
}
const messages = {
	email: () => 'You have entered an invalid email address!',
	required: (field: string) =>
		field ? `The ${field} is required` : 'The field is required',
	twoRequired: (firstField: string, secondField: string) =>
		`The ${firstField} or ${secondField} are required`,
};

export const getMessage = (type: VALIDATION_MESSAGE_TYPES): Function =>
	messages[type];
