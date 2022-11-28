import { useQueryClient } from 'react-query';
import { useTheme } from '@chemcycled/components';
import useTodos from '../../services/Todo/useTodo';
import { useNavigate } from 'react-router-dom';
import useDeleteTodo from '../../services/Todo/useDeleteTodo';
import ColumnsData from './ListOfColumns';
import ListView from './Listview';

const ListOfTodo = () => {
  const theme = useTheme();
  const { data, status } = useTodos();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const deleteTodo = useDeleteTodo();
  const DeleteProd = (id) => {
    deleteTodo.mutate(
      {
        id,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['todos'] });
        },
      }
    );
  };
  const EditProd = (id) => {
    navigate(`edit/${id}`);
  };

  return (
    <>
      {status === 'error' && <p>Error fetching data</p>}
      {status === 'loading' && <p>Fetching data...</p>}
      {status === 'success' && (
        <ListView
          columns={ColumnsData(theme, EditProd, DeleteProd)}
          dataSource={data?.data}
          navigate={navigate}
        />
      )}
    </>
  );
};

export default ListOfTodo;
