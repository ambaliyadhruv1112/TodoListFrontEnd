import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import ListView from './ListView';
import useEditTodo from '../../services/Todo/useEditTodo';
import useEdit from '../../services/Todo/useEdit';
const ListEditContainer = () => {
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
          navigate('/list');
        },
      }
    );
  };
  return (
    <>
      {status === 'error' && <p>Error fetching data</p>}
      {status === 'loading' && <p>Fetching data...</p>}
      {status === 'success' && (
        <ListView
          handleSubmit={handleSubmit(editSubmit)}
          data={data?.data}
          register={register}
        />
      )}
    </>
  );
};

export default ListEditContainer;

/* <form onSubmit={handleSubmit(editSubmit)}>
          <input placeholder={data?.data?.itemName} {...register('itemName')} />
          <input
            placeholder={data?.data?.description}
            {...register('description')}
          />
          <button>Add</button>
        </form> */
