import configuration from './configuration';

export class ConfigService {
	constructor(private readonly config: any) {}

	get(key: string) {
		return this.config[key];
	}
}

export const configService = new ConfigService(configuration);
