import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as express from 'express';
import * as cors from 'cors';
import * as helmet from 'helmet';
import * as bodyParser from 'body-parser';
import routes from './routes';

const PORT = process.env.PORT || 3000;

createConnection()
  .then(async () => {

    // create express app
    const app = express();

    // Middlewares
    app.use(cors());
    app.use(helmet());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
      extended: true
    }));
    
    // Routes
    app.use('/', routes);

    // Static dir
    app.use('/uploads', express.static(__dirname + '/../uploads/'));

    // start express server
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(error => console.log(error));
