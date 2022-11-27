import { BoxStyled, StyledInput, Text, StyleButton } from './InputStyled';

const TodoInputView = ({ handleSubmit, register }) => {
  return (
    <BoxStyled>
      <Text>Add Todo Item</Text>
      <form onSubmit={handleSubmit}>
        <StyledInput placeholder='Enter Item Name' {...register('itemName')} />
        <StyledInput
          placeholder='Enter Item Description'
          {...register('description')}
        />
        <StyleButton htmlType='submit' text='Add' />
      </form>
    </BoxStyled>
  );
};

export default TodoInputView;
