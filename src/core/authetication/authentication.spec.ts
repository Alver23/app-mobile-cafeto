import { authenticationService } from './authentication';

describe('AuthenticationService', () => {
	describe('setToken', () => {
		it('should save the token', async () => {
			const token = 'fake token';
			await authenticationService.setToken(token);
			expect(await authenticationService.getToken()).toEqual(token);
		});
	});

	describe('setRefreshToken', () => {
		it('should save the refresh token', async () => {
			const token = 'fake token';
			await authenticationService.setRefreshToken(token);
			expect(await authenticationService.getRefreshToken()).toEqual(token);
		});
	});

	describe('clearToken', () => {
		it('should clear token', async () => {
			const token = 'fake token';
			await authenticationService.setToken(token);
			expect(await authenticationService.clearToken()).toBeFalsy();
		});
	});

	describe('clearRefreshToken', () => {
		it('should clear refresh token', async () => {
			const token = 'fake token';
			await authenticationService.setRefreshToken(token);
			expect(await authenticationService.clearRefreshToken()).toBeFalsy();
		});
	});
});
