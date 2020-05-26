import Auth0 from 'react-native-auth0';

import { configService } from '../../config';

const { domain, clientId } = configService.get('auth0');
export const auth0Service = new Auth0({ domain, clientId });
