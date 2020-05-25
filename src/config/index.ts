import Config from 'react-native-config';

export const config = {
  api: {
    basePath: Config.API_URL,
    auth: {
      login: '/auth/login',
      loginProvider: '/auth/login-provider',
    },
    events: {
      getUrl: '/events',
    },
  },
  defaultTimeout: Config.TIMEOUT,
  mapBoxToken: Config.MAP_BOX_TOKEN,
};
