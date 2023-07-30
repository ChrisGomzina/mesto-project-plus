// export const BAD_REQUEST = {
//   code: 400,
//   message: 'Переданы некорректные данные',
// };

// export const INVALID_ID_ERROR = {
//   code: 400,
//   message: 'Передан невалидный id',
// };

// export const AUTHORIZATION_ERROR = {
//   code: 401,
//   message: 'Неправильные почта или пароль',
// };

// export const UNAURHORIZATION_ERROR = {
//   code: 401,
//   message: 'Необходима авторизация',
// };

// export const FORBIDDEN_ERROR = {
//   code: 403,
//   message: 'Недостаточно прав',
// };

// export const NOT_FOUND_REQUEST = {
//   code: 404,
//   message: 'Карточка или пользователь не найден',
// };

// export const NOT_FOUND_PAGE = {
//   code: 404,
//   message: 'Страница не найдена',
// };

// export const CONFLICT_ERROR = {
//   code: 409,
//   message: 'Пользователь с такой почтой уже существует',
// };

// export const INTERNAL_SERVER_ERROR = {
//   code: 500,
//   message: 'Ошибка по умолчанию',
// };

const errorCode = {
  BAD_REQUEST: 400,
  AUTHORIZATION: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  SERVER: 500,
};

const errorMessage = {
  BAD_REQUEST: 'Переданы некорректные данные',
  INVALID_ID_ERROR: 'Передан невалидный id',
  AUTHORIZATION_ERROR: 'Неправильные почта или пароль',
  UNAURHORIZATION_ERROR: 'Необходима авторизация',
  FORBIDDEN_ERROR: 'Недостаточно прав',
  NOT_FOUND_REQUEST: 'Карточка или пользователь не найден',
  NOT_FOUND_PAGE: 'Страница не найдена',
  CONFLICT_ERROR: 'Пользователь с такой почтой уже существует',
  INTERNAL_SERVER_ERROR: 'Ошибка по умолчанию',
};

export const ERROR = {
  code: errorCode,
  message: errorMessage,
};
