import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAddProduct from '../../../services/product/useAddProduct';
import AddProductView from './AddProductView';
const AddProductContainer = () => {
  const addProduct = useAddProduct();
  const navigate = useNavigate();
  const submitData = (data) => {
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

  return <AddProductView submitData={submitData} />;
};

export default AddProductContainer;
