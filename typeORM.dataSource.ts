import { DataSource } from 'typeorm';
import * as config from 'config';

export default new DataSource({
  ...config.get('typeORMDataSource'),
  migrations: ['./dist/src/migrations/*.js'],
});
