import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAddTodo from '../../services/Todo/useAddTodo';
import TodoInputView from './InputView';
const TodoInputContainer = () => {
  const addTodo = useAddTodo();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const submitData = ({ itemName, description }) => {
    addTodo.mutate(
      {
        itemName,
        description,
      },
      {
        onSuccess: () => {
          navigate('/');
        },
      }
    );
  };

  return (
    <TodoInputView
      handleSubmit={handleSubmit(submitData)}
      register={register}
    />
  );
};

export default TodoInputContainer;
