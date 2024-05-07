import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export default {
  server: {
    port: '3000',
  },
  typeORMDataSource: {
    type: 'postgres',
    host: 'postgres',
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'palette_system',
    namingStrategy: new SnakeNamingStrategy(),
  },
  sessionTTL: 30, // days
  colorNameSourceUrl: 'https://www.thecolorapi.com',
};
