import axios from 'axios';
import { useQuery } from 'react-query';

const getProduct = () => {
  return axios.get('http://localhost:3300/product');
};

const useProductsList = () => {
  return useQuery(['Products'], () => getProduct(), {
    useErrorBoundary: true,
  });
};

export default useProductsList;
