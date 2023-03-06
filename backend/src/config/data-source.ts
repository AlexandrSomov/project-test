import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOption: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5426,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/config/migrations/*.js'],
};

const dataSource = new DataSource(dataSourceOption);

export default dataSource;
