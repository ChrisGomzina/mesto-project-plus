import express from 'express';
import mongoose from 'mongoose';
import router from './routes/index';
import authorization from './middlewares/authorization';
import { pageError, serverErorr } from './middlewares/error';

const app = express();

const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://localhost:27017/mestodb');

app.use(express.json());

app.use(authorization, router);

app.use(pageError);

app.use(serverErorr);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
