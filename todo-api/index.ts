import express, { Express } from 'express';
import dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import cors from 'cors';
import bodyParser from 'body-parser';
import { Task } from './src/tasks/tasks.entity';
import { tasksRouter } from './src/tasks/tasks.router';

const app: Express = express();

dotenv.config();

app.use(bodyParser.json());

app.use(cors());

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.MYSQL_USER,
  database: process.env.MYSQL_DB,
  password: process.env.MYSQL_PASSWORD,
  entities: [Task],
  synchronize: true,
});

const port = process.env.PORT;

AppDataSource.initialize()
  .then(() => {
    app.listen(port);
    console.log('Data source has been initialised');
  })
  .catch((err) => {
    console.error(
      'Error during DataSource initialisation',
      err,
    );
  });

app.use('/', tasksRouter);
