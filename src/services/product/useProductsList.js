import axios from 'axios';
import { useQuery } from 'react-query';

const getTodo = () => {
  return axios.get('http://localhost:3300/product');
};

const useProductsList = () => {
  return useQuery(['todos'], () => getTodo(), {
    useErrorBoundary: true,
  });
};

export default useProductsList;
