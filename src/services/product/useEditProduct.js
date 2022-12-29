import axios from 'axios';

import { useMutation } from 'react-query';

const editProduct = (id, data) => {
  return axios.patch(`http://localhost:3050/Products/${id}`, data);
};

const useEditProduct = (id) => {
  return useMutation((data) => editProduct(id, data), {
    useErrorBoundary: true,
  });
};

export default useEditProduct;
