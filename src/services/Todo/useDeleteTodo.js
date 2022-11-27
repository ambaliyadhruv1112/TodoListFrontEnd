import axios from 'axios';

import { useMutation } from 'react-query';

const deleteTodo = (id) => {
  console.log(id);
  return axios.delete(`http://localhost:3050/todos/${id}`);
};

const useDeleteTodo = () => {
  return useMutation(({ id }) => deleteTodo(id), {
    useErrorBoundary: true,
  });
};

export default useDeleteTodo;
