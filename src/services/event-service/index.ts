import { AxiosInstance } from 'axios';
// Services
import { configService } from '../../config';
import { internalAxiosInstance } from '../../core/axios-instance/axios-instance';

export class EventService {
	private readonly eventPath: any;
	private readonly basePath: string;
	constructor(private readonly http: AxiosInstance) {
		({ basePath: this.basePath, events: this.eventPath } = configService.get(
			'api',
		));
	}

	create() {}

	update() {}

	delete(id: number): Promise<any> {
		const url = `${this.basePath}${this.eventPath.delete}/${id}`;
		return this.http.delete(url);
	}
}

export const eventService = new EventService(internalAxiosInstance);
