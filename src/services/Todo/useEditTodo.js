import axios from 'axios';

import { useMutation } from 'react-query';

const editTodo = (id, data) => {
  console.log(id, data);
  return axios.patch(`http://localhost:3050/todos/${id}`, data);
};

const useEditTodo = (id) => {
  console.log(id);
  return useMutation((data) => editTodo(id, data), {
    useErrorBoundary: true,
  });
};

export default useEditTodo;
