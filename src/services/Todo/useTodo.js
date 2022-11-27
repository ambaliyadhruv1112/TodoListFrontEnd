import axios from 'axios';
import { useQuery } from 'react-query';

const getTodo = () => {
  return axios.get('http://localhost:3050/todos');
};

const useTodos = () => {
  return useQuery(['todos'], () => getTodo(), {
    useErrorBoundary: true,
  });
};

export default useTodos;
