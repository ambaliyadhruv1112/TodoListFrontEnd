import { Button } from '@chemcycled/components';

const ColumnsData = (theme, EditProd, DeleteProd) => [
  {
    key: '1',
    title: 'Chemical Name',
    dataIndex: 'chemicalName',
  },
  {
    key: 2,
    title: 'Seller Name',
    dataIndex: 'sellerName',
  },
  {
    key: 3,
    title: 'Edit Item',
    render: (_, { _id }) => (
      <Button
        color='skin'
        fillColor={theme.color.secondary.secondary}
        icon='edit'
        iconOnly
        strokeColor={theme.color.secondary.secondary}
        variant='plain'
        onClick={() => EditProd(_id)}
      />
    ),
  },
  {
    key: 4,
    title: 'Delete Item',
    render: (_, { _id }) => (
      <Button
        color='skin'
        fillColor={theme.color.secondary.secondary}
        icon='trash'
        iconOnly
        variant='plain'
        onClick={() => DeleteProd(_id)}
      />
    ),
  },
];

export default ColumnsData;
