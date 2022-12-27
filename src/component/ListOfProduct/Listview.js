import { ListTable, StyleButton } from './ListStyled';
const ListView = ({ columns, dataSource, navigate }) => {
  const actionButton = {
    icon: 'add',
    text: 'Add Product',
    onClick: () => navigate('/addProduct'),
    fillColor: 'black',
    strokeColor: 'black',
  };
  return (
    <>
      <StyleButton {...actionButton} />

      <ListTable columns={columns} dataSource={dataSource} />
    </>
  );
};

export default ListView;
