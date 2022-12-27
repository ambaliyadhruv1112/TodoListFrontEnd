import axios from 'axios';
import { useQuery } from 'react-query';

const getEditList = (id) => {
  return axios.get(`http://localhost:3300/product/${id}`);
};

const useGetProduct = (id) => {
  return useQuery(['todosEdit'], () => getEditList(id), {
    useErrorBoundary: true,
  });
};

export default useGetProduct;
