import axios from 'axios';

import { useMutation } from 'react-query';

const addTodo = (data) => {
  return axios.post('http://localhost:3050/todos', data);
};

const useAddTodo = () => {
  return useMutation((data) => addTodo(data), {
    useErrorBoundary: true,
  });
};

export default useAddTodo;
