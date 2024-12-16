import { useContext } from "react";

import { productsContext } from "../../context/productsContext.jsx";
import ShoeList from "../HomePage/ShoeList.jsx";

export default function Category() {
  const { shoe } = useContext(productsContext);
  return (
    <>
      <h1>{shoe}</h1>
      <ShoeList />
    </>
  );
}
