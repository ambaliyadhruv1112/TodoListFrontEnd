import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import EditView from './EditView';
import useEditTodo from '../../services/Todo/useEditTodo';
import useEdit from '../../services/Todo/useEdit';
const EditTodoContainer = () => {
  const { id } = useParams();
  const useMutation = useEditTodo(id);
  const { data, status } = useEdit(id);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const editSubmit = ({ itemName, description }) => {
    useMutation.mutate(
      { itemName, description },
      {
        onSuccess: () => {
          navigate('/');
        },
      }
    );
  };
  return (
    <>
      {status === 'error' && <p>Error fetching data</p>}
      {status === 'loading' && <p>Fetching data...</p>}
      {status === 'success' && (
        <EditView
          handleSubmit={handleSubmit(editSubmit)}
          data={data?.data}
          register={register}
        />
      )}
    </>
  );
};

export default EditTodoContainer;
