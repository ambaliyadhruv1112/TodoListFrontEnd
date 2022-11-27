const ListView = ({ handleSubmit, data, register }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder={data?.itemName} {...register('itemName')} />
      <input placeholder={data?.description} {...register('description')} />
      <button>Add</button>
    </form>
  );
};

export default ListView;
