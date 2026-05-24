const Product = ({ onClick }: { onClick: (c: string) => void }) => {
  return (
    <div>
      <h2>Products</h2>
      <button onClick={() => onClick("user")}>users</button>
    </div>
  );
};

export default Product;
