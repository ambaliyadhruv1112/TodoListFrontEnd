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
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const deleteProduct = useDeleteProduct();
  const DeleteProd = (id) => {
    deleteProduct.mutate(
      {
        id,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['Products'] });
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

export default ListOfProduct;
