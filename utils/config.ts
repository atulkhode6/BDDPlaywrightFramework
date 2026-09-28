import * as dotenv from 'dotenv';
import * as path from 'node:path';

const environment = process.env.ENV || 'dev';

const envPath = path.resolve(
  __dirname,
  '../../env',
  `.env.${environment}`,
);

const result = dotenv.config({ path: envPath });

if (result.error && result.error.code !== 'ENOENT') {
  throw result.error;
}

export const Config = {
  baseUrl: process.env.BASE_URL || 'https://saucedemo.com',
  environment: environment.toUpperCase(),
};
