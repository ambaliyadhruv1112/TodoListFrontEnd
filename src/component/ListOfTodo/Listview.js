import ListTable from './ListStyled';
import { Button } from '@chemcycled/components';
const ListView = ({ columns, dataSource, navigate }) => {
  const actionButton = {
    icon: 'add',
    text: 'Add Products',
    onClick: () => navigate('/'),
    fillColor: 'black',
    strokeColor: 'black',
  };
  return (
    <>
      <Button {...actionButton} />

      <ListTable columns={columns} dataSource={dataSource} />
    </>
  );
};

export default ListView;
