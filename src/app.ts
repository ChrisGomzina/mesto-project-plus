import express from 'express';
import mongoose from 'mongoose';
import { errors } from 'celebrate';
import router from './routes/index';
import authorization from './middlewares/authorization';
import { pageError, serverErorr } from './middlewares/error';
import { postUser, login } from './controllers/users';

const app = express();

const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://localhost:27017/mestodb');

app.use(express.json());

app.post('/signin', login);
app.post('/signup', postUser);

app.use(authorization, router);

app.use(pageError);
app.use(errors());
app.use(serverErorr);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
