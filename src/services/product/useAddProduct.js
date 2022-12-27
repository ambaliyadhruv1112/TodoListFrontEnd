import axios from 'axios';

import { useMutation } from 'react-query';

const addTodo = (data) => {
  return axios.post('http://localhost:3300/product', data);
};

const useAddProduct = () => {
  return useMutation((data) => addTodo(data), {
    useErrorBoundary: true,
  });
};

export default useAddProduct;
