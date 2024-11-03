import ShoeList from "./ShoeList.jsx";

export default function Home({
  products,
  isFilterOn,
  filterProducts,
  toggleFilter,
}) {
  return (
    <>
      <ShoeList
        products={products}
        isFilterOn={isFilterOn}
        filterProducts={filterProducts}
        toggleFilter={toggleFilter}
      />
    </>
  );
}
