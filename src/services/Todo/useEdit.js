import axios from 'axios';
import { useQuery } from 'react-query';

const getEditList = (id) => {
  return axios.get(`http://localhost:3050/todos/${id}`);
};

const useEdit = (id) => {
  return useQuery(['todosEdit'], () => getEditList(id), {
    useErrorBoundary: true,
  });
};

export default useEdit;
