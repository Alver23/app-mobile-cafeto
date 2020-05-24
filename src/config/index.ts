import Config from "react-native-config";

export const config = {
    api: {
        basePath: Config.API_URL,
        auth: {
            login: '/auth/login',
            loginProvider: '/auth/login-provider',
        }
    },
    defaultTimeout: Config.TIMEOUT,
}
