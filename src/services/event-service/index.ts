import { AxiosInstance } from 'axios';
// Services
import { configService } from '../../config';
import { internalAxiosInstance } from '../../core/axios-instance/axios-instance';

// Models
import { ApiResponseEvent } from '../../containers/events/event-interface';

export class EventService {
	private readonly eventPath: any;
	private readonly basePath: string;
	constructor(private readonly http: AxiosInstance) {
		({ basePath: this.basePath, events: this.eventPath } = configService.get(
			'api',
		));
	}

	create(payload): Promise<any> {
		const url = `${this.basePath}${this.eventPath.post}`;
		return new Promise<any>((resolve, reject) => {
			this.http
				.post(
					url,
					{ ...payload },
					{ headers: { 'Content-Type': 'multipart/form-data' } },
				)
				.then((response) => resolve(response))
				.catch(({ response: { data: { message } } }) => reject(message));
		});
	}

	update(id, payload): Promise<any> {
		const url = `${this.basePath}${this.eventPath.put}${id}`;
		return new Promise<any>((resolve, reject) => {
			this.http
				.put(
					url,
					{ ...payload },
					{ headers: { 'Content-Type': 'multipart/form-data' } },
				)
				.then((_) =>
					resolve({ message: 'The Record was updated successfully' }),
				)
				.catch(({ response: { data: { message } } }) => reject(message));
		});
	}

	createOrUpdate(payload, id): Promise<any> {
		if (id) {
			return this.update(id, payload);
		}

		return this.create(payload);
	}

	getEvents(): Promise<any> {
		const url = `${this.basePath}${this.eventPath.get}`;
		return new Promise((resolve, reject) => {
			this.http
				.get<ApiResponseEvent[]>(url)
				.then((response) => resolve(response))
				.catch(({ response: { data: { message } } }) => reject(message));
		});
	}

	delete(id: number): Promise<any> {
		const url = `${this.basePath}${this.eventPath.delete}${id}`;
		return new Promise((resolve, reject) => {
			this.http
				.delete(url)
				.then((_) =>
					resolve({ message: 'The Record was deleted successfully' }),
				)
				.catch(({ response: { data: { message } } }) => reject(message));
		});
	}
}

export const eventService = new EventService(internalAxiosInstance);
