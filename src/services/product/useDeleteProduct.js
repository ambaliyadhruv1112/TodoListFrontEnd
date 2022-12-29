import axios from 'axios';

import { useMutation } from 'react-query';

const deleteProduct = (id) => {
  return axios.delete(`http://localhost:3300/product/${id}`);
};

const useDeleteProduct = () => {
  return useMutation(({ id }) => deleteProduct(id), {
    useErrorBoundary: true,
  });
};

export default useDeleteProduct;
