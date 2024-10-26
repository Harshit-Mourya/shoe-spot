import ShoeList from "./ShoeList.jsx";

export default function Home({ products, isFilterOn, filterProducts }) {
  return (
    <>
      <h1>Home</h1>
      <ShoeList
        products={products}
        isFilterOn={isFilterOn}
        filterProducts={filterProducts}
      />
    </>
  );
}
