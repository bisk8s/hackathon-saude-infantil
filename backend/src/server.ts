import { createConnection } from 'typeorm';
import * as express from 'express';
import * as bodyParser from 'body-parser';

import routes from './routes';

import { config as configDotenv } from 'dotenv';
configDotenv();

createConnection()
  .then(connection => {
    const port = process.env.APP_PORT || 3000;

    const app = express();
    // middleware
    app.use(bodyParser.json());
    // routes
    app.use(routes);
    // listen
    app.listen(port);
    console.log(`Application is up and running at port ${port}`);
  })
  .catch(error => console.error(error));
