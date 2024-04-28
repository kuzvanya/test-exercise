import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export default {
  server: {
    port: '3000',
  },
  typeORMDataSource: {
    type: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: 'postgres',
    password: '',
    database: 'pallete_system',
    namingStrategy: new SnakeNamingStrategy(),
  },
  sessionTTL: 30, // days
};
