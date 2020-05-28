import { configService } from '../../config';
import { connector, Connector } from '../../core';

import { EventRequest, EventResponse } from './interface';

export class EventService {
	private readonly eventPath: any;
	private readonly basePath: string;
	private readonly headers = { 'content-type': 'multipart/form-data' };

	constructor(private readonly http: Connector) {
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
		return response;
	}

	create(payload): Promise<EventResponse> {
		const url = `${this.basePath}${this.eventPath.post}`;
		return this.http.post<EventResponse>(url, payload, { headers: this.headers });
	}

	update(id: number, payload): Promise<any> {
		const url = `${this.basePath}${this.eventPath.put}${id}`;
		return new Promise<any>((resolve, reject) => {
			this.http
				.put(url, payload, { headers: this.headers })
				.then((_) => resolve({ message: 'The Record was updated successfully' }))
				.catch(reject);
		});
	}

	createOrUpdate(payload: EventRequest, id: number): Promise<any> {
		const data = this.createFormData(payload, !id);
		if (id) {
			return this.update(id, data);
		}
		return this.create(data);
	}

	getEvents(): Promise<EventRequest[]> {
		const url = `${this.basePath}${this.eventPath.get}`;
		return this.http.get<EventRequest[]>(url).then((response: any) => response.data);
	}

	delete(id: number): Promise<any> {
		const url = `${this.basePath}${this.eventPath.delete}${id}`;
		return new Promise((resolve, reject) => {
			this.http
				.delete(url)
				.then((_) => resolve({ message: 'The Record was deleted successfully' }))
				.catch(reject);
		});
	}
}

export const eventService = new EventService(connector);
