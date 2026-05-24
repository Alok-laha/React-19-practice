const Users = ({onClick}: {onClick: (c: string)=>void}) => {
  const clickHandler = () => {
    return onClick('product');
  }
  return (
    <div>
      <h2>Users</h2>
      <button onClick={clickHandler}>products</button>
    </div>
  );
};

export default Users;
