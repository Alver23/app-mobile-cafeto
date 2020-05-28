// Service
import { internalAxiosInstance } from '../axios-instance/axios-instance';
import { ConnectorError } from './connector-error';
import { Connector } from './connector';

describe('Connector', () => {
	let connector;
	const axiosSpy = (method, callback) => {
		return jest.spyOn(internalAxiosInstance, method).mockImplementationOnce(() => callback());
	};
	beforeEach(() => {
		connector = new Connector(internalAxiosInstance);
	});

	describe('GET', () => {
		it('should send the request', () => {
			const message = 'fake resolve';
			const spy = axiosSpy('get', () => Promise.resolve({ data: message }));
			return connector.get('fake').then((response) => {
				expect(response).toEqual(message);
				expect(spy).toHaveBeenCalled();
			});
		});

		it('should get an error', () => {
			const message = new Error('fake error');
			const spy = axiosSpy('get', () => Promise.reject(message));
			return connector.get('fake').catch((error) => {
				expect(error).toBeInstanceOf(ConnectorError);
				expect(spy).toHaveBeenCalled();
			});
		});
	});

	describe('POST', () => {
		it('should send the request', () => {
			const message = 'fake resolve';
			const spy = axiosSpy('post', () => Promise.resolve({ data: message }));
			return connector.post('fake', { name: 'unit-test' }, { headers: { name: 'unit-test' } }).then((response) => {
				expect(response).toEqual(message);
				expect(spy).toHaveBeenCalled();
			});
		});

		it('should get an error', () => {
			const message = new Error('fake error');
			const spy = axiosSpy('post', () => Promise.reject(message));
			return connector.post('fake').catch((error) => {
				expect(error).toBeInstanceOf(ConnectorError);
				expect(spy).toHaveBeenCalled();
			});
		});
	});

	describe('PUT', () => {
		it('should send the request', () => {
			const message = 'fake resolve';
			const spy = axiosSpy('put', () => Promise.resolve({ data: message }));
			return connector.put('fake', { name: 'unit-test' }, { headers: { name: 'unit-test' } }).then((response) => {
				expect(response).toEqual(message);
				expect(spy).toHaveBeenCalled();
			});
		});

		it('should get an error', () => {
			const message = new Error('fake error');
			const spy = axiosSpy('put', () => Promise.reject(message));
			return connector.put('fake').catch((error) => {
				expect(error).toBeInstanceOf(ConnectorError);
				expect(spy).toHaveBeenCalled();
			});
		});
	});

	describe('DELETE', () => {
		it('should send the request', () => {
			const message = 'fake resolve';
			const spy = axiosSpy('delete', () => Promise.resolve({ data: message }));
			return connector.delete('fake', { headers: { name: 'unit-test' } }).then((response) => {
				expect(response).toEqual(message);
				expect(spy).toHaveBeenCalled();
			});
		});

		it('should get an error', () => {
			const message = new Error('fake error');
			const spy = axiosSpy('delete', () => Promise.reject(message));
			return connector.delete('fake').catch((error) => {
				expect(error).toBeInstanceOf(ConnectorError);
				expect(spy).toHaveBeenCalled();
			});
		});
	});
});
