import { AxiosInstance, AxiosError } from 'axios';
// Services
import { configService } from '../../config';
import { internalAxiosInstance } from '../../core/axios-instance/axios-instance';

// Models
import { ApiResponseEvent } from '../../containers/events/event-interface';

export class EventService {
	private readonly eventPath: any;
	private readonly basePath: string;
	constructor(private readonly http: AxiosInstance) {
		({ basePath: this.basePath, events: this.eventPath } = configService.get('api'));
	}

	private createFormData(payload, isNew: boolean) {
		const response = new FormData();
		const { image, ...otherValues } = payload;
		Object.entries(otherValues).forEach(([key, value]) => {
			if (isNew) {
				value && value !== null && response.append(key, value);
			} else {
				value !== null && response.append(key, value);
			}
		});

		if (image) {
			response.append('image', {
				name: image.fileName,
				type: image.type,
				uri: image.uri,
			});
		}
		console.log('response', response, 'isNew', isNew, 'image', image);
		return response;
	}

	create(payload): Promise<any> {
		const url = `${this.basePath}${this.eventPath.post}`;
		return new Promise<any>((resolve, reject) => {
			this.http
				.post(url, payload, { headers: { 'content-type': 'multipart/form-data' } })
				.then((response) => resolve(response))
				.catch(({ response: { data: { message } } }) => reject(message));
		});
	}

	update(id, payload): Promise<any> {
		const url = `${this.basePath}${this.eventPath.put}${id}`;
		return new Promise<any>((resolve, reject) => {
			this.http
				.put(url, payload, { headers: { 'content-type': 'multipart/form-data' } })
				.then((_) => resolve({ message: 'The Record was updated successfully' }))
				.catch(({ response: { data: { message } } }) => reject(message));
		});
	}

	createOrUpdate(payload, id): Promise<any> {
		const data = this.createFormData(payload, !id);
		if (id) {
			return this.update(id, data);
		}

		return this.create(data);
	}

	getEvents(): Promise<any> {
		const url = `${this.basePath}${this.eventPath.get}`;
		return new Promise((resolve, reject) => {
			this.http
				.get<ApiResponseEvent[]>(url)
				.then((response) => resolve(response))
				.catch((error: AxiosError) => {
					const { response = { data: {} } } = error;
					const { data = { message: '' } } = response;
					const { message } = data;
					reject(message);
				});
		});
	}

	delete(id: number): Promise<any> {
		const url = `${this.basePath}${this.eventPath.delete}${id}`;
		return new Promise((resolve, reject) => {
			this.http
				.delete(url)
				.then((_) => resolve({ message: 'The Record was deleted successfully' }))
				.catch(({ response: { data: { message } } }) => reject(message));
		});
	}
}

export const eventService = new EventService(internalAxiosInstance);
