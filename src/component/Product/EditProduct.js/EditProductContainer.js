import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useEditProduct from '../../../services/product/useEditProduct';
import useGetProduct from '../../../services/product/useGetProduct';
import EditProductView from './EditProductView';

const EditProductContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useGetProduct(id);

  const SubmitEditData = (data) => {
    useEditProduct.mutate(
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

  if (isLoading) {
    return <h1>Loading.....</h1>;
  }

  return <EditProductView SubmitEditData={SubmitEditData} data={data?.data} />;
};

export default EditProductContainer;
