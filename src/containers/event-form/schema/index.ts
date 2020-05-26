import { string, object, number } from 'yup';

export const eventSchema = object().shape({
	title: string().required(),
	description: string(),
	address: string(),
	latitude: number().required(),
	longitude: number().required(),
});
