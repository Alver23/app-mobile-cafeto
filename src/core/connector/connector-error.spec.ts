import { AxiosError } from 'axios';
import { connectorError } from './connector-error';

import mocks from './mocks.json';

describe('connectorError', () => {
	const errors: AxiosError = mocks;
	const expectedError = (error) => {
		expect(connectorError(error)).toEqual(
			expect.objectContaining({
				status: expect.any(Number),
				message: expect.any(String),
			}),
		);
	};

	it('should get the model of error', () => {
		expectedError(errors);
	});

	it('should get an error model when data is empty', () => {
		const { response, ...data } = errors;
		const error = {
			...data,
			response: {
				...response,
				data: null,
			},
		};

		expectedError(error);
	});

	it('should get an error model when all parameters is empty', () => {
		expectedError({} as any);
	});

	it('should get an instance error', () => {
		const { response, ...data } = errors;
		const error = {
			...data,
			response: {
				...response,
			},
		};
		expectedError(error);
	});
});
