/**
 * The type of environment.
 */
type env = 'dev' | 'prod' | 'uat';

const envType: env = process.env.NODE_ENV as env || 'prod';


/**
 * The configuration object for each environment type.
 */
let config: any = {
    dev: {
        env: 'dev',
        baseUrl: 'http://localhost:3000'
    },
    prod: {
        env: 'prod',
        baseUrl: '',
    },
    uat: {
        env: 'uat',
        baseUrl: '',
    }
}

/**
 * The configuration object for the current environment type.
 */
let envConfig = config[envType];

export default envConfig;