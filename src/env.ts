/**
 * The type of environment.
 */
type env = 'development' | 'production' | 'test';

const envType:env = process.env.NODE_ENV ? process.env.NODE_ENV:"production";

/**
 * The configuration object for each environment type.
 */
let config: any = {
    development: {
        env: 'dev',
        baseUrl: 'http://localhost:3000',
    },
    production: {
        env: 'prod',
        baseUrl: '',
    },
    test: {
        env: 'test',
        baseUrl: '',
    }
}

/**
 * The configuration object for the current environment type.
 */
let envConfig = config[envType];

export default envConfig;