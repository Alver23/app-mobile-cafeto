import { AxiosError } from 'axios';

export interface IConnectorResponse {
	message: any;
	status: number;
}

export class ConnectorError implements IConnectorResponse {
	constructor(public readonly status: number, public readonly message: string) {}
}

export const connectorError = (error: AxiosError): IConnectorResponse => {
	const { response = { data: {} } } = error;
	let { data = { status: 0, message: '' } } = response;
	if (!data) {
		data = { status: 500, message: 'Internal server error' };
	}
	const { status = 500, message = 'Internal server error' } = data;
	return new ConnectorError(status, message);
};
