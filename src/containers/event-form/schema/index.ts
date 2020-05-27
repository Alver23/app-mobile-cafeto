import { string, object, number } from 'yup';

export const eventSchema = object().shape({
	title: string().required(),
	latitude: number().required(),
	longitude: number().required(),
});
