import React from 'react';
import { useForm } from 'react-hook-form';
import ProductFormContainer from '../../ProductForm';

const EditProductView = ({ SubmitEditData, data }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    reValidateMode: 'onChange',
    defaultValues: { ...data },
  });
  return (
    <ProductFormContainer
      handleSubmit={handleSubmit(SubmitEditData)}
      control={control}
      errors={errors}
    />
  );
};

export default EditProductView;
