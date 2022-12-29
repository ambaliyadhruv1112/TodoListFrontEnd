import ProductFormContainer from '../../ProductForm';
import { useForm } from 'react-hook-form';

const AddProductView = ({ submitData }) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'all',
  });
  return (
    <ProductFormContainer
      handleSubmit={handleSubmit(submitData)}
      control={control}
      errors={errors}
    />
  );
};

export default AddProductView;
