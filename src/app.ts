import express from 'express';
import mongoose from 'mongoose';
import { celebrate, Joi, errors } from 'celebrate';
import { requestLogger, errorLogger } from './middlewares/logger';
import router from './routes/index';
import authorization from './middlewares/auth';
import { pageError, serverErorr } from './middlewares/error';
import { postUser, login } from './controllers/users';

const app = express();

const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://localhost:27017/mestodb');

app.use(requestLogger);

app.use(express.json());

app.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
}), login);

app.post('/signup', celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    name: Joi.string().min(2).max(30),
    avatar: Joi.string().pattern(/^(http|https):\/\/[a-zA-Z0-9]+([-.[a-zA-Z0-9]+)*\.[a-zA-Z]{2,5}(:[0-9]{1,5})?((\/[a-zA-Z0-9%-~]+)*)?(#[a-zA-Z0-9_%-]*)?$/),
    about: Joi.string().min(2).max(200),
  }),
}), postUser);

app.use(authorization, router);

app.use(pageError);
app.use(errorLogger);
app.use(errors());
app.use(serverErorr);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
