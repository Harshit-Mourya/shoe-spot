import ShoeList from "./ShoeList.jsx";

export default function Home({ products }) {
  return (
    <>
      <h1>Home</h1>
      <ShoeList products={products} />
    </>
  );
}
