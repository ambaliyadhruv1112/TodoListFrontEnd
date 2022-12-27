import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAddProduct from '../../../services/product/useAddProduct';
import AddProductView from './AddProductView';
const AddProductContainer = () => {
  const addProduct = useAddProduct();
  const navigate = useNavigate();
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  console.log(errors);
  const submitData = (data) => {
    console.log(data);
    addProduct.mutate(
      {
        ...data,
      },
      {
        onSuccess: () => {
          navigate('/');
        },
      }
    );
  };

  return (
    <AddProductView
      handleSubmit={handleSubmit(submitData)}
      errors={errors}
      control={control}
    />
  );
};

export default AddProductContainer;
