import jwtDecode from 'jwt-decode';

import { JwtDecodeResponse } from './jwt-interface';

export class JwtService {
	decodeToken(token: string): JwtDecodeResponse {
		return jwtDecode(token);
	}
}

export const jwtService = new JwtService();
