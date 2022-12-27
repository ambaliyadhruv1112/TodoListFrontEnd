import { useQueryClient } from 'react-query';
import { useTheme } from '@chemcycled/components';
import useProductsList from '../../services/product/useProductsList';
import { useNavigate } from 'react-router-dom';
import useDeleteProduct from '../../services/product/useDeleteProduct';
import ColumnsData from './ListOfColumns';
import ListView from './Listview';

const ListOfProduct = () => {
  const theme = useTheme();
  const { data, status } = useProductsList();
  console.log(data);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const deleteTodo = useDeleteProduct();
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
    // navigate(`edit/${id}`);
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

export default ListOfProduct;
