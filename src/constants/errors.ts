export const BAD_REQUEST = {
  code: 400,
  message: 'Переданы некорректные данные',
};

export const INVALID_ID_ERROR = {
  code: 400,
  message: 'Передан невалидный id',
};

export const AUTHORIZATION_ERROR = {
  code: 401,
  message: 'Неправильные почта или пароль',
};

export const UNAURHORIZATION_ERROR = {
  code: 401,
  message: 'Необходима авторизация',
};

export const FORBIDDEN_ERROR = {
  code: 403,
  message: 'Недостаточно прав',
};

export const NOT_FOUND_REQUEST = {
  code: 404,
  message: 'Карточка или пользователь не найден',
};

export const NOT_FOUND_PAGE = {
  code: 404,
  message: 'Страница не найдена',
};

export const INTERNAL_SERVER_ERROR = {
  code: 500,
  message: 'Ошибка по умолчанию',
};
