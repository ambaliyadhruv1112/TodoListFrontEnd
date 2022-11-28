import { BoxStyled, StyledInput, Text, StyleButton } from './EditStyled';
const EditView = ({ handleSubmit, data, register }) => {
  return (
    <BoxStyled>
      <Text>Edit Todo Item</Text>
      <form onSubmit={handleSubmit}>
        <StyledInput placeholder={data?.itemName} {...register('itemName')} />
        <StyledInput
          placeholder={data?.description}
          {...register('description')}
        />
        <StyleButton htmlType='submit' text='Update' />
      </form>
    </BoxStyled>
  );
};

export default EditView;
