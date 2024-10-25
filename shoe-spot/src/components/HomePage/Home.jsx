import ShoeList from "./ShoeList.jsx";

export default function Home({ products, isFilterOn }) {
  return (
    <>
      <h1>Home</h1>
      <ShoeList products={products} isFilterOn={isFilterOn} />
    </>
  );
}
