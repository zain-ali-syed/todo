const SERVER_URL = 'http://localhost:3000/api';

export default {
  GET_TODOS: `${SERVER_URL}/todos`,
  ADD_TODO: `${SERVER_URL}/todos`,
  EDIT_TODO: `${SERVER_URL}/todos`,
  DELETE_TODO: `${SERVER_URL}/todos`,

  REGISTER_USER: `${SERVER_URL}/users`,
  LOGIN_USER: `${SERVER_URL}/login`
};
