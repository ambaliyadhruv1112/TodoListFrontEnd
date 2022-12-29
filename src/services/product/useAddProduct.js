import axios from 'axios';

import { useMutation } from 'react-query';

const addProduct = (data) => {
  return axios.post('http://localhost:3300/product', data);
};

const useAddProduct = () => {
  return useMutation((data) => addProduct(data), {
    useErrorBoundary: true,
  });
};

export default useAddProduct;
